import { IsEmail, IsNumber, IsString } from 'class-validator';

export class EmployeeDto {
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
  profilePictureUrl: string;

  @IsString()
  startDate: string;

  @IsString()
  rejectedDate: string;

  @IsString()
  offerDate: string;

  @IsString()
  acceptDate: string;

  @IsNumber()
  organizationId: number;
}
