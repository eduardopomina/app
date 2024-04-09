import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
} from "react-native";
import ItemLista from "../ItemLista/ItemLista";
import dataTime from "../../assets/times.json";
import AuthContext from "../auth/AuthContext";

function Home({ navigation }) {
  const [times, setTimes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data loading delay
    if (AuthContext.isLoggedIn === false) {
      navigation.navigate("Login");
    }

    setTimeout(() => {
      setTimes(dataTime);
      setLoading(false);
    }, 2000);
  }, []);

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
              navigation.navigate("TelaTime", {
                nome: time.nome,
                facanha: time.facanha,
                simbolo: time.simbolo,
              });
            }}
          >
            <ItemLista
              nome={time.nome}
              facanha={time.facanha}
              simbolo={time.simbolo}
            />
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
