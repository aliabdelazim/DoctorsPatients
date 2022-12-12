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
import { DoctorsService } from './doctors.service';
import { DoctorsDTO } from './doctors.dto';

@Controller('doctor')
export class DoctorsController {
  @Inject(DoctorsService)
  private readonly doctorsService: DoctorsService;

  @Get()
  async showAllDoctors() {
    return {
      statusCode: HttpStatus.OK,
      data: await this.doctorsService.showAll(),
    };
  }

  @Post()
  async createDoctors(@Body() data: DoctorsDTO) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Doctor added successfully',
      data: await this.doctorsService.create(data),
    };
  }

  @Get(':id')
  async readDoctor(@Param('id') id: number) {
    return {
      statusCode: HttpStatus.OK,
      data: await this.doctorsService.read(id),
    };
  }

  @Put(':id')
  async uppdateDoctor(
    @Param('id') id: number,
    @Body() data: Partial<DoctorsDTO>,
  ) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Doctor update successfully',
      data: await this.doctorsService.update(id, data),
    };
  }

  @Delete(':id')
  async deleteDoctor(@Param('id') id: number) {
    await this.doctorsService.destroy(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Doctor deleted successfully',
    };
  }
}
