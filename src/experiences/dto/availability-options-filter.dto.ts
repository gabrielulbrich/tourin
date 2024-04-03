import { ApiProperty } from '@nestjs/swagger';

export class AvailabilityOptionsFilterDto {
  @ApiProperty()
  date: Date;

  @ApiProperty()
  category: {
    code: string;
    quantity: number;
  };
}
