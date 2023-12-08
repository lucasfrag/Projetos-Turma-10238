import { Component } from "react";
import { View, Text, TouchableOpacity } from 'react-native';

export default class Cadastro extends Component {
    render() {
        return (
            <View>
                <Text>Toda a lógica de cadastro aqui...</Text>

                <TouchableOpacity onPress={() => this.props.navigation.navigate("Listagem")}>
                    <Text>Ver itens cadastrados</Text>
                </TouchableOpacity>
            </View>
        )
    }
}