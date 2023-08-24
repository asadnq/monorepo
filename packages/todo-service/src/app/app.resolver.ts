import { Args, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './models/todo';
import { TodoService } from './app.service';
import { TodoDBService } from '@monorepo/todo-db';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private todoService: TodoDBService) {}

  @Query(() => [Todo])
  async todos() {
    return this.todoService.todo.findMany();
  }
  @Query(() => Todo)
  async todo(@Args('id', { type: () => String }) id: string) {
    return this.todoService.todo.findUnique({ where: { id } });
  }
}
