import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Editar from "../CadastroTIme/EditarTime";
import Plantel from "./Plantel";
import Competicoes from "./Competicoes";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthContext from "../auth/AuthContext";

const Tab = createBottomTabNavigator();

function TelaTime({ route, navigation }) {
  useEffect(() => {
    if (AuthContext.isLoggedIn === false) {
      navigation.navigate("Login");
    }
  }, []);

  const { nome, facanha, simbolo, idTime } = route.params;

  return (
    <Tab.Navigator
      initialRouteName="HomeTime"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="HomeTime"
        component={() => (
          <Home
            time={nome}
            facanha={facanha}
            simbolo={simbolo}
            idTime={idTime}
          />
        )}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Plantel"
        component={() => <Plantel time={nome} simbolo={simbolo} />}
        options={{
          tabBarLabel: "Plantel",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="soccer-field"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Editar"
        component={() => (
          <Editar
            time={nome}
            simbolo={simbolo}
            facanha={facanha}
            idTime={idTime}
          />
        )}
        options={{
          tabBarLabel: "Editar",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="pencil" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Competicoes"
        component={() => <Competicoes time={nome} simbolo={simbolo} />}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="trophy" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TelaTime;
