import React, {Component} from 'react';
import {View, TextInput, Image, Text} from 'react-native';


const SampleComponent = () => {
    return (
      <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}} />
      <Text>runydek</Text>
      <Anu />
      <Text>anu</Text>
      <Text>bacot</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile /> 
    </View>
    );
  };
  
  const Anu = () => {
    return <Text>Sebuah Pengalaman yang bisa kita lakukan</Text>;
  };
  
  const Photo = () => {
    return <Image   source={{uri: 'https://placeimg.com/100/100/tech'}} style={{width: 100, height:100}}/>
  }
  
  class BoxGreen extends Component {
    render() {
      return <Text>Ini Component dari Class</Text>
    }
  }
  
  class Profile extends Component {
    render () {
      return (
        <View>
          <Image source={{uri: 'https://placeimg.com/100/100/people'}} style={{width: 100, height:100, borderRadius:50}} />
          <Text>Ini adalah Orang</Text>
        </View>
      
      )
    }
  }

export default SampleComponent; 