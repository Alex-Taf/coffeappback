import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface ICoffemachineCreationAttrs {
    title: string;
    image: string;
    size: string;
    drinksCount: number;
}

@Table({ tableName: 'coffemachines' })
export class CoffeMachine extends Model<CoffeMachine, ICoffemachineCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({example: 'Кофе-машинка Boro', description: 'Название кофе-машинки'})
    @Column({ type: DataType.STRING, allowNull: false })
    title: string;

    @ApiProperty({example: 'http://localhost:5000/hs4Bhs5h6.jpg', description: 'Ссылка на картинку'})
    @Column({ type: DataType.STRING, allowNull: false })
    image: string;

    @ApiProperty({example: 'small', description: 'Размер кофе-машины'})
    @Column({ type: DataType.STRING, allowNull: false })
    size: string;

    @ApiProperty({example: 'Количество напитков', description: 'Название кофе-машины'})
    @Column({ type: DataType.INTEGER, allowNull: false })
    drinksCount: number;
}
