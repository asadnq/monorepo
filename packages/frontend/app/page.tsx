// import { Button } from ''
import { Button } from '@monorepo/ui';
import { TodoItem } from '../types';
import './style.module.css';
import { useState } from 'react';

import Input from './input';

export default async function Index() {
  return (
    <main className="bg-slate-200 min-h-100 h-full flex justify-center">
      <div className="flex flex-col w-1/4">
        <section>
          <Input />
          <div className="flex flex-col p-4 gap-y-4">
            {todoItems.map((item) => {
              return (
                <div key={item.id} className="rounded-md shadow-md bg-white">
                  <div className="p-4">
                    <span className="text-lg">{item.title}</span>
                    <div className="h-4" />
                    <div className="text-xs text-gray-700">
                      {item.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        {/* <Button>Hello</Button> */}
      </div>
    </main>
  );
}

const todoItems: TodoItem[] = [
  {
    id: '1',
    title: 'Buy groceries',
    completed: false,
    description: 'Get milk, eggs, and bread from the store.',
  },
  {
    id: '2',
    title: 'Finish coding assignment',
    completed: false,
    description: 'Complete the programming task by the end of the day.',
  },
  {
    id: '3',
    title: 'Exercise',
    completed: true,
    description: 'Go for a run in the morning.',
  },
  {
    id: '4',
    title: 'Read a book',
    completed: false,
    description: 'Start reading the new novel you bought.',
  },
  {
    id: '5',
    title: 'Call mom',
    completed: true,
    description: 'Check in with mom and catch up on family news.',
  },
  {
    id: '6',
    title: 'Plan weekend trip',
    completed: false,
    description: 'Research and plan activities for the upcoming weekend trip.',
  },
  {
    id: '7',
    title: 'Pay bills',
    completed: false,
    description: 'Settle utility and credit card bills before the due dates.',
  },
  {
    id: '8',
    title: 'Attend team meeting',
    completed: true,
    description: 'Participate in the weekly team meeting at 10 AM.',
  },
  {
    id: '9',
    title: 'Clean the house',
    completed: false,
    description: 'Tidy up the living room, kitchen, and bedroom.',
  },
  {
    id: '10',
    title: 'Write blog post',
    completed: false,
    description: 'Start drafting a blog post about recent industry trends.',
  },
];
