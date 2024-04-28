import { ApiProperty } from '@nestjs/swagger';

export class CancellationDto {
  @ApiProperty()
  isCancelable: boolean;

  @ApiProperty()
  cancellationOffset: number;

  @ApiProperty()
  cancellationOffsetUnit: string;

  @ApiProperty()
  feeUnit: string;

  @ApiProperty()
  fee: number;
}
