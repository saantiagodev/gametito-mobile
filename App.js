import React from 'react';
import { Alert, Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MeuComponente from './components/MeuComponente';
import Input from './components/InputPersonalizado/InputEmail';
import InputEmail from './components/InputPersonalizado/InputEmail';
import InputPersonalizado from './components/InputPersonalizado/InputEmail';
import InputSenha from './components/InputPersonalizado/InputSenha';

export default function App() {

    const botao = () =>{
      Alert.alert('Voce clicou no botao!');
    }

    const logo = require("./assets/logo.png")


  return (
    <View style={styles.container}>
      {/*<Text style={styles.fundo}>LOGO</Text>*/}

          {/*Imagem da logo
            <Image source={logo} style={{width:150, height:55, marginBottom:20}} /> */}

        {/*<MeuComponente conteudo="Conteudo 1" />*/}

      <View style={{marginBottom:20, marginTop:10}}>
        <Text style={{fontFamily: 'Poppins',fontSize:25, fontWeight:'bold'}}>Login</Text>
      </View>

      <View style={{marginBottom:20}}>
        <Text>Digite seu email e senha para entrar</Text>
      </View>

      <InputEmail/>

      <InputSenha/>

      {/*<View style={{width: 250, marginBottom: 10}}>
        
        <Text>E-mail:</Text>
        <TextInput
          placeholder='Digite seu Email'
          style={{
            height: 40, 
            borderColor: 'gray', 
            borderWidth: 1, 
            borderRadius:10, 
            width: 250,
            marginBottom: 20, 
            marginTop: 5, 
            paddingLeft:15}}
        />

        <Text>Senha:</Text>
        <TextInput
          placeholder='Digite sua Senha'
          style={{
            height: 40, 
            borderColor: 'gray', 
            borderWidth: 1, 
            borderRadius:10, 
            width: 250,
            marginBottom: 5, 
            marginTop: 5, 
            paddingLeft:15,
          }}
        />
      </View>/*}

      {/* Botão de Login com Gradiente */}
      <TouchableOpacity onPress={(botao)}>

        <LinearGradient
          colors={['#6CC3F7', '#5568DB', '#343372']}

          style={{
            width: 250,
            height: 45, 
            borderRadius: 10,  
            justifyContent: 'center', 
            alignItems: 'center',
            marginBottom: 10,
            }} 
            
            start={{ x: 0, y: 0}}
            end={{ x: 1, y: 1}}
            >
              
          <Text style={{color:'white', fontWeight:'bold'}}>Fazer Login</Text>
        </LinearGradient>
      </TouchableOpacity>

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
  fundo: {
    backgroundColor: 'lightblue',
  }
});
