import { Component } from "react";
import {View, Text, TouchableOpacity} from 'react-native';


export default class Home extends Component {
    render(){
        return(
            <View>
                <Text>Tela de boas vindas</Text>

                <TouchableOpacity onPress={() => this.props.navigation.navigate("Listagem")}>
                    <Text>Listagem</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate("Cadastro")}>
                    <Text>Cadastro</Text>
                </TouchableOpacity>
            </View>
        )
    }
}