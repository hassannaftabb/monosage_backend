import { IsEmail, IsNumber, IsString } from 'class-validator';

export class AddUserDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  username: string;

  @IsString()
  role: string;

  @IsNumber()
  organizationId: number;
}
