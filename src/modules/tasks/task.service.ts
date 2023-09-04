import { Injectable, NotFoundException } from "@nestjs/common";
import { TaskDTO } from "./dto/create-task.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "./entities/task.entity";
import { Repository } from "typeorm";
import { TeamTask } from "./entities/team-task.entity";
import { TeamTaskDTO } from "./dto/create-team-task.dto";

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private readonly task: Repository<Task>,

        @InjectRepository(TeamTask)
        private readonly teamTask: Repository<TeamTask>,
    ) {}

    async createTask(taskDto: TaskDTO): Promise<Task> {
        const task = this.task.create(taskDto);
        await this.task.save(task);
        return task;
    }

    async getAllTasksByOrganizationId(organizationId: number): Promise<Task[]> {
        return this.task.find({
            where: {
                organizationId,
                isDeleted: false
            }
        });
    }

    async getTask(id: number): Promise<Task> {
        const proposal = this.task.findOneBy({ id });
        if (!proposal) throw new NotFoundException(`Proposal template with ID ${id} not found`);
        return proposal;
    }

    async deleteTask(id: number) {
        const result = await this.task.delete(id);
        if (result.affected === 0)
          throw new NotFoundException(`Proposal template with ID ${id} not found`);
    }

    async updateTask(id: number, proposalTempalte: TaskDTO) {
        const template = await this.getTask(id);
        for (const key in proposalTempalte) template[key] = proposalTempalte[key];
        await this.task.save(template);
        return template;
    }
    
    // Team Task
    async createTeamTask(taskDto: TeamTaskDTO): Promise<TeamTask> {
        const task = this.teamTask.create(taskDto);
        await this.teamTask.save(task);
        return task;
    }

    async getAllTeamTasksByOrganizationId(organizationId: number): Promise<TeamTask[]> {
        return this.teamTask.find({
            where: {
                organizationId,
                isDeleted: false
            }
        });
    }

    async getTeamTask(id: number): Promise<TeamTask> {
        const proposal = this.teamTask.findOneBy({ id });
        if (!proposal) throw new NotFoundException(`Proposal template with ID ${id} not found`);
        return proposal;
    }

    async deleteTeamTask(id: number) {
        const result = await this.teamTask.delete(id);
        if (result.affected === 0)
          throw new NotFoundException(`Proposal template with ID ${id} not found`);
    }

    async updateTeamTask(id: number, proposalTempalte: TeamTaskDTO) {
        const template = await this.getTeamTask(id);
        for (const key in proposalTempalte) template[key] = proposalTempalte[key];
        await this.teamTask.save(template);
        return template;
    }
}