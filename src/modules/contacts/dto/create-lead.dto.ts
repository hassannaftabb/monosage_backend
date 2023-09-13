import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';

export class LeadDTO {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  website: string;

  @IsNotEmpty()
  fax: any;

  @IsString()
  facialInformation: string;

  @IsNumber()
  projectId: number;

  @IsString()
  contactType: string;

  @IsNumber()
  tags: number;

  @IsNumber()
  organizationId: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  url: string;

  @ApiProperty({
    items: { type: 'string', format: 'binary' },
  })
  file?: Express.Multer.File
}
