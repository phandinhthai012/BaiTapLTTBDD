import React from 'react';
import { View, Text, Button, StyleSheet, FlatList,TouchableOpacity, ScrollView } from 'react-native';
import { useRecoilValue, useRecoilState } from 'recoil';
import { todoListState } from './ToDoState';
import { deleteTodo } from './api';

function TodoList() {
  const [todos, setTodos] = useRecoilState(todoListState);

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <ScrollView>
      {todos.map((todo) => (
        <View key={todo.id} style={styles.todoItem}>
          <Text>{todo.text}</Text>
          <Button title="Delete" onPress={() => handleDelete(todo.id)} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default TodoList;
