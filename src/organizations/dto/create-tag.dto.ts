import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class TagDTO {
    @IsString()
    tagName: string;

    @IsNumber()
    organizationId: number;

    @IsString()
    tagColor: string;

    @IsBoolean()
    tenantLevel: boolean;
    
    @IsString()
    description: string;
}
