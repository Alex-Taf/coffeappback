import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateCoffemachineDto } from "./dto/create-coffemachine.dto";
import { CoffemachineService } from "./coffemachine.service";
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CoffeMachine } from './coffemachine.model';

@Controller('coffemachines')
export class CoffemachineController {
    constructor(private coffemachineService: CoffemachineService) {}

    @ApiOperation({summary: 'Создание кофе-машинки'})
    @ApiResponse({status: 200, type: CoffeMachine})
    @Post()
    createCoffemachine(@Body() dto: CreateCoffemachineDto) {
        console.log(dto);
        return this.coffemachineService.create(dto);
    }

    @ApiOperation({summary: 'Получить список кофе-машинок'})
    @ApiResponse({status: 200, type: [CoffeMachine]})
    @Get()
    getCoffemachines() {
        return this.coffemachineService.getAll();
    }

    @ApiOperation({summary: 'Получить кофе-машинку по id'})
    @ApiResponse({status: 200, type: [CoffeMachine]})
    @Get(':id')
    getCoffemachineById(@Param('id') id: number) {
        return this.coffemachineService.getOne(id);
    }

    @ApiOperation({summary: 'Обновить кофе-машинку'})
    @ApiResponse({status: 200, type: CoffeMachine})
    @Put(':id')
    updateCoffemachine(@Param('id') id: number, @Body() dto: CreateCoffemachineDto) {
        return this.coffemachineService.update(id, dto);
    }

    @ApiOperation({summary: 'Удаление кофе-машинки'})
    @ApiResponse({status: 200, type: CoffeMachine})
    @Delete(':id')
    deleteCoffemachine(@Param('id') id: number) {
        return this.coffemachineService.delete(id);
    }
}
