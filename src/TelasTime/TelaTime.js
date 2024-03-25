import React from "react";
import { Text, Image } from "react-native";

function TelaTime({ route, navigation }) {
  const { nome, facanha, simbolo } = route.params;
  return (
    <>
      <Text>Tela do Time</Text>
      <Text> {nome} </Text>
      <Image style={{ width: 200, height: 200 }} source={{ uri: simbolo }} />
      <Text>{facanha}</Text>
    </>
  );
}

export default TelaTime;
