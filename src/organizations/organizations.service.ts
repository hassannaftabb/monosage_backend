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
import { TagDTO } from './dto/create-tag.dto';
import { Tag } from './entities/tag.entity';
import { Vendor } from './entities/vendor.entity';
import { VendorDTO } from './dto/create-vendor.dto';
import { DocumentDTO } from './dto/create-document.dto';
import { Document } from './entities/document.entity';
import { EmploymentTypeDTO } from './dto/create-employment-type.dto';
import { EmploymentType } from './entities/employment-type.entity';
import { TeamDTO } from './dto/create-team.dto';
import { Team } from './entities/team.entity';
import { ProjectDTO } from './dto/create-project.dto';
import { Project } from './entities/project.entity';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectRepository(Organization)
    private readonly organizationRepository: Repository<Organization>,

    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,

    @InjectRepository(Vendor)
    private readonly vendorRepository: Repository<Vendor>,

    @InjectRepository(Document)
    private readonly documentRepository: Repository<Document>,

    @InjectRepository(EmploymentType)
    private readonly employmentTypeRepository: Repository<EmploymentType>,

    @InjectRepository(Team)
    private readonly teamRepository: Repository<Team>,

    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    
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

  // Tags
  async createTag(tagDto: TagDTO): Promise<Tag> {
      const tag = this.tagRepository.create(tagDto);
      await this.tagRepository.save(tag);
      return tag;
  }

  async getAllTagsByOrganizationId(organizationId: number): Promise<Tag[]> {
      return this.tagRepository.find({
          where: {
              organizationId,
              isDeleted: false
          }
      });
  }

  async getTag(id: number): Promise<Tag> {
      const tag = this.tagRepository.findOneBy({ id });
      if (!tag) throw new NotFoundException(`Vendor with ID ${id} not found`);
      return tag;
  }

  async deleteTag(id: number) {
      const result = await this.tagRepository.delete(id);
      if (result.affected === 0)
        throw new NotFoundException(`Vendor with ID ${id} not found`);
  }

  async updateTag(id: number, tagDto: TagDTO) {
      const template = await this.getTag(id);
      for (const key in tagDto) template[key] = tagDto[key];
      await this.tagRepository.save(template);
      return template;
  }

  // Vendors
  async createVendor(vendorDto: VendorDTO): Promise<Vendor> {
    const newVendor = new Vendor;
    const vendor = this.vendorRepository.create(newVendor);
    await this.vendorRepository.save(vendor);
    return vendor;
  }

  async getAllVendorsByOrganizationId(organizationId: number): Promise<Vendor[]> {
      return this.vendorRepository.find({
          where: {
              organizationId,
              isDeleted: false
          }
      });
  }

  async getVendor(id: number): Promise<Vendor> {
      const vendor = this.vendorRepository.findOneBy({ id });
      if (!vendor) throw new NotFoundException(`Vendor with ID ${id} not found`);
      return vendor;
  }

  async deleteVendor(id: number) {
      const result = await this.vendorRepository.delete(id);
      if (result.affected === 0)
        throw new NotFoundException(`Vendor with ID ${id} not found`);
  }

  async updateVendor(id: number, vendorDto: VendorDTO) {
      const vendor = await this.getVendor(id);
      for (const key in vendorDto) vendor[key] = vendorDto[key];
      await this.vendorRepository.save(vendor);
      return vendor;
  }

  // Documents
  async createDocument(documentDto: DocumentDTO, file: Express.Multer.File): Promise<Document> {
    documentDto.file = file;
    documentDto.url = file.path;
    const document = this.documentRepository.create(documentDto);
    await this.documentRepository.save(document);
    return document;
  }

  async getAllDocumentsByOrganizationId(organizationId: number): Promise<Document[]> {
      return this.documentRepository.find({
          where: {
              organizationId,
              isDeleted: false
          }
      });
  }

  async getDocument(id: number): Promise<Document> {
      const document = this.documentRepository.findOneBy({ id });
      if (!document) throw new NotFoundException(`Document with ID ${id} not found`);
      return document;
  }

  async deleteDocument(id: number) {
      const result = await this.documentRepository.delete(id);
      if (result.affected === 0)
        throw new NotFoundException(`Document with ID ${id} not found`);
  }

  async updateDocument(id: number, documentDto: DocumentDTO) {
      const document = await this.getDocument(id);
      for (const key in documentDto) document[key] = documentDto[key];
      await this.documentRepository.save(document);
      return document;
  }

  // EmploymentTypes
  async createEmploymentType(employmentTypeDto: EmploymentTypeDTO): Promise<EmploymentType> {
    const newEmploymentType = new EmploymentType;
    const employmentType = this.employmentTypeRepository.create(newEmploymentType);
    await this.employmentTypeRepository.save(employmentType);
    return employmentType;
  }

  async getAllEmploymentTypesByOrganizationId(organizationId: number): Promise<EmploymentType[]> {
      return this.employmentTypeRepository.find({
          where: {
              organizationId,
              isDeleted: false
          }
      });
  }

  async getEmploymentType(id: number): Promise<EmploymentType> {
      const employmentType = this.employmentTypeRepository.findOneBy({ id });
      if (!employmentType) throw new NotFoundException(`Employment Type with ID ${id} not found`);
      return employmentType;
  }

  async deleteEmploymentType(id: number) {
      const result = await this.employmentTypeRepository.delete(id);
      if (result.affected === 0)
        throw new NotFoundException(`Employment Type with ID ${id} not found`);
  }

  async updateEmploymentType(id: number, employmentTypeDto: EmploymentTypeDTO) {
      const employmentType = await this.getEmploymentType(id);
      for (const key in employmentTypeDto) employmentType[key] = employmentTypeDto[key];
      await this.employmentTypeRepository.save(employmentType);
      return employmentType;
  }

  // Teams
  async createTeam(teamDto: TeamDTO, file: Express.Multer.File): Promise<Team> {
    const newTeam = new Team;
    teamDto.file = file;
    teamDto.url = file.path;
    const team = this.teamRepository.create(newTeam);
    await this.teamRepository.save(team);
    return team;
  }

  async getAllTeamsByOrganizationId(organizationId: number): Promise<Team[]> {
      return this.teamRepository.find({
          where: {
              organizationId,
              isDeleted: false
          }
      });
  }

  async getTeam(id: number): Promise<Team> {
      const team = this.teamRepository.findOneBy({ id });
      if (!team) throw new NotFoundException(`Employment Type with ID ${id} not found`);
      return team;
  }

  async deleteTeam(id: number) {
      const result = await this.teamRepository.delete(id);
      if (result.affected === 0)
        throw new NotFoundException(`Employment Type with ID ${id} not found`);
  }

  async updateTeam(id: number, teamDto: TeamDTO) {
      const team = await this.getTeam(id);
      for (const key in teamDto) team[key] = teamDto[key];
      await this.teamRepository.save(team);
      return team;
  }

  // Projects
  async createProject(projectDto: ProjectDTO, file: Express.Multer.File): Promise<Project> {
    projectDto.file = file;
    projectDto.url = file.path;
    console.log(projectDto);
    const project = this.projectRepository.create(projectDto);
    await this.projectRepository.save(project);
    return project;
  }

  async getAllProjectsByOrganizationId(organizationId: number): Promise<Project[]> {
      return this.projectRepository.find({
          where: {
              organizationId,
              isDeleted: false
          }
      });
  }

  async getProject(id: number): Promise<Project> {
      const project = this.projectRepository.findOneBy({ id });
      if (!project) throw new NotFoundException(`Project with ID ${id} not found`);
      return project;
  }

  async deleteProject(id: number) {
      const result = await this.projectRepository.delete(id);
      if (result.affected === 0)
        throw new NotFoundException(`Project with ID ${id} not found`);
  }

  async updateProject(id: number, projectDto: ProjectDTO) {
      const project = await this.getProject(id);
      for (const key in projectDto) project[key] = projectDto[key];
      await this.projectRepository.save(project);
      return project;
  }
}
