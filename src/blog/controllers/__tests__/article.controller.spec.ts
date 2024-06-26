import { Test, TestingModule } from '@nestjs/testing';
import { ArticleService } from '../../services/article.service';
import { ArticleController } from '../article.controller';

describe(ArticleController.name, () => {
  let controller: ArticleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleController],
      providers: [ArticleService],
    }).compile();

    controller = module.get<ArticleController>(ArticleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
