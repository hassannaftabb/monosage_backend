import { Controller, Get, Post, Body, Put, Patch, Query, Param, Delete } from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { ProposalDTO } from './dto/create-proposal.dto';
import { EstimateDTO } from './dto/create-estimate.dto';
import { PaymentDTO } from './dto/create-payment.dto';
import { InvoiceDTO } from './dto/create-invoice.dto';
import { PipelineDTO } from './dto/create-pipeline.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('sales')
@ApiTags('Sales CRUD APIs')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.salesService.create(createSaleDto);
  }

  @Get()
  findAll() {
    return this.salesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSaleDto: UpdateSaleDto) {
    return this.salesService.update(+id, updateSaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salesService.remove(+id);
  }

  // Proposals
  @Post()
  createProposal(@Body() proposalDTO: ProposalDTO) {
    return this.salesService.createProposal(proposalDTO);
  }

  @Get()
  findAllProposal() {
    return this.salesService.findAllProposal();
  }

  @Get('organization/proposal/all')
  getAllProposals(@Query('organizationId') organizationId: number) {
      return this.salesService.getAllProposalsByOrganizationId(
          organizationId,
      );
  }

  @Get(':id')
  findOneProposal(@Param('id') id: string) {
    return this.salesService.findOneProposal(+id);
  }

  @Patch(':id')
  updateProposal(@Param('id') id: string, @Body() proposalDTO: ProposalDTO) {
    return this.salesService.updateProposal(+id, proposalDTO);
  }

  @Delete(':id')
  removeProposal(@Param('id') id: string) {
    return this.salesService.removeProposal(+id);
  }

  //Estimates
  @Post('estimate')
  createEstimate(@Body() estimateDto: EstimateDTO) {
    return this.salesService.createEstimate(estimateDto);
  }

  @Get('organization/estimate/all')
  getAllEstimates(@Query('organizationId') organizationId: number) {
    console.log(organizationId);
    return this.salesService.getAllEstimatesByOrganizationId(
      organizationId,
    );
  }

  @Get('estimate/:id')
  getEstimate(@Param('id') id: number) {
    return this.salesService.getEstimate(id);
  }

  @Delete('estimate/:id')
  deleteEstimate(@Param('id') id: number) {
    return this.salesService.deleteEstimate(id);
  }

  @Put('estimate/:id')
  updateEstimate(@Param('id') id: number, @Body() estimateDto: EstimateDTO) {
    return this.salesService.updateEstimate(id, estimateDto);
  }

  // Invoice
  @Post('invoice')
  createInvoice(@Body() invoiceDto: InvoiceDTO) {
    return this.salesService.createInvoice(invoiceDto);
  }
  @Get('organization/invoice/all')
  getAllInvoices(@Query('organizationId') organizationId: number) {
    return this.salesService.getAllInvoicesByOrganizationId(
      organizationId,
    );
  }

  @Get('invoice/:id')
  getInvoice(@Param('id') id: number) {
    return this.salesService.getInvoice(id);
  }

  @Put('invoice/:id')
  updateInvoice(@Param('id') id: number, @Body() invoiceDto: InvoiceDTO) {
    return this.salesService.updateInvoice(id, invoiceDto);
  }

  @Delete('invoice/:id')
  deleteInvoice(@Param('id') id: number) {
    return this.salesService.deleteInvoice(id);
  }

  // Payment
  @Post('payment')
  createPayment(@Body() paymentDto: PaymentDTO) {
    return this.salesService.createPayment(paymentDto);
  }

  @Get('organization/payment/all')
  getAllPayments(@Query('organizationId') organizationId: number) {
    return this.salesService.getAllPaymentsByOrganizationId(
      organizationId,
    );
  }

  @Get('payment/:id')
  getPayment(@Param('id') id: number) {
    return this.salesService.getPayment(id);
  }

  @Put('payment/:id')
  updatePayment(@Param('id') id: number, @Body() paymentDto: PaymentDTO) {
    return this.salesService.updatePayment(id, paymentDto);
  }

  @Delete('payment/:id')
  deletePayment(@Param('id') id: number) {
    return this.salesService.deletePayment(id);
  }

  // Pipeline
  @Post('payment')
  createPipeline(@Body() paymentDto: PipelineDTO) {
    return this.salesService.createPipeline(paymentDto);
  }

  @Get('organization/payment/all')
  getAllPipelines(@Query('organizationId') organizationId: number) {
    return this.salesService.getAllPipelinesByOrganizationId(
      organizationId,
    );
  }

  @Get('payment/:id')
  getPipeline(@Param('id') id: number) {
    return this.salesService.getPipeline(id);
  }

  @Put('payment/:id')
  updatePipeline(@Param('id') id: number, @Body() paymentDto: PipelineDTO) {
    return this.salesService.updatePipeline(id, paymentDto);
  }

  @Delete('payment/:id')
  deletePipeline(@Param('id') id: number) {
    return this.salesService.deletePipeline(id);
  }
}
