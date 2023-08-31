import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PipelineDTO {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNotEmpty()
  stages: [object];

  @IsNumber()
  organizationId: number;

  @IsBoolean()
  isActive: boolean;
}
