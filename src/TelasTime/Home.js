import React from "react";
import { Image, Text } from "react-native";

function Home({time, simbolo, facanha}) {
    return (
        <>
            <Text> {time}
            </Text>
            <Image style={{ width: 200, height: 200 }} />
            <Text >Nome</Text>
        </>)
}

export default Home;