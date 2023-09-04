import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { TaskService } from "./task.service";
import { TaskDTO } from "./dto/create-task.dto";
import { TeamTaskDTO } from "./dto/create-team-task.dto";

@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    // Tasks
    @Post('task')
    createTask(@Body() taskDto: TaskDTO) {
        return this.taskService.createTask(taskDto);
    }

    @Get('organization/task/all')
    getAllTasks(@Query('organizationId') organizationId: number) {
        return this.taskService.getAllTasksByOrganizationId(
            organizationId,
        );
    }

    @Get('task/:id')
    getTask(@Param('id') id: number) {
        return this.taskService.getTask(id);
    }

    @Delete('task/:id')
    deleteTask(@Param('id') id: number) {
        return this.taskService.deleteTask(id);
    }

    @Put('task/:id')
    updateTask(@Param('id') id: number, @Body() taskDto: TaskDTO) {
        return this.taskService.updateTask(id, taskDto);
    }

    // Team Tasks
    @Post('team-tasks')
    createTeamTask(@Body() teamTaskDto: TeamTaskDTO) {
        return this.taskService.createTeamTask(teamTaskDto);
    }

    @Get('organization/task/all')
    getAllTeamTasks(@Query('organizationId') organizationId: number) {
        return this.taskService.getAllTeamTasksByOrganizationId(
            organizationId,
        );
    }

    @Get('team-tasks/:id')
    getTeamTask(@Param('id') id: number) {
        return this.taskService.getTeamTask(id);
    }

    @Delete('team-tasks/:id')
    deleteTeamTask(@Param('id') id: number) {
        return this.taskService.deleteTeamTask(id);
    }

    @Put('team-tasks/:id')
    updateTeamTask(@Param('id') id: number, @Body() teamTaskDto: TeamTaskDTO) {
        return this.taskService.updateTeamTask(id, teamTaskDto);
    }
}
