import React from "react";
import {Text, View, Image, TextInput} from 'react-native';

const App = () => {
  return  (
  <View>
    <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}} />
    <Text>runydek</Text>
    <Anu />
    <Text>anu</Text>
    <Text>bacot</Text>
    <Photo />
    <TextInput style={{borderWidth: 1}} />
  </View>
  
  )
};

const Anu = () => {
  return <Text>Sebuah Pengalaman yang bisa kita lakukan</Text>;
};

const Photo = () => {
  return <Image   source={{uri: 'https://placeimg.com/100/100/tech'}} style={{width: 100, height:100}}/>
}
export default App;