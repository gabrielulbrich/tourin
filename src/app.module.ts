import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { ExperiencesModule } from './experiences/experiences.module';
import { typeOrmConfig } from './shared/config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    BlogModule,
    ExperiencesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
