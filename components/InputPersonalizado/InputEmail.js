import {View, Text, TextInput, StyleSheet} from "react-native";

export default function InputEmail({campoEmail}) {
    return (
        <View style={{width: 250, marginBottom: 10}}>
            <Text>Email:</Text>
            <TextInput
                placeholder='Digite seu Email'
                style={{
                    height: 40,
                    borderColor: 'gray',
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
