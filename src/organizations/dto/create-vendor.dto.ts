import { IsNumber, IsString } from 'class-validator';

export class VendorDTO {
    @IsString()
    vendorName: string;

    @IsString()
    vendorPhone: string;
    
    @IsString()
    vendorEmail: string;
    
    @IsString()
    vendorWebsite: string;
    
    @IsString()
    tags: string;

    @IsNumber()
    organizationId: number;
}
