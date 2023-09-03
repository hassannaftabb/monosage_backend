import { Injectable, NotFoundException } from "@nestjs/common";
import { TaskDTO } from "./dto/create-task.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "./entities/task.entity";
import { Repository } from "typeorm";

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private readonly proposalTemplate: Repository<Task>,
    ) {}

    async createTaskTemplate(proposalTempalte: TaskDTO): Promise<Task> {
        const proposalTemplate = this.proposalTemplate.create(proposalTempalte);
        await this.proposalTemplate.save(proposalTemplate);
        return proposalTemplate;
    }

    async getAllTaskTemplatesByOrganizationId(organizationId: number): Promise<Task[]> {
        return this.proposalTemplate.find({
            where: {
                organizationId,
                isDeleted: false
            }
        });
    }

    async getTask(id: number): Promise<Task> {
        const proposal = this.proposalTemplate.findOneBy({ id });
        if (!proposal) throw new NotFoundException(`Proposal template with ID ${id} not found`);
        return proposal;
    }

    async deleteTask(id: number) {
        const result = await this.proposalTemplate.delete(id);
        if (result.affected === 0)
          throw new NotFoundException(`Proposal template with ID ${id} not found`);
    }

    async updateTask(id: number, proposalTempalte: TaskDTO) {
        const template = await this.getTask(id);
        for (const key in proposalTempalte) template[key] = proposalTempalte[key];
        await this.proposalTemplate.save(template);
        return template;
    }
}