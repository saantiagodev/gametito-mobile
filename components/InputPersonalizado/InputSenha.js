import {View, Text, TextInput, StyleSheet} from "react-native";

export default function InputSenha({campoSenha}) {
    return (
        <View style={{width: 250, marginBottom: 10}}>
            <Text style={{color: '#C4C4C4'}}>Senha:</Text>
            <TextInput
                placeholder='Digite sua Senha'
                placeholderTextColor= "#6C7278"
                style={{
                    height: 40,
                    borderColor: "#606AD9",
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