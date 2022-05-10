import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState ('austine')
  const [person, setPerson] = useState({name: 'austine', age: 30,})

  const setHandler = ()=> {
    setName('imah ugochukwu ')
    setPerson({name: ugochukwu, age: 40})
  }
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text>my name is {name}</Text>
        <Text>His Name is {person.name} and his age is {person.age}</Text>
      </View>
      <View style = {styles.buttonContainer}>
        <Button title='Set Name' onPress={setHandler}/>
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
  boldText:{
    fontWeight: 'bold',
  },
  body:{
    padding:20,
  }, 
  buttonContainer:{
    marginTop:20
  }
});
