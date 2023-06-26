import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OrganizationsModule } from './organizations/organizations.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './common/roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { AccountingModule } from './services/accounting/accounting.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'hardstone349',
        database: 'postgres',
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    OrganizationsModule,
    UsersModule,
    RolesModule,
    AuthModule,
    AccountingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
