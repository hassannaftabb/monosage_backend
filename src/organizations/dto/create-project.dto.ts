import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class ProjectDTO {

    @ApiProperty()
    @IsString()
    name: string;
    
    @ApiProperty()
    @IsString()
    code: string;
    
    @ApiProperty()
    @IsString()
    url: string;
    
    @ApiProperty()
    @IsString()
    ownerType: string;
    
    @ApiProperty()
    @IsString()
    clientId: string;
    
    @ApiProperty()
    @IsString()
    startDate: string;
    
    @ApiProperty()
    @IsString()
    endDate: string;
    
    @ApiProperty()
    @IsString()
    description: string;
    
    @ApiProperty()
    @IsString()
    tags: string;
    
    @ApiProperty()
    @IsString()
    billingRate: string;
    
    @ApiProperty()
    @IsString()
    currency: string;
    
    @ApiProperty()
    @IsString()
    budgetType: string;
    
    @ApiProperty()
    @IsString()
    budget: string;
    
    @ApiProperty()
    @IsBoolean()
    isOpenSource: boolean;
    
    @ApiProperty()
    @IsBoolean()
    isPublic: boolean;
    
    @ApiProperty()
    @IsBoolean()
    isBillable: boolean;
    
    @ApiProperty()
    @IsString()
    colorCode: string;
    
    @ApiProperty()
    @IsString()
    taskViewMode: string;

    @ApiProperty()
    @IsNumber()
    organizationId: number;

    @ApiProperty({
      items: { type: 'string', format: 'binary' },
    })
    file?: Express.Multer.File
}
