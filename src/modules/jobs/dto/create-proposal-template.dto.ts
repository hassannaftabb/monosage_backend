import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ProposalTemplateDTO {
  @IsString()
  employee: string;

  @IsNumber()
  organizationId: number;

  @IsString()
  name: string;

  @IsString()
  content: string;
}
