import { Module } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { OrganizationsController } from './organizations.controller';
import { RolesModule } from 'src/common/roles/roles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from 'src/common/roles/entities/role.entity';
import { Organization } from './entities/organization.entity';
import { User } from 'src/users/entities/user.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    RolesModule,
    TypeOrmModule.forFeature([Role, Organization, User]),
    UsersModule,
  ],
  controllers: [OrganizationsController],
  providers: [OrganizationsService],
})
export class OrganizationsModule {}
