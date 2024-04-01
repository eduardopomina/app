import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem('username');
      const storedPassword = await AsyncStorage.getItem('password');
      console.log(storedUsername, storedPassword);
      console.log(username, password);
      if (username !== storedUsername || password !== storedPassword) {
        alert('Error!\nInvalid username or password.');
      } else {
        navigation.navigate('Home');
        // Aqui você pode adicionar a lógica para navegar para a tela principal após o login bem-sucedido
      }
    } catch (error) {
      alert('Error!\nThere was an error verifying user data.');
    }
  };

  return (
    <View>
      <TextInput
        value={username}
        onChangeText={(text) => setUsername(text)}
        placeholder={'Username'}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      />
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder={'Password'}
        secureTextEntry={true}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      />
      <Button
        title={'Login'}
        onPress={handleLogin}
      />
      <Text style={{ marginTop: 20, textAlign: 'center' }}>Não tem conta?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
        <Text style={{ color: 'blue', textAlign: 'center' }}>Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;