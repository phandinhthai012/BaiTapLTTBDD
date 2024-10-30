// TodoApp.js
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity,ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, addTodo, toggleTodo, removeTodo } from './todosSlice';

export default function TodoApp() {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos.items);
  const status = useSelector((state) => state.todos.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTodos());
    }
  }, [status, dispatch]);

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Add new todo"
        style={{ padding: 10, borderWidth: 1, marginBottom: 10 }}
      />
      <Button title="Add Todo" onPress={handleAddTodo} />

      {status === 'loading' ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <TouchableOpacity onPress={() => dispatch(toggleTodo(item.id))}>
                <Text style={{ textDecorationLine: item.completed ? 'line-through' : 'none' }}>
                  {item.text}
                </Text>
              </TouchableOpacity>
              <Button title="Delete" onPress={() => dispatch(removeTodo(item.id))} />
            </View>
          )}
        />
      )}
    </ScrollView>
  );
}
