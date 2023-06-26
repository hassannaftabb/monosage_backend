import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateOrganizationDto {
  @IsString()
  organizationName: string;

  @IsOptional()
  currency: any;

  @IsString()
  officialName: string;

  @IsString()
  taxId: string;

  @IsOptional()
  country: any;

  @IsString()
  city: string;

  @IsString()
  @IsOptional()
  postalCode: string;

  @IsString()
  address: string;

  @IsString()
  @IsOptional()
  address2: string;

  @IsNumber()
  lat: number;

  @IsNumber()
  lng: number;

  @IsString()
  @IsOptional()
  employeeBonusType: string;

  @IsString()
  @IsOptional()
  employeeBonusPercentage: string;

  @IsOptional()
  timeZone: any;

  @IsString()
  @IsOptional()
  startWeekOn: string;

  @IsString()
  @IsOptional()
  defaultDateType: string;

  @IsString()
  @IsOptional()
  region: string;

  @IsString()
  userId: string;
}
