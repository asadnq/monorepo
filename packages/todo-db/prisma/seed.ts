import { PrismaClient, Todo } from '@prisma/client-todo';

const prisma = new PrismaClient();

const uuids = [
  '665d61fb-cb18-4e2d-b144-2af15402702b',
  'e6a3c5da-e19e-4f34-a0af-287ee41bd477',
  '94980186-6e0a-41b4-bb82-79c74b1650dd',
];

async function main() {
  const todos: Todo[] = [
    {
      id: uuids[0],
      title: 'Finish project',
      description: 'Complete the project before the deadline',
      status: 'todo',
    },
    {
      id: uuids[1],
      title: 'Write documentation',
      description: 'Document the project for future reference',
      status: 'doing',
    },
    {
      id: uuids[2],
      title: 'Test functionality',
      description: 'Test all features and fix any bugs',
      status: 'done',
    },
  ];

  for (const todo of todos) {
    await prisma.todo.upsert({
      where: {
        id: todo.id,
      },
      create: todo,
      update: todo,
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
