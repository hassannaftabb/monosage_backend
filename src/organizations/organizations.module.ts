import { Module } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { OrganizationsController } from './organizations.controller';
import { RolesModule } from 'src/common/roles/roles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from 'src/common/roles/entities/role.entity';
import { Organization } from './entities/organization.entity';
import { User } from 'src/users/entities/user.entity';
import { UsersModule } from 'src/users/users.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { Tag } from './entities/tag.entity';
import { Document } from './entities/document.entity';
import { Vendor } from './entities/vendor.entity';
import { Employee } from 'src/modules/employees/entities/employee.entity';
import { Department } from './entities/department.entity';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..'),
    }),
    RolesModule,
    TypeOrmModule.forFeature([Role, Organization, User, Tag, Document, Vendor, Employee, Department]),
    UsersModule,
  ],
  controllers: [OrganizationsController],
  providers: [OrganizationsService],
})
export class OrganizationsModule {}
