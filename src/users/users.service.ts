import { BadRequestException, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterUserDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(registerUserDto: RegisterUserDto) {
    const user = await this.userRepository.findOneBy({
      email: registerUserDto.email,
    });

    if (user) {
      throw new BadRequestException(
        'There is already a user registered with this email',
      );
    }
    const firstName = registerUserDto.fullName.split(' ')[0];
    const lastName = registerUserDto.fullName.split(' ')[1];

    const userToCreate = {
      email: registerUserDto.email,
      password: await bcrypt.hash(registerUserDto.password, 10),
      role: 'SUPER_ADMIN',
      username: 'SUPER_ADMIN',
      firstName: firstName || 'Super',
      lastName: lastName || '',
    };

    const createdUser = this.userRepository.create(userToCreate);
    const payload = {
      email: registerUserDto.email,
      password: registerUserDto.password,
      role: userToCreate.role,
      id: createdUser.id,
    };
    console.log(process.env.JWT_SECRET);
    const token = this.jwtService.sign(payload);
    return await this.userRepository.save({ ...createdUser, token });
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOneBy({
      email: email,
    });
    if (user) {
      return user;
    } else {
      return null;
    }
  }
  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
