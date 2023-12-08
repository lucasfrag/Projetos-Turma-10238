import React, { Component } from 'react'

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"
import Listagem from "./src/Telas/Listagem";
import Cadastro from "./src/Telas/Cadastro";
import Home from './src/Telas/Home';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}></Stack.Screen>
          <Stack.Screen name="Cadastro" component={Cadastro}></Stack.Screen>
          <Stack.Screen name="Listagem" component={Listagem}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}