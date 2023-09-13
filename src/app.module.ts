import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OrganizationsModule } from './organizations/organizations.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './common/roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { AccountingModule } from './modules/accounting/accounting.module';
import { SalesModule } from './modules/sales/sales.module';
import { JobModule } from './modules/jobs/job.module';
import { TaskModule } from './modules/tasks/task.module';
import { ContactModule } from './modules/contacts/contact.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => ({
        type: 'postgres',
        host: '212.162.150.194',
        port: 5432,
        username: 'postgres',
        password: 'Vishal@123',
        database: 'template1',
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    OrganizationsModule,
    UsersModule,
    RolesModule,
    AuthModule,
    AccountingModule,
    SalesModule,
    JobModule,
    TaskModule,
    ContactModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
