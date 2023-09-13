import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lead } from './entities/lead.entity';
import { Tag } from 'src/organizations/entities/tag.entity';
import { Project } from 'src/organizations/entities/project.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Lead,
      Tag,
      Project
    ]),
  ],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
