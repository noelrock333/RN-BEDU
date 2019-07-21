import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Counter() {
  // let [counter, setCounter] = useState(0);
  // let [search, setSearch] = useState('');
  let [state, setTheState] = useState({
    counter: 0,
    search: ''
  });

  function setState(newState) {
    setTheState({ ...state, ...newState})
  }

  useEffect(()=> {
    console.log('Me he creado')
    return () => {
      console.log('Me desmonté')
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hola mundo</Text>
      <Text style={styles.textStyle}>{state.counter}</Text>
      <Text style={styles.textStyle}>{state.search}</Text>
      <TextInput onChangeText={(text)=> setState({ search: text })} />
      <Button title="Add" onPress={() => setState({ counter: state.counter + 1})} />
      <Button title="Minus" onPress={() => setState({ counter: state.counter - 1 })} />
      <Button title="Reset" onPress={() => setState({ counter: 0 })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'green',
    fontSize: 30
  }
});
