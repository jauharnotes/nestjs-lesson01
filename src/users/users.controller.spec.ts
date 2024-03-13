import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should can say hello', async () => {
    const response = await controller.getHello('johar', 'uddin');
    expect(response).toBe('Hello johar uddin');
  });

  it('should be get ID', () => {
    const response = controller.getbyId('12345678');
    expect(response).toBe('GET 12345678');
  });
});
