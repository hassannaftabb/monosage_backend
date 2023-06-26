import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class RecurringExpenseDTO {
  @IsString()
  category: string;

  @IsNotEmpty()
  value: string;

  @IsNumber()
  organizationId: number;

  @IsNotEmpty()
  currency: any;
}
