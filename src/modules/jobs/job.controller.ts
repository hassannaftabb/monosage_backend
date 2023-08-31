import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { JobService } from "./job.service";
import { ProposalTemplateDTO } from "./dto/create-proposal-template.dto";

@Controller('job')
export class JobController {
    constructor(private readonly jobService: JobService) {}

    //ProposalTemplates
    @Post('proposal-template')
    createProposalTemplate(@Body() proposalTempalte: ProposalTemplateDTO) {
        return this.jobService.createJobTemplate(proposalTempalte);
    }

    @Get('organization/proposal-template/all')
    getAllProposalTemplates(@Query('organizationId') organizationId: number) {
        return this.jobService.getAllJobTemplatesByOrganizationId(
            organizationId,
        );
    }

    @Get('proposal-template/:id')
    getProposalTemplate(@Param('id') id: number) {
        return this.jobService.getProposalTemplate(id);
    }

    @Delete('proposal-template/:id')
    deleteProposalTemplate(@Param('id') id: number) {
        return this.jobService.deleteProposalTemplate(id);
    }

    @Put('proposal-template/:id')
    updateProposalTemplate(@Param('id') id: number, @Body() proposalTempalte: ProposalTemplateDTO) {
        return this.jobService.updateProposalTemplate(id, proposalTempalte);
    }
}
