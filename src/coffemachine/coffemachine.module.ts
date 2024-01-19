import { Module } from '@nestjs/common';
import { CoffemachineController } from './coffemachine.controller';
import { CoffemachineService } from './coffemachine.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { CoffeMachine } from './coffemachine.model';

@Module({
  controllers: [CoffemachineController],
  providers: [CoffemachineService],
  imports: [
    SequelizeModule.forFeature([CoffeMachine])
  ]
})
export class CoffemachineModule {}
