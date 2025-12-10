import {View, Text, StyleSheet} from "react-native";

export default function MeuComponente({conteudo}) {
    return (
        <View>
            <Text style={style.texto}>--- {conteudo} ---</Text>
        </View>
    );
}


const style = StyleSheet.create({
    texto:{
        fontSize: 40,
        backgroundColor: 'blue',
    }
})