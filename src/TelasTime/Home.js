import React from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios"; 

function Home(props, { route }) {
   const navigation = useNavigation(); 
  const { time, facanha, simbolo, idTime } = props;
  const handleDelete = () => {
    Alert.alert(
      "Confirmação de Deleção",
      "Você tem certeza que deseja deletar este time?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => deleteTime() },
      ],
      { cancelable: false }
    );
  };

  const deleteTime = () => {
    // Implemente a lógica para deletar o time aqui

    // Aqui você deve implementar a lógica para enviar a requisição de deletar o time.
    // Por exemplo, usando axios:
   
    axios
      .delete(`http://172.16.11.117:3000/times/${idTime}`)
      .then((response) => {
        console.log(response.data);
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela do Time</Text>
      <Text style={styles.text}>{time}</Text>
      <Image style={styles.image} source={{ uri: simbolo }} />
      <Text style={styles.text}>{facanha}</Text>
      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteButtonText}>Deletar Time</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  image: {
    width: 200,
    height: 200,
    margin: 10,
  },
  deleteButton: {
    backgroundColor: "#FF0000",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Home;
