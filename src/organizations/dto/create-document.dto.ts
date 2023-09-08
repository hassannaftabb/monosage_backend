import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class DocumentDTO {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
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
