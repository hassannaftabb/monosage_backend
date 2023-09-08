import { IsNotEmpty, IsNumber, IsString, IsBoolean } from 'class-validator';

export class EmploymentTypeDTO {
  @IsNumber()
  name: string;

  @IsString()
  organizationId: number;

  @IsNotEmpty()
  tags: string;
}
