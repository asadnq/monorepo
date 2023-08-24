import { Field, ID, ObjectType } from '@nestjs/graphql';
import { $Enums, Todo as ITodo } from '@monorepo/todo-db';

@ObjectType()
export class Todo implements ITodo {
  @Field(() => String)
  id: string;

  @Field()
  title: string;

  @Field({ defaultValue: '' })
  description: string;

  @Field(() => String)
  status: $Enums.TodoStatus;
}
