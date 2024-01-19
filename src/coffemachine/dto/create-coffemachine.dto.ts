import { ApiProperty } from "@nestjs/swagger";

export class CreateCoffemachineDto {
    @ApiProperty({example: 'Кофе-машинка Boro', description: 'Название кофе-машины'})
    readonly title: string;
    
    @ApiProperty({example: 'http://localhost:5000/hs4Bhs5h6.jpg', description: 'Ссылка на картинку'})
    readonly image: string;

    @ApiProperty({example: 'small', description: 'Размер кофе-машины'})
    readonly size: string;

    @ApiProperty({example: 'Количество напитков', description: 'Название кофе-машины'})
    readonly drinksCount: number;
}
