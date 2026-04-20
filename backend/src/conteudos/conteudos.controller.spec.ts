import { Test, TestingModule } from '@nestjs/testing';
import { ConteudosController } from './conteudos.controller';
import { ConteudosService } from './conteudos.service';

describe('ConteudosController', () => {
  let controller: ConteudosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConteudosController],
      providers: [ConteudosService],
    }).compile();

    controller = module.get<ConteudosController>(ConteudosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
