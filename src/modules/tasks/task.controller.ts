import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { TaskService } from "./task.service";
import { TaskDTO } from "./dto/create-task.dto";

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    //Tasks
    @Post('proposal-template')
    createTask(@Body() proposalTempalte: TaskDTO) {
        // return this.taskService.createTask(proposalTempalte);
    }

    @Get('organization/proposal-template/all')
    getAllTasks(@Query('organizationId') organizationId: number) {
        // return this.taskService.getAllTasksByOrganizationId(
        //     organizationId,
        // );
    }

    @Get('proposal-template/:id')
    getTask(@Param('id') id: number) {
        return this.taskService.getTask(id);
    }

    @Delete('proposal-template/:id')
    deleteTask(@Param('id') id: number) {
        return this.taskService.deleteTask(id);
    }

    @Put('proposal-template/:id')
    updateTask(@Param('id') id: number, @Body() proposalTempalte: TaskDTO) {
        return this.taskService.updateTask(id, proposalTempalte);
    }
}
