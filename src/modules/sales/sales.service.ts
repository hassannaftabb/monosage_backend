import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { ProposalDTO } from './dto/create-proposal.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Proposal } from './entities/proposal.entity';
import { Repository } from 'typeorm';
import { EstimateDTO } from './dto/create-estimate.dto';
import { Estimate } from './entities/estimate.entity';
import { Payment } from './entities/payment.entity';
import { PaymentDTO } from './dto/create-payment.dto';
import { Invoice } from './entities/invoice.entity';
import { InvoiceDTO } from './dto/create-invoice.dto';
import { Pipeline } from './entities/pipeline.entity';
import { PipelineDTO } from './dto/create-pipeline.dto';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(Proposal)
    private readonly proposal: Repository<Proposal>,

    @InjectRepository(Estimate)
    private readonly estimate: Repository<Estimate>,

    @InjectRepository(Invoice)
    private readonly invoice: Repository<Invoice>,

    @InjectRepository(Payment)
    private readonly payment: Repository<Payment>,

    @InjectRepository(Pipeline)
    private readonly pipeline: Repository<Pipeline>,
  ) {}

  create(createSaleDto: CreateSaleDto) {
    return 'This action adds a new sale';
  }

  findAll() {
    return `This action returns all sales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sale`;
  }

  update(id: number, updateSaleDto: UpdateSaleDto) {
    return `This action updates a #${id} sale`;
  }

  remove(id: number) {
    return `This action removes a #${id} sale`;
  }

  // Proposals
  async createProposal(proposalDTO: ProposalDTO): Promise<Proposal> {
    const proposal = this.proposal.create(proposalDTO);
    await this.proposal.save(proposal);
    return proposal;
  }

  async findAllProposal() {
    return `This action returns all sales`;
  }

  async getAllProposalsByOrganizationId(organizationId: number): Promise<Proposal[]> {
    return this.proposal.find({
        where: {
            organizationId,
            isDeleted: false
        }
    });
  }

  async findOneProposal(id: number): Promise<Proposal> {
    const proposal = this.proposal.findOneBy({ id, isDeleted: false });
    if (!proposal) throw new NotFoundException(`Proposal with ID ${id} not found`);
    return proposal;
  }

  async updateProposal(id: number, proposalDTO: ProposalDTO) {
    const proposal = await this.findOneProposal(id);
    for (const key in proposalDTO) proposal[key] = proposalDTO[key];
    await this.proposal.save(proposal);
    return proposal;
  }

  async removeProposal(id: number) {
    const result = await this.proposal.delete(id);
    if (result.affected === 0)
      throw new NotFoundException(`Proposal with ID ${id} not found`);
  }

  // estimates
  async createEstimate(estimateDto: EstimateDTO): Promise<Estimate> {
    const newEstimate = this.estimate.create(estimateDto);
    await this.estimate.save(newEstimate);
    return newEstimate;
  }

  async getAllEstimatesByOrganizationId(
    organizationId: number,
  ): Promise<Estimate[]> {
    return this.estimate.find({
      where: {
        organizationId: organizationId,
      },
    });
  }

  async getEstimate(id: number): Promise<Estimate> {
    const found = await this.estimate.findOneBy({ id });
    if (!found) throw new NotFoundException(`Estimate with ID ${id} not found`);
    return found;
  }

  async deleteEstimate(id: number): Promise<void> {
    const result = await this.estimate.delete(id);
    if (result.affected === 0)
      throw new NotFoundException(`Estimate with ID ${id} not found`);
  }

  async updateEstimate(
    id: number,
    estimateDto: EstimateDTO,
  ): Promise<Estimate> {
    const estimate = await this.getEstimate(id);
    for (const key in estimateDto) estimate[key] = estimateDto[key];
    await this.estimate.save(estimate);
    return estimate;
  }

  // CRUD for Invoice
  async createInvoice(invoiceDto: InvoiceDTO): Promise<Invoice> {
    const newInvoice = this.invoice.create(invoiceDto);
    await this.invoice.save(newInvoice);
    return newInvoice;
  }

  async getInvoice(id: number): Promise<Invoice> {
    console.log(id);
    const invoice = await this.invoice.findOne({
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
    return await this.invoice.find({
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
    await this.invoice.save(invoice);
    return invoice;
  }

  async deleteInvoice(id: number): Promise<void> {
    const result = await this.invoice.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Invoice with ID ${id} not found`);
    }
  }

  // CRUD for Payment
  async createPayment(paymentDto: PaymentDTO): Promise<Payment> {
    const invoice = await this.getInvoice(paymentDto.invoiceId);
    const newPayment = this.payment.create({
      ...paymentDto,
      invoice,
    });
    await this.payment.save(newPayment);
    return newPayment;
  }

  async getPayment(id: number): Promise<Payment> {
    const payment = await this.payment.findOne({
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
    return await this.payment.find({
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
    await this.payment.save(payment);
    return payment;
  }

  async deletePayment(id: number): Promise<void> {
    const result = await this.payment.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Payment with ID ${id} not found`);
    }
  }

  // CRUD for Pipeline
  async createPipeline(piplelineDTO: PipelineDTO): Promise<Pipeline> {
    const newPipeline = this.pipeline.create({
      ...piplelineDTO,
    });
    await this.pipeline.save(newPipeline);
    return newPipeline;
  }

  async getPipeline(id: number): Promise<Pipeline> {
    const payment = await this.pipeline.findOne({
      where: {
        id,
      },
    });
    if (!payment) {
      throw new NotFoundException(`Pipeline with ID ${id} not found`);
    }
    return payment;
  }

  async getAllPipelinesByOrganizationId(
    organizationId: number,
  ): Promise<Pipeline[]> {
    return await this.pipeline.find({
      where: {
        organizationId,
      },
    });
  }

  async updatePipeline(id: number, piplelineDTO: PipelineDTO): Promise<Pipeline> {
    const payment = await this.getPipeline(id);
    for (const key in piplelineDTO) {
      payment[key] = piplelineDTO[key];
    }
    await this.pipeline.save(payment);
    return payment;
  }

  async deletePipeline(id: number): Promise<void> {
    const result = await this.pipeline.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Pipeline with ID ${id} not found`);
    }
  }
}
