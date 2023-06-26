import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ExpenseDTO {
  @IsString()
  employee: string;

  @IsString()
  category: string;

  @IsNotEmpty()
  date: string;

  @IsString()
  vendorOrMerchant: string;

  @IsNotEmpty()
  amount: string;

  @IsNotEmpty()
  currency: any;

  @IsNumber()
  organizationId: number;

  @IsString()
  purpose: string;

  @IsString()
  contact: string;

  @IsString()
  project: string;

  @IsString()
  status: string;

  @IsString()
  type: string;
}
