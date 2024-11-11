import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import TodoList from './ToDoList';
import AddTodo from './AddToDo';

function TodoApp() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Todo App</Text>
      <AddTodo />
      <TodoList />
    </SafeAreaView>
  );
}

export default TodoApp;
