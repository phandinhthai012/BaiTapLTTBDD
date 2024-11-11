import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { todoInputState, todoListState } from './ToDoState';
import { addTodo } from './api';

function AddTodo() {
  const [input, setInput] = useRecoilState(todoInputState);
  const setTodos = useSetRecoilState(todoListState);

  const handleAddTodo = async () => {
    if (input.trim()) {
      const newTodo = { text: input };
      const response = await addTodo(newTodo);
      setTodos((prevTodos) => [...prevTodos, response.data]);
      setInput('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Enter new todo"
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
  },
});

export default AddTodo;
