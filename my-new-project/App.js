import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

const [name, setName] = useState ('austine')

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello, World!</Text>
      </View>
      <View style={styles.body}>
        <Text>my name is {name}</Text>
      </View>
      <View style = {styles.buttonContainer}>
        <Button title='Set Name'/>
      </View>

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
  header:{
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText:{
    fontWeight: 'bold',
  },
  body:{
    backgroundColor:'yellow',
    padding:20,
  }, 
  buttonContainer:{
    marginTop:20
  }
});
