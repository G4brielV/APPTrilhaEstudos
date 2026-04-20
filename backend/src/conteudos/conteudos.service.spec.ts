import { Test, TestingModule } from '@nestjs/testing';
import { ConteudosService } from './conteudos.service';

describe('ConteudosService', () => {
  let service: ConteudosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConteudosService],
    }).compile();

    service = module.get<ConteudosService>(ConteudosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
