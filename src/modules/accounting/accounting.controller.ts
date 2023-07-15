import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { AccountingService } from './accounting.service';
import { EstimateDTO } from './dto/create-estimate.dto';
import { ExpenseDTO } from './dto/create-expense.dto';
import { IncomeDTO } from './dto/create-income.dto';
import { RecurringExpenseDTO } from './dto/create-recurringexpense.dto';
import { InvoiceDTO } from './dto/create-invoice.dto';
import { PaymentDTO } from './dto/create-payment.dto';

@Controller('accounting')
export class AccountingController {
  constructor(private readonly accountingService: AccountingService) {}

  //Estimates
  @Post('estimate')
  createEstimate(@Body() estimateDto: EstimateDTO) {
    return this.accountingService.createEstimate(estimateDto);
  }

  @Get('organization/estimate/all')
  getAllEstimates(@Query('organizationId') organizationId: number) {
    console.log(organizationId);
    return this.accountingService.getAllEstimatesByOrganizationId(
      organizationId,
    );
  }

  @Get('estimate/:id')
  getEstimate(@Param('id') id: number) {
    return this.accountingService.getEstimate(id);
  }

  @Delete('estimate/:id')
  deleteEstimate(@Param('id') id: number) {
    return this.accountingService.deleteEstimate(id);
  }

  @Put('estimate/:id')
  updateEstimate(@Param('id') id: number, @Body() estimateDto: EstimateDTO) {
    return this.accountingService.updateEstimate(id, estimateDto);
  }

  //Expense
  @Post('expense')
  createExpense(@Body() expenseDto: ExpenseDTO) {
    return this.accountingService.createExpense(expenseDto);
  }

  @Get('organization/expense/all')
  getAllExpenses(@Query('organizationId') organizationId: number) {
    return this.accountingService.getAllExpensesByOrganizationId(
      organizationId,
    );
  }

  @Get('expense/:id')
  getExpense(@Param('id') id: number) {
    return this.accountingService.getExpense(id);
  }

  @Delete('expense/:id')
  deleteExpense(@Param('id') id: number) {
    return this.accountingService.deleteExpense(id);
  }

  @Put('expense/:id')
  updateExpense(@Param('id') id: number, @Body() expenseDto: ExpenseDTO) {
    return this.accountingService.updateExpense(id, expenseDto);
  }

  //Income
  @Post('income')
  createIncome(@Body() incomeDto: IncomeDTO) {
    return this.accountingService.createIncome(incomeDto);
  }

  @Get('organization/income/all')
  getAllIncomes(@Query('organizationId') organizationId: number) {
    return this.accountingService.getAllIncomesByOrganizationId(organizationId);
  }

  @Get('income/:id')
  getIncome(@Param('id') id: number) {
    return this.accountingService.getIncome(id);
  }

  @Delete('income/:id')
  deleteIncome(@Param('id') id: number) {
    return this.accountingService.deleteIncome(id);
  }

  @Put('income/:id')
  updateIncome(@Param('id') id: number, @Body() incomeDto: IncomeDTO) {
    return this.accountingService.updateIncome(id, incomeDto);
  }

  //Recurring expense
  @Post('recurring-expense')
  createRecurringExpense(@Body() recurringExpenseDto: RecurringExpenseDTO) {
    return this.accountingService.createRecurringExpense(recurringExpenseDto);
  }

  @Get('organization/recurring-expense/all')
  getAllRecurringExpenses(@Query('organizationId') organizationId: number) {
    return this.accountingService.getAllRecurringExpensesByOrganizationId(
      organizationId,
    );
  }

  @Get('recurring-expense/:id')
  getRecurringExpense(@Param('id') id: number) {
    return this.accountingService.getRecurringExpense(id);
  }

  @Delete('recurring-expense/:id')
  deleteRecurringExpense(@Param('id') id: number) {
    return this.accountingService.deleteRecurringExpense(id);
  }

  @Put('recurring-expense/:id')
  updateRecurringExpense(
    @Param('id') id: number,
    @Body() recurringExpenseDto: RecurringExpenseDTO,
  ) {
    return this.accountingService.updateRecurringExpense(
      id,
      recurringExpenseDto,
    );
  }

  // Invoice
  @Post('invoice')
  createInvoice(@Body() invoiceDto: InvoiceDTO) {
    return this.accountingService.createInvoice(invoiceDto);
  }
  @Get('organization/invoice/all')
  getAllInvoices(@Query('organizationId') organizationId: number) {
    return this.accountingService.getAllInvoicesByOrganizationId(
      organizationId,
    );
  }

  @Get('invoice/:id')
  getInvoice(@Param('id') id: number) {
    return this.accountingService.getInvoice(id);
  }

  @Put('invoice/:id')
  updateInvoice(@Param('id') id: number, @Body() invoiceDto: InvoiceDTO) {
    return this.accountingService.updateInvoice(id, invoiceDto);
  }

  @Delete('invoice/:id')
  deleteInvoice(@Param('id') id: number) {
    return this.accountingService.deleteInvoice(id);
  }

  // Payment
  @Post('payment')
  createPayment(@Body() paymentDto: PaymentDTO) {
    return this.accountingService.createPayment(paymentDto);
  }

  @Get('organization/payment/all')
  getAllPayments(@Query('organizationId') organizationId: number) {
    return this.accountingService.getAllPaymentsByOrganizationId(
      organizationId,
    );
  }

  @Get('payment/:id')
  getPayment(@Param('id') id: number) {
    return this.accountingService.getPayment(id);
  }

  @Put('payment/:id')
  updatePayment(@Param('id') id: number, @Body() paymentDto: PaymentDTO) {
    return this.accountingService.updatePayment(id, paymentDto);
  }

  @Delete('payment/:id')
  deletePayment(@Param('id') id: number) {
    return this.accountingService.deletePayment(id);
  }
}
