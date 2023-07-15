import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Estimate } from './entities/estimate.entity';
import { Repository } from 'typeorm';
import { Income } from './entities/income.entity';
import { Invoice } from './entities/invoice.entity';
import { Payment } from './entities/payment.entity';
import { RecurringExpense } from './entities/recurring-expense.entity';
import { Expense } from './entities/expense.entity';
import { EstimateDTO } from './dto/create-estimate.dto';
import { ExpenseDTO } from './dto/create-expense.dto';
import { IncomeDTO } from './dto/create-income.dto';
import { RecurringExpenseDTO } from './dto/create-recurringexpense.dto';
import { InvoiceDTO } from './dto/create-invoice.dto';
import { PaymentDTO } from './dto/create-payment.dto';

@Injectable()
export class AccountingService {
  constructor(
    @InjectRepository(Estimate)
    private readonly estimateRepository: Repository<Estimate>,

    @InjectRepository(Income)
    private readonly incomeRepository: Repository<Income>,

    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>,

    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,

    @InjectRepository(RecurringExpense)
    private readonly recurringExpenseRepository: Repository<RecurringExpense>,

    @InjectRepository(Expense)
    private readonly expenseRepository: Repository<Expense>,
  ) {}

  async createEstimate(estimateDto: EstimateDTO): Promise<Estimate> {
    const newEstimate = this.estimateRepository.create(estimateDto);
    await this.estimateRepository.save(newEstimate);
    return newEstimate;
  }

  async getAllEstimatesByOrganizationId(
    organizationId: number,
  ): Promise<Estimate[]> {
    return this.estimateRepository.find({
      where: {
        organizationId: organizationId,
      },
    });
  }

  async getEstimate(id: number): Promise<Estimate> {
    const found = await this.estimateRepository.findOneBy({ id });
    if (!found) throw new NotFoundException(`Estimate with ID ${id} not found`);
    return found;
  }

  async deleteEstimate(id: number): Promise<void> {
    const result = await this.estimateRepository.delete(id);
    if (result.affected === 0)
      throw new NotFoundException(`Estimate with ID ${id} not found`);
  }

  async updateEstimate(
    id: number,
    estimateDto: EstimateDTO,
  ): Promise<Estimate> {
    const estimate = await this.getEstimate(id);
    for (const key in estimateDto) estimate[key] = estimateDto[key];
    await this.estimateRepository.save(estimate);
    return estimate;
  }

  // Expense
  async createExpense(expenseDto: ExpenseDTO): Promise<Expense> {
    const newExpense = this.expenseRepository.create(expenseDto);
    await this.expenseRepository.save(newExpense);
    return newExpense;
  }

  async getAllExpensesByOrganizationId(
    organizationId: number,
  ): Promise<Expense[]> {
    return this.expenseRepository.find({
      where: {
        organizationId: organizationId,
      },
    });
  }

  async getExpense(id: number): Promise<Expense> {
    const found = await this.expenseRepository.findOne({
      where: {
        id,
      },
    });
    if (!found) throw new NotFoundException(`Expense with ID ${id} not found`);
    return found;
  }

  async deleteExpense(id: number): Promise<void> {
    const result = await this.expenseRepository.delete(id);
    if (result.affected === 0)
      throw new NotFoundException(`Expense with ID ${id} not found`);
  }

  async updateExpense(id: number, expenseDto: ExpenseDTO): Promise<Expense> {
    const expense = await this.getExpense(id);
    for (const key in expenseDto) expense[key] = expenseDto[key];
    await this.expenseRepository.save(expense);
    return expense;
  }

  //Income
  async createIncome(incomeDto: IncomeDTO): Promise<Income> {
    const newIncome = this.incomeRepository.create(incomeDto);
    await this.incomeRepository.save(newIncome);
    return newIncome;
  }

  async getAllIncomesByOrganizationId(
    organizationId: number,
  ): Promise<Income[]> {
    return this.incomeRepository.find({
      where: {
        organizationId: organizationId,
      },
    });
  }

  async getIncome(id: number): Promise<Income> {
    const found = await this.incomeRepository.findOne({
      where: { id },
    });
    if (!found) throw new NotFoundException(`Income with ID ${id} not found`);
    return found;
  }

  async deleteIncome(id: number): Promise<void> {
    const result = await this.incomeRepository.delete(id);
    if (result.affected === 0)
      throw new NotFoundException(`Income with ID ${id} not found`);
  }

