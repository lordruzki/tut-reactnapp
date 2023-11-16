import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('shaun');
  const [person, setPerson] = useState({ name: 'mario', age: 40 })

  const clickHandlerOne = () => {
    setName('shaun');
  }
  const clickHandlerTwo = () => {
    setName('chun-li');
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name}.</Text>
      <View style={styles.buttonContainer}>
        <Button title='update chun-li' onPress={clickHandlerOne}/>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='update shaun' onPress={clickHandlerTwo}/>
      </View>
    </View>
  );
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 50,
  },
});

