import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PaymentDTO {
  @IsString()
  contact: string;

  @IsString()
  project: string;

  @IsNotEmpty()
  paymentDate: string;

  @IsString()
  paymentMethod: string;

  @IsNotEmpty()
  currency: any;

  @IsNotEmpty()
  amount: string;

  @IsNumber()
  organizationId: number;

  @IsString()
  note: string;

  @IsNumber()
  invoiceId: number;
}
