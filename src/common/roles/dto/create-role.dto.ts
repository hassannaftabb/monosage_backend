import { IsNumber, IsString } from 'class-validator';

export class CreateRoleDto {
  @IsString()
  name: string;

  @IsNumber()
  organizationId: number;
}
