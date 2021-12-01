import React from "react";
import {Text, View, Image, StyleSheet} from 'react-native';
import macbook from './macbook-air-m1-hero02-100866890-large-e1610954382547.webp';

const StylingReactNativeComponent =() => {
    return (
      <View>
        <Text style={styles.text}>Styling Component</Text>
        <View style={{
          width: 100, 
          height: 100, 
          backgroundColor:'#0abde3',
          borderWidth: 2,
          borderColor: '#5f27cd',
          marginTop: 20,
          marginLeft: 20,
          }} />
        
        <View style={{padding:12, backgroundColor: '#F2F2F2', width: 212, margin: 20}}>
          <Image source={macbook} style={{width: 188, height:107, borderRadius: 8}} />
          <Text style={{fontWeight: 'bold', fontSize: 14, marginTop: 16}}>New Macbook Air M1 2020</Text>
          <Text style={{fontWeight: 'bold', fontSize: 12, marginTop: 14, color: '#F2994A'}}>Rp. 16.999.999</Text>
          <Text style={{fontWeight: '300', fontSize: 12, marginTop: 12}}>Yogyakarta</Text>
          <View style={{backgroundColor: '#6FCF97', paddingVertical: 6, borderRadius: 25, marginTop: 20}}>
            <Text style={{fontSize: 14, fontWeight: '600', color: 'white', textAlign: 'center'}}>BELI</Text>
          </View>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#10ac84',
      marginLeft: 20,
      marginTop: 40,
    },
  });

  export default StylingReactNativeComponent;