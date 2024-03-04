import { Test, TestingModule } from '@nestjs/testing';
import { BlogService } from '../services/blog.service';
import { BlogController } from './blog.controller';

describe('BlogsController', () => {
  let controller: BlogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogController],
      providers: [BlogService],
    }).compile();

    controller = module.get<BlogController>(BlogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
