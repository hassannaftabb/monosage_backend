import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estimate } from './entities/estimate.entity';
import { Payment } from './entities/payment.entity';
import { Proposal } from './entities/proposal.entity';
import { Invoice } from './entities/invoice.entity';
import { Pipeline } from './entities/pipeline.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Proposal,
      Estimate,
      Invoice,
      Payment,
      Pipeline,
    ]),
  ],
  controllers: [SalesController],
  providers: [SalesService]
})
export class SalesModule {}
