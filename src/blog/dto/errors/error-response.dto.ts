import { ApiProperty } from '@nestjs/swagger';

export class ErrorReponseDto {
  @ApiProperty()
  status: number;

  @ApiProperty()
  code: string;

  @ApiProperty()
  message: string;
}
