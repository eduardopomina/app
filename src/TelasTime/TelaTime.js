import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Plantel from "./Plantel";
import Competicoes from "./Competicoes";

const Tab = createBottomTabNavigator();

function TelaTime({ route, navigation }) {
  const { nome, facanha, simbolo } = route.params;
  return (
    <Tab.Navigator initialRouteName="HomeTime">
      <Tab.Screen name="HomeTime" component={Home} />
      <Tab.Screen name="Plantel" component={Plantel} />
      <Tab.Screen name="Competicoes" component={Competicoes} />
    </Tab.Navigator>
  );
}

export default TelaTime;
