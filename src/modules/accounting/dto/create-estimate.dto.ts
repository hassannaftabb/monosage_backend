import { IsNotEmpty, IsNumber, IsString, IsBoolean } from 'class-validator';

export class EstimateDTO {
  @IsNumber()
  estimateNumber: number;

  @IsString()
  contact: string;

  @IsNotEmpty()
  estimateDate: string;

  @IsNotEmpty()
  dueDate: string;

  @IsNotEmpty()
  currency: any;

  @IsString()
  terms: string;

  @IsString()
  estimateType: string;

  @IsNumber()
  discountValue: number;

  @IsString()
  discountType: string;

  @IsNumber()
  organizationId: number;

  @IsNumber()
  tax1: number;

  @IsString()
  tax1Type: string;

  @IsNumber()
  tax2: number;

  @IsString()
  tax2Type: string;

  @IsBoolean()
  applyDiscountAfterTax: boolean;
}
