import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsBoolean, IsOptional } from 'class-validator';

export class TeamDTO {
  @IsNumber()
  name: string;

  @IsString()
  organizationId: number;

  @IsNotEmpty()
  managerTeam: string;

  @IsNotEmpty()
  members: string;

  @IsNotEmpty()
  tags: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  url: string;

  @ApiProperty({
    items: { type: 'string', format: 'binary' },
  })
  file?: Express.Multer.File
}
