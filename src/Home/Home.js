import React, { useEffect, useState } from "react";
import {
 ActivityIndicator,
 Pressable,
 SafeAreaView,
 ScrollView,
 Text,
} from "react-native";
import ItemLista from "../ItemLista/ItemLista";
import axios from 'axios'; // Importando o axios
import AuthContext from "../auth/AuthContext";
import { useFocusEffect } from '@react-navigation/native';

function Home({ navigation }) {
 const [times, setTimes] = useState([]);
 const [loading, setLoading] = useState(true);

 useFocusEffect(
  React.useCallback(() => {
     const fetchData = async () => {
       try {
         const response = await axios.get('http://172.16.11.117:3000/times');
         console.log(response.data);
         setTimes(response.data); // Atualizando o estado com os dados da API
         setLoading(false);
       } catch (error) {
         console.error(`Erro ao buscar dados: ${error}`);
         setLoading(false); // Certifique-se de definir loading como false mesmo em caso de erro
       }
     };
 
     if (AuthContext.isLoggedIn === false) {
       navigation.navigate("Login");
     } else {
       fetchData(); // Chamando a função para buscar os dados
     }
  }, [])
 );
 if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
 }

 return (
    <SafeAreaView>
      <Text>Lista de Times</Text>
      <ScrollView>
        {times.map((time, index) => (
          <Pressable
            key={index}
            onPress={() => {
              console.log('idTime', time.id);
              navigation.navigate("TelaTime", {
                idTime: time.times,
                nome: time.nome,
                facanha: time.facanha, // Aqui você pode ajustar para usar a propriedade correta da API
                simbolo: `http://172.16.11.117:3000/imagens/${time.imagem}`, // Aqui você pode ajustar para usar a propriedade correta da API
              });
            }}
          >
            <ItemLista
            idTime={time.id}
              nome={time.nome}
              facanha={time.facanha} // Aqui você pode ajustar para usar a propriedade correta da API
              simbolo={`http://172.16.11.117:3000/imagens/${time.imagem}`} // Aqui você pode ajustar para usar a propriedade correta da API
            />
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
 );
}

export default Home;