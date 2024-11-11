import React from 'react';
import { RecoilRoot } from 'recoil';
import TodoApp from './ToDoApp';

export default function App() {
  return (
    <RecoilRoot>
      <TodoApp />
    </RecoilRoot>
  );
}
