import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaCadastro from './src/TelaCadastro';
import TelaPaciente from './src/TelaPaciente';
import Horarios from './src/Horarios';
import AddPaciente from './src/AddPaciente';
import AddMedicamento from './src/AddMedicamento';
import TelaLogin from './src/telalogin';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={TelaLogin} 
          options={{ title: 'Login' }} 
        />
        <Stack.Screen 
          name="Cadastro" 
          component={TelaCadastro} 
          options={{ title: 'Cadastro' }} 
        />
        <Stack.Screen 
          name="Paciente" 
          component={TelaPaciente} 
          options={{ title: 'Paciente' }} 
        />
        <Stack.Screen 
          name="Horarios" 
          component={Horarios} 
          options={{ title: 'Horários' }} 
        />
        <Stack.Screen 
          name="AddPaciente" 
          component={AddPaciente} 
          options={{ title: 'Adicionar Paciente' }} 
        />
        <Stack.Screen 
          name="AddMedicamento" 
          component={AddMedicamento} 
          options={{ title: 'Adicionar Medicamento' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
