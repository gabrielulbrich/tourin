import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import typeOrmConfig from './shared/config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), BlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
