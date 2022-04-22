import React from 'react';
import {WebView} from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
const GOOGLE='https://www.inphb.ci'
export default function App(){
  return (
    
    <View style={styles.container}>
      <View style={{width:"100%", height:"50%", alignItems:'flex-start'}}>
        <WebView source={{uri:GOOGLE}}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 ,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome:{
    flex: 2,
    fontSize: 50,
    textAlign:'center',
    margin: 10,
    color: 'white',
    backgroundColor:'red',
  },
  login:{
    flex:2,
    fontSize: 30,
    textAlign:'center',
    margin: 10, 
    color: 'white',
  },
  input:{
    width: '90%',
    backgroundColor:'white',
    margin:10,
  },
  boutonContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'90%'
  },
  bouton:{
    backgroundColor:'white',
    width:'45%', 
  },
  boutonTexte:{
    fontSize:18,
    textAlign:'center',

  }
});
