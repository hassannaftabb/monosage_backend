import { IsNotEmpty, IsNumber, IsString, IsBoolean } from 'class-validator';

export class InvoiceDTO {
  @IsNumber()
  invoiceNumber: number;

  @IsString()
  contact: string;

  @IsNotEmpty()
  invoiceDate: string;

  @IsNotEmpty()
  dueDate: string;

  @IsNotEmpty()
  currency: any;

  @IsString()
  terms: string;

  @IsString()
  invoiceType: string;

  @IsNumber()
  discountValue: number;

  @IsNumber()
  organizationId: number;

  @IsString()
  discountType: string;

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
