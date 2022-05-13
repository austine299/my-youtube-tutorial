
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  const [name, setName] = useState ('austine')
  const [age, setAge] = useState ('40')
  const [people, setPeople] = useState([
    {key: 1, name: 'ugochukwu', age: 26},
    {key: 2, name: 'austine', age: 30},
    {key: 3, name: 'emeka', age: 40},
    {key: 4, name: 'izuchukwu', age: 45},
  ])

  

  return (
    <View style={styles.container}>
      
      <text>Enter your name here</text>
      <TextInput 
        multiline
        keyboardType='default'
        style ={styles.input} 
        placeholder = "e.g john mike"
        onChangeText={(val) => setName(val)}
      />

      <text>Enter your age here</text>
      <TextInput 
        keyboardType='numeric'
        style ={styles.input} 
        placeholder = "e.g 99"
        onChangeText={(val) => setAge(val)}

      />

      <Text>name: {name}, age: {age}</Text>

      
      <View style={styles.listContainer}>
        {people.map((item) => {
          return(
            <View key={item.key}>
              <Text style={styles.item}>{item.name} { item.age}</Text>
            </View>
          )
        })}
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
  },
  input:{
    borderWidth: 1,
    borderColor:'#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding:40,
    paddingHorizontal: 20,
  },
  item:{
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  }
});
