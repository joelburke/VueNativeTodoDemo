import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextInput from './src/TodoInput';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Open up App.js to start working on your app! 2</Text>
      <View style={styles.main}>
      {/* <Text style={styles.welcome}>test</Text> */}
        <TextInput />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    color: 'white',
    fontSize: 20,
    margin: 20
  },
  main: {
    flex: 1,
    maxWidth: 400,
    alignItems: 'center'
  }
});


