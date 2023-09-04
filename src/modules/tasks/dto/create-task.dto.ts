import { IsNumber, IsString } from 'class-validator';

export class TaskDTO {
  @IsString()
  taskNumber: string;

  @IsString()
  employee: string;
  
  @IsString()
  project: string;
  
  @IsString()
  size: string;
  
  @IsString()
  priority: string;
  
  @IsString()
  status: string;
  
  @IsString()
  tags: string;
  
  @IsString()
  dueDate: string;
  
  @IsString()
  estimateDays: string;
  
  @IsString()
  estimateHours: string;
  
  @IsString()
  estimateMinutes: string;
  
  @IsString()
  title: string;

  @IsNumber()
  organizationId: number;

  @IsString()
  terms: string;

  @IsString()
  taskType: string;
}
