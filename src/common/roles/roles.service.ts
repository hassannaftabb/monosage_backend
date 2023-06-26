import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';
import { defaultRoles } from 'src/constants/defaultRoles';
import { Organization } from 'src/organizations/entities/organization.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}
  async create(createRoleDto: CreateRoleDto) {
    const role = this.roleRepository.create(createRoleDto);
    return await this.roleRepository.save(role);
  }

  findAll() {
    return this.roleRepository.find();
  }

  async findOne(id: number) {
    return await this.roleRepository.findBy({
      id: id,
    });
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    await this.roleRepository
      .update({ id: id }, updateRoleDto)
      .then(async () => {
        return await this.roleRepository.findBy({ id: id });
      })
      .catch((err) => {
        return err;
      });
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }

  createDefaultRolesForOrganization(organization: Organization) {
    defaultRoles.forEach(async (r) => {
      const role = this.roleRepository.create({
        organization: organization,
        name: r,
      });
      await this.roleRepository.save(role);
    });
  }
}
