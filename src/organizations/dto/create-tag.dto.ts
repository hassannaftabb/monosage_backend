import { IsNumber, IsString } from 'class-validator';

export class TagDTO {
    @IsString()
    tagName: string;

    @IsNumber()
    organizationId: number;

    @IsString()
    tagColor: string;

    @IsString()
    tenantLevel: boolean;
    
    @IsString()
    description: string;
}
