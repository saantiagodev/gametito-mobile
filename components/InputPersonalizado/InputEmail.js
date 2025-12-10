import {View, Text, TextInput, StyleSheet} from "react-native";

export default function InputEmail({campoEmail}) {
    return (
        <View style={{width: 250, marginBottom: 10}}>
            <Text style={{color: '#C4C4C4'}}>Email:</Text>
            <TextInput
                placeholder='Digite seu Email'
                placeholderTextColor= "#6C7278"
                style={{
                    height: 40,
                    borderColor: "#606AD9",
                    borderWidth: 1,
                    borderRadius:10,
                    marginBottom: 10, 
                    marginTop: 5, 
                    paddingLeft:12
                }}
            />
        </View>
    );
}
