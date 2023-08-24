import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  findOneById(id: string) {
    throw new Error('Method not implemented.');
  }

  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}
