import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpStatus,
  Inject,
} from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsDTO } from './patients.dto';

@Controller('patient')
export class PatientsController {
  @Inject(PatientsService)
  private readonly patientsService: PatientsService;

  @Get()
  async showAllPatients() {
    return {
      statusCode: HttpStatus.OK,
      data: await this.patientsService.showAll(),
    };
  }

  @Post()
  async createPatients(@Body() data: PatientsDTO) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Patient added successfully',
      data: await this.patientsService.create(data),
    };
  }

  @Get(':id')
  async readPatient(@Param('id') id: number) {
    return {
      statusCode: HttpStatus.OK,
      data: await this.patientsService.read(id),
    };
  }

  @Put(':id')
  async uppdatePatient(
    @Param('id') id: number,
    @Body() data: Partial<PatientsDTO>,
  ) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Patient update successfully',
      data: await this.patientsService.update(id, data),
    };
  }

  @Delete(':id')
  async deletePatient(@Param('id') id: number) {
    await this.patientsService.destroy(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Patient deleted successfully',
    };
  }
}
