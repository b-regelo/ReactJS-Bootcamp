import { atom } from 'jotai';

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export const todoListAtom = atom<Todo[]>([]);