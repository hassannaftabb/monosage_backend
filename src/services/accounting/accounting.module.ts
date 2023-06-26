import { Module } from '@nestjs/common';
import { AccountingService } from './accounting.service';
import { AccountingController } from './accounting.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estimate } from './entities/estimate.entity';
import { Income } from './entities/income.entity';
import { Payment } from './entities/payment.entity';
import { RecurringExpense } from './entities/recurring-expense.entity';
import { Expense } from './entities/expense.entity';
import { Invoice } from './entities/invoice.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Estimate,
      Income,
      Payment,
      RecurringExpense,
      Expense,
      Invoice,
    ]),
  ],
  controllers: [AccountingController],
  providers: [AccountingService],
})
export class AccountingModule {}
