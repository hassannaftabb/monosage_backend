import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
  } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ApiTags } from '@nestjs/swagger';
import { LeadDTO } from './dto/create-lead.dto';
  
  @Controller('contacts')
  @ApiTags('Contact CRUD APIs')
  export class ContactController {
    constructor(private readonly contactService: ContactService) {}
  
    //Leads
    @Post('leads')
    createLead(@Body() leadsDto: LeadDTO) {
      return this.contactService.createLead(leadsDto);
    }

    @Get('organization/leads/all')
    getAllLeads(@Query('organizationId') organizationId: number) {
      console.log(organizationId);
      return this.contactService.getAllLeadsByOrganizationId(
        organizationId,
      );
    }
  
    @Get('leads/:id')
    getLead(@Param('id') id: number) {
      return this.contactService.getLead(id);
    }
  
    @Delete('leads/:id')
    deleteLead(@Param('id') id: number) {
      return this.contactService.deleteLead(id);
    }
  
    @Put('leads/:id')
    updateLead(@Param('id') id: number, @Body() leadsDto: LeadDTO) {
      return this.contactService.updateLead(id, leadsDto);
    }
}
  