import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Organization } from './entities/organization.entity';
import { Repository } from 'typeorm';
import { Role } from 'src/common/roles/entities/role.entity';
import { RolesService } from 'src/common/roles/roles.service';
import { User } from 'src/users/entities/user.entity';
import { AddUserDto } from 'src/users/dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectRepository(Organization)
    private readonly organizationRepository: Repository<Organization>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
    private rolesService: RolesService,
  ) {}
  async create(createOrganizationDto: CreateOrganizationDto) {
    const user = await this.userRepository.findOne({
      where: { id: Number(createOrganizationDto.userId) },
      relations: ['organizations'],
    });
    if (!user) {
      throw new NotFoundException('No user found!');
    }
    const organization = this.organizationRepository.create({
      ...createOrganizationDto,
    });
    // Save the organization first
    const savedOrganization = await this.organizationRepository.save(
      organization,
    );

    // Add the organization to the user's organizations and save the user
    user.organizations = [...user.organizations, savedOrganization];
    await this.userRepository.save(user);

    await this.rolesService.createDefaultRolesForOrganization(organization);
    return savedOrganization;
  }

  async findAllForUserId(userId: number) {
    console.log(userId);
    return await this.organizationRepository
      .createQueryBuilder('organization')
      .innerJoinAndSelect('organization.users', 'user', 'user.id = :userId', {
        userId,
      })
      .getMany();
  }

  async addUser(addUserDto: AddUserDto) {
    const organization = await this.organizationRepository.findOneBy({
      id: addUserDto.organizationId,
    });
    if (!organization) {
      throw new NotFoundException();
    }

    const user = await this.userRepository.findOne({
      where: { email: addUserDto.email },
      relations: ['organizations'],
    });

    if (user) {
      throw new BadRequestException(
        'There is already a user registered with this email',
      );
    }

    const userToCreate = this.userRepository.create({
      email: addUserDto.email,
      password: await bcrypt.hash(addUserDto.password, 10),
      role: addUserDto.role,
      username: addUserDto.username,
      firstName: addUserDto.firstName || '',
      lastName: addUserDto.lastName || '',
      organizations: [organization],
    });

    return await this.userRepository.save(userToCreate);
  }
  async allOrganizationUsers(organizationId: number) {
    return await this.userRepository
      .createQueryBuilder('user')
      .innerJoinAndSelect(
        'user.organizations',
        'organization',
        'organization.id = :organizationId',
        { organizationId },
      )
      .getMany();
  }

  findAll() {
    return `This action returns all organizations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} organization`;
  }

  update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    return `This action updates a #${id} organization`;
  }

  remove(id: number) {
    return `This action removes a #${id} organization`;
  }
}
