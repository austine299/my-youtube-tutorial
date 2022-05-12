import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  const [name, setName] = useState ('austine')
  const [person, setPerson] = useState({name: 'austine', age: 30,})

  const setHandler = ()=> {
    setName('imah ugochukwu ')
    setPerson({name: 'ugochukwu', age: 40})
  }
  return (
    <View style={styles.container}>
      
      <text>Enter your name here</text>
      <TextInput 
        multiline
        keyboardType='default'
        style ={styles.input} 
        placeholder = "e.g john mike"
        onChangeText={(val) => setName(val)}/>

      <text>Enter your name here</text>
      <TextInput 
        keyboardType='numeric'
        style ={styles.input} 
        placeholder = "e.g john mike"
        onChangeText={(val) => setName(val)}/>

      <Text>name: {name}, age: {age}</Text>
      
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
  },
  input:{
    borderWidth: 1,
    borderColor:'#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
