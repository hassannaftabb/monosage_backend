import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lead } from './entities/lead.entity';
import { LeadDTO } from './dto/create-lead.dto';
import { OrganizationsService } from 'src/organizations/organizations.service';
import { Tag } from 'src/organizations/entities/tag.entity';
import { Project } from 'src/organizations/entities/project.entity';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Lead)
    private readonly leadRepository: Repository<Lead>,
    
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
    
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async createLead(leadDto: LeadDTO): Promise<Lead> {
    // let l = new Lead;
    // l.name = leadDto.name;
    // l.phone = leadDto.phone;
    // l.website = leadDto.website;
    // l.email = leadDto.email;
    // l.fax = leadDto.fax;
    // l.facialInformation = leadDto.facialInformation;
    // l.contactType = leadDto.contactType;
    // l.projectId = leadDto.projectId;
    // l.organizationId = leadDto.organizationId;
    // const tag = await this.tagRepository.findOne({where: {
    //     id: leadDto.tags
    // }});
    // l.tags = [tag];
    // l.project = await this.projectRepository.findOne({where: {
    //     id: leadDto.projectId
    // }});
    const newLead = this.leadRepository.create(leadDto);
    await this.leadRepository.save(newLead);
    return newLead;
  }

  async getAllLeadsByOrganizationId(
    organizationId: number,
  ): Promise<Lead[]> {
    return this.leadRepository.find({
      where: {
        organizationId: organizationId,
      },
    });
  }

  async getLead(id: number): Promise<Lead> {
    const found = await this.leadRepository.findOneBy({ id });
    if (!found) throw new NotFoundException(`Lead with ID ${id} not found`);
    return found;
  }

  async deleteLead(id: number): Promise<void> {
    const result = await this.leadRepository.delete(id);
    if (result.affected === 0)
      throw new NotFoundException(`Lead with ID ${id} not found`);
  }

  async updateLead(
    id: number,
    leadDto: LeadDTO,
  ): Promise<Lead> {
    const lead = await this.getLead(id);
    for (const key in leadDto) lead[key] = leadDto[key];
    await this.leadRepository.save(lead);
    return lead;
  }
}
