import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Preload() {
return (
    <View style={{backgroundColor: 'white'}}>
        <Image>
        style={{widht: 256, height: 256}}
        source={require('../MedSys/assets/MedSys_Logo_256.pg')}
        </Image>
        <Text> style={{fontSize: 36, fontWeight: 'bold'}}
        </Text>
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
  });