import React from "react";
import { Text, Image } from "react-native";

function Home(props, { route, navigation }) {
  const { time, facanha, simbolo } = props;
  return (
    <>
      <Text>Tela do Time</Text>
      <Text> {time} </Text>
      <Image style={{ width: 200, height: 200 }} source={{ uri: simbolo }} />
      <Text>{facanha}</Text>
    </>
  );
}

export default Home;
