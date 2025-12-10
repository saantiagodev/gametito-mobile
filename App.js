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

    const logo = require("./assets/gamestito-logo.png");


  return (
    <View style={styles.container}>
      {/*<Text style={styles.fundo}>LOGO</Text>*/}
            <Image 
            source={logo} 
            style={{ width: 180, height: 60, marginBottom: 30 }} 
            resizeMode="contain" 
            />

        {/*<MeuComponente conteudo="Conteudo 1" />*/}

      <View style={{marginBottom:20, marginTop:10}}>
        <Text style={styles.h1}>Login</Text>
      </View>

      <View style={{marginBottom:20}}>
        <Text>Digite seu email e senha para entrar</Text>
      </View>

      <InputEmail/>

      <InputSenha/>


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

  // Conteiner principal da tela
  container: {
    flex: 1,
    backgroundColor: '#331F4D',
    alignItems: 'center',
    justifyContent: 'center',
  },

  fundo: {
    backgroundColor: 'lightblue',
  },

  // Título principal
  h1: {
    fontFamily: 'Poppins',
    fontSize: 32, 
    fontWeight:'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },

  // Subtítulo
  h2: {

  },

  // Conteiner de cada Input personalizado
  inputContainer: {

  },

  // Textos dos Inputs
  inputText: {

  },

  // Caixa de texto (Input)
  inputBox: {

  },

});
