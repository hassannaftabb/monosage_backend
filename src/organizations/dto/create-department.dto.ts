import { IsNotEmpty, IsNumber, IsString, IsBoolean } from 'class-validator';

export class DepartmentDTO {
  @IsNumber()
  departmentName: string;

  @IsString()
  organizationId: number;

  @IsNotEmpty()
  employeeIds: string;

  @IsNotEmpty()
  tagIds: string;
}
