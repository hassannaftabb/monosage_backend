import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class TaskDTO {
  @IsString()
  employee: string;

  @IsNumber()
  organizationId: number;

  @IsString()
  name: string;

  @IsString()
  content: string;
}