  async updateIncome(id: number, incomeDto: IncomeDTO): Promise<Income> {
    const income = await this.getIncome(id);
    for (const key in incomeDto) income[key] = incomeDto[key];
    await this.incomeRepository.save(income);
    return income;
  }

  //Recurring expense
  async createRecurringExpense(
    recurringExpenseDto: RecurringExpenseDTO,
  ): Promise<RecurringExpense> {
    const newRecurringExpense =
      this.recurringExpenseRepository.create(recurringExpenseDto);
    await this.recurringExpenseRepository.save(newRecurringExpense);
    return newRecurringExpense;
  }

  async getAllRecurringExpensesByOrganizationId(
    organizationId: number,
  ): Promise<RecurringExpense[]> {
    return this.recurringExpenseRepository.find({
      where: {
        organizationId: organizationId,
      },
    });
  }

  async getRecurringExpense(id: number): Promise<RecurringExpense> {
    const found = await this.recurringExpenseRepository.findOne({
      where: { id },
    });
    if (!found)
      throw new NotFoundException(`Recurring Expense with ID ${id} not found`);
    return found;
  }

  async deleteRecurringExpense(id: number): Promise<void> {
    const result = await this.recurringExpenseRepository.delete(id);
    if (result.affected === 0)
      throw new NotFoundException(`Recurring Expense with ID ${id} not found`);
  }

  async updateRecurringExpense(
    id: number,
    recurringExpenseDto: RecurringExpenseDTO,
  ): Promise<RecurringExpense> {
    const recurringExpense = await this.getRecurringExpense(id);
    for (const key in recurringExpenseDto)
      recurringExpense[key] = recurringExpenseDto[key];
    await this.recurringExpenseRepository.save(recurringExpense);
    return recurringExpense;
  }

  // CRUD for Invoice
  async createInvoice(invoiceDto: InvoiceDTO): Promise<Invoice> {
    const newInvoice = this.invoiceRepository.create(invoiceDto);
    await this.invoiceRepository.save(newInvoice);
    return newInvoice;
  }

  async getInvoice(id: number): Promise<Invoice> {
    console.log(id);
    const invoice = await this.invoiceRepository.findOne({
      where: { id },
    });
    if (!invoice) {
      throw new NotFoundException(`Invoice with ID ${id} not found`);
    }
    return invoice;
  }

  async getAllInvoicesByOrganizationId(
    organizationId: number,
  ): Promise<Invoice[]> {
    return await this.invoiceRepository.find({
      where: {
        organizationId,
      },
    });
  }

  async updateInvoice(id: number, invoiceDto: InvoiceDTO): Promise<Invoice> {
    const invoice = await this.getInvoice(id);
    for (const key in invoiceDto) {
      invoice[key] = invoiceDto[key];
    }
    await this.invoiceRepository.save(invoice);
    return invoice;
  }

  async deleteInvoice(id: number): Promise<void> {
    const result = await this.invoiceRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Invoice with ID ${id} not found`);
    }
  }

  // CRUD for Payment
  async createPayment(paymentDto: PaymentDTO): Promise<Payment> {
    const invoice = await this.getInvoice(paymentDto.invoiceId);
    const newPayment = this.paymentRepository.create({
      ...paymentDto,
      invoice,
    });
    await this.paymentRepository.save(newPayment);
    return newPayment;
  }

  async getPayment(id: number): Promise<Payment> {
    const payment = await this.paymentRepository.findOne({
      where: {
        id,
      },
    });
    if (!payment) {
      throw new NotFoundException(`Payment with ID ${id} not found`);
    }
    return payment;
  }

  async getAllPaymentsByOrganizationId(
    organizationId: number,
  ): Promise<Payment[]> {
    return await this.paymentRepository.find({
      where: {
        organizationId,
      },
      relations: ['invoice'],
    });
  }

  async updatePayment(id: number, paymentDto: PaymentDTO): Promise<Payment> {
    const payment = await this.getPayment(id);
    for (const key in paymentDto) {
      payment[key] = paymentDto[key];
    }
    await this.paymentRepository.save(payment);
    return payment;
  }

  async deletePayment(id: number): Promise<void> {
    const result = await this.paymentRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Payment with ID ${id} not found`);
    }
  }
}
