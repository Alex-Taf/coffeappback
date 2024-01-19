import { Injectable } from '@nestjs/common';
import { CreateCoffemachineDto } from "./dto/create-coffemachine.dto";
import { InjectModel } from "@nestjs/sequelize";
import { CoffeMachine } from "./coffemachine.model";

@Injectable()
export class CoffemachineService {
    constructor(@InjectModel(CoffeMachine) private coffemachineRepository: typeof CoffeMachine) {}

    async create(dto: CreateCoffemachineDto) {
        const coffemachine = await this.coffemachineRepository.create({ ...dto })
        return coffemachine;
    }

    async getAll() {
        const coffemachines = await this.coffemachineRepository.findAll();
        return coffemachines;
    }

    async getOne(id: number) {
        const coffemachine = await this.coffemachineRepository.findByPk(id);
        return coffemachine;
    }

    async update(id: number, dto: CreateCoffemachineDto) {
        const coffemachine = await this.coffemachineRepository.update({ ...dto }, { where: { id } });
        return coffemachine;
    }

    async delete(id: number) {
        await this.coffemachineRepository.destroy({ where: { id } });
    }
}
