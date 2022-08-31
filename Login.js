import React, {useState} from 'react';
import { StyleSheet, View, Image, Text, TextInput, Switch, Button, Alert } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function Login() {
  const COLOR_PURPLE = '#190933';

  const [isSwitchOff, setSwitchState] = useState(false);
  const toggleSwitch = (value) => {
    setSwitchState(value);
  };
  var isPasswordHidden = !isSwitchOff;

  function doEntrar() {
    Alert.alert('BotÃ£o LOGIN pressionado!')
  }

  return (
    <View style={{backgroundColor:'white'}}>
      <View nativeID='vwLogo' style={{height:280, top:40, alignItems:'center'}}>
        <Image 
          style={{width:128, height:128}}
          source={require('../MedSys/assets/MedSys_Logo_256.png')}
        />
        <Text style={{color:COLOR_PURPLE, fontSize:36, fontWeight:'bold'}}>MedSys</Text>
      </View>
      <View nativeID='vwInfos'>
        <TextInput
          style={{width:'93%', height:40, margin:10, padding:5, borderWidth:1, borderColor:COLOR_PURPLE}}
          placeholder='E-MAIL'
        />
        <View nativeID='vwPassword' style={{flexDirection:'row'}}>
          <TextInput
            secureTextEntry={isPasswordHidden ? true : false}
            style={{width:'80%', height:40, margin:10, padding:5, borderWidth:1, borderColor:COLOR_PURPLE}}
            placeholder='SENHA'
          />
          <Switch
            onValueChange={toggleSwitch}
            value={isSwitchOff}
        />
        </View>
        <View nativeID='vwActions' style={{margin:10}}>
          <Button 
            title='Entrar'
            onPress={doEntrar}
            color='#29a329'
          />
          <Button 
            title='Cadastro com E-mail'
            onPress={() => Alert.alert('BotÃ£o CADASTRO COM E-MAIL pressionado!')}
            color='#ff8533'
          />
        </View>
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
});
