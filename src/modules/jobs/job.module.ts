import { Module } from '@nestjs/common';
import { JobService } from './job.service';
import { JobController } from './job.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProposalTemplate } from './entities/proposal-template.entity';

@Module({
    imports: [
      TypeOrmModule.forFeature([
        ProposalTemplate,
      ]),
    ],
  controllers: [JobController],
  providers: [JobService]
})
export class JobModule {}
