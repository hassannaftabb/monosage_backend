import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Put,
  Param,
  Delete,
  UseGuards,
  Req,
  Query,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express'
import { OrganizationsService } from './organizations.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AddUserDto } from 'src/users/dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { TagDTO } from './dto/create-tag.dto';
import { VendorDTO } from './dto/create-vendor.dto';
import { DocumentDTO } from './dto/create-document.dto';
import { diskStorage } from 'multer';
import { EmploymentTypeDTO } from './dto/create-employment-type.dto';
import { TeamDTO } from './dto/create-team.dto';

@Controller('organizations')
@ApiTags('Organization CRUD APIs')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Post()
  create(@Body() createOrganizationDto: CreateOrganizationDto) {
    return this.organizationsService.create(createOrganizationDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/user')
  findAll(@Req() req: any) {
    console.log(req.user);
    return this.organizationsService.findAllForUserId(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/all-users/:organizationId')
  findAllOrganizationUsers(@Param('organizationId') organizationId: number) {
    return this.organizationsService.allOrganizationUsers(organizationId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.organizationsService.findOne(+id);
  }

  @Post('/users/add')
  add(@Body() addUserDto: AddUserDto) {
    return this.organizationsService.addUser(addUserDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOrganizationDto: UpdateOrganizationDto,
  ) {
    return this.organizationsService.update(+id, updateOrganizationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.organizationsService.remove(+id);
  }

  // Tags
  @Post('tag')
  createTag(@Body() tagDto: TagDTO) {
      return this.organizationsService.createTag(tagDto);
  }

  @Get('organization/tag/all')
  getAllTags(@Query('organizationId') organizationId: number) {
      return this.organizationsService.getAllTagsByOrganizationId(
          organizationId,
      );
  }

  @Get('tag/:id')
  getTag(@Param('id') id: number) {
      return this.organizationsService.getTag(id);
  }

  @Delete('tag/:id')
  deleteTag(@Param('id') id: number) {
      return this.organizationsService.deleteTag(id);
  }

  @Put('tag/:id')
  updateTag(@Param('id') id: number, @Body() tagDto: TagDTO) {
      return this.organizationsService.updateTag(id, tagDto);
  }

  // Vendors
  @Post('vendor')
  createVendor(@Body() vendorDto: VendorDTO) {
      return this.organizationsService.createVendor(vendorDto);
  }

  @Get('organization/vendor/all')
  getAllVendors(@Query('organizationId') organizationId: number) {
      return this.organizationsService.getAllVendorsByOrganizationId(
          organizationId,
      );
  }

  @Get('vendor/:id')
  getVendor(@Param('id') id: number) {
      return this.organizationsService.getVendor(id);
  }

  @Delete('vendor/:id')
  deleteVendor(@Param('id') id: number) {
      return this.organizationsService.deleteVendor(id);
  }

  @Put('vendor/:id')
  updateVendor(@Param('id') id: number, @Body() vendorDto: VendorDTO) {
      return this.organizationsService.updateVendor(id, vendorDto);
  }

  // Documents
  @Post('document')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'public/documents',
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      }),
    })
  )
  createDocument(
    @Body() documentDto: DocumentDTO,
    @UploadedFile() file: Express.Multer.File,
  ) {
      return this.organizationsService.createDocument(documentDto, file);
  }

  @Get('organization/document/all')
  getAllDocuments(@Query('organizationId') organizationId: number) {
      return this.organizationsService.getAllDocumentsByOrganizationId(
          organizationId,
      );
  }

  @Get('document/:id')
  getDocument(@Param('id') id: number) {
      return this.organizationsService.getDocument(id);
  }

  @Delete('document/:id')
  deleteDocument(@Param('id') id: number) {
      return this.organizationsService.deleteDocument(id);
  }

  @Put('document/:id')
  updateDocument(@Param('id') id: number, @Body() documentDto: DocumentDTO) {
      return this.organizationsService.updateDocument(id, documentDto);
  }

  // EmploymentTypes
  @Post('employmentType')
  createEmploymentType(@Body() employmentTypeDto: EmploymentTypeDTO) {
      return this.organizationsService.createEmploymentType(employmentTypeDto);
  }

  @Get('organization/employmentType/all')
  getAllEmploymentTypes(@Query('organizationId') organizationId: number) {
      return this.organizationsService.getAllEmploymentTypesByOrganizationId(
          organizationId,
      );
  }

  @Get('employmentType/:id')
  getEmploymentType(@Param('id') id: number) {
      return this.organizationsService.getEmploymentType(id);
  }

  @Delete('employmentType/:id')
  deleteEmploymentType(@Param('id') id: number) {
      return this.organizationsService.deleteEmploymentType(id);
  }

  @Put('employmentType/:id')
  updateEmploymentType(@Param('id') id: number, @Body() employmentTypeDto: EmploymentTypeDTO) {
      return this.organizationsService.updateEmploymentType(id, employmentTypeDto);
  }

  // Teams
  @Post('team')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'public/teams',
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      }),
    })
  )
  createTeam(
    @Body() teamDto: TeamDTO,
    @UploadedFile() file: Express.Multer.File,
  ) {
      return this.organizationsService.createTeam(teamDto, file);
  }

  @Get('organization/team/all')
  getAllTeams(@Query('organizationId') organizationId: number) {
      return this.organizationsService.getAllTeamsByOrganizationId(
          organizationId,
      );
  }

  @Get('team/:id')
  getTeam(@Param('id') id: number) {
      return this.organizationsService.getTeam(id);
  }

  @Delete('team/:id')
  deleteTeam(@Param('id') id: number) {
      return this.organizationsService.deleteTeam(id);
  }

  @Put('team/:id')
  updateTeam(@Param('id') id: number, @Body() teamDto: TeamDTO) {
      return this.organizationsService.updateTeam(id, teamDto);
  }
}
