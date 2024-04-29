import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/Home/Home";
import TelaTime from "./src/TelasTime/TelaTime";
import LoginScreen from "./src/TelaLogin/Login";
import RegistroScreen from "./src/TelaLogin/Registro";
import CadastroTime from "./src/CadastroTIme/CadastroTime";
// import AuthContext from './src/auth/AuthContext'; // Certifique-se de importar o AuthContext
import AuthContext from "./src/auth/AuthContext";

const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: true }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registro" component={RegistroScreen} />
          <Stack.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate("CadastroTime")}
                  title="+ time"
                />
              ),
            })}
          />
          <Stack.Screen name="CadastroTime" component={CadastroTime} />
          <Stack.Screen name="TelaTime" component={TelaTime} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
