import {View, Text, TextInput, StyleSheet} from "react-native";

export default function InputSenha({campoSenha}) {
    return (
        <View style={{width: 250, marginBottom: 10}}>
            <Text>Senha:</Text>
            <TextInput
                placeholder='Digite sua Senha'
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    borderRadius:10,
                    marginBottom: 20, 
                    marginTop: 5, 
                    paddingLeft:12
                }}
            />
        </View>
    );
}