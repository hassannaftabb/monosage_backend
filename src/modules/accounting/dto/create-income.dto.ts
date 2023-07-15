import { IsNotEmpty, IsString, IsBoolean, IsNumber } from 'class-validator';

export class IncomeDTO {
  @IsString()
  employee: string;

  @IsString()
  contact: string;

  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  currency: any;

  @IsNotEmpty()
  amount: string;

  @IsNumber()
  organizationId: number;

  @IsBoolean()
  bonus: boolean;

  @IsString()
  description: string;
}
