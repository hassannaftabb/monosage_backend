import { Injectable, NotFoundException } from "@nestjs/common";
import { ProposalTemplateDTO } from "./dto/create-proposal-template.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { ProposalTemplate } from "./entities/proposal-template.entity";
import { Repository } from "typeorm";

@Injectable()
export class JobService {
    constructor(
        @InjectRepository(ProposalTemplate)
        private readonly proposalTemplate: Repository<ProposalTemplate>,
    ) {}

    async createJobTemplate(proposalTempalte: ProposalTemplateDTO): Promise<ProposalTemplate> {
        const proposalTemplate = this.proposalTemplate.create(proposalTempalte);
        await this.proposalTemplate.save(proposalTemplate);
        return proposalTemplate;
    }

    async getAllJobTemplatesByOrganizationId(organizationId: number): Promise<ProposalTemplate[]> {
        return this.proposalTemplate.find({
            where: {
                organizationId,
                isDeleted: false
            }
        });
    }

    async getProposalTemplate(id: number): Promise<ProposalTemplate> {
        const proposal = this.proposalTemplate.findOneBy({ id });
        if (!proposal) throw new NotFoundException(`Proposal template with ID ${id} not found`);
        return proposal;
    }

    async deleteProposalTemplate(id: number) {
        const result = await this.proposalTemplate.delete(id);
        if (result.affected === 0)
          throw new NotFoundException(`Proposal template with ID ${id} not found`);
    }

    async updateProposalTemplate(id: number, proposalTempalte: ProposalTemplateDTO) {
        const template = await this.getProposalTemplate(id);
        for (const key in proposalTempalte) template[key] = proposalTempalte[key];
        await this.proposalTemplate.save(template);
        return template;
    }
}