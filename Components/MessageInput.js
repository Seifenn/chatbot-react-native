import react, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Image,
  View,
  Pressable,
  Text,
  TouchableOpacity
} from "react-native";

const MessageInput = ({ state }) => {
  console.log(state);
  const [text, SetText] = useState("");
  const [message, SetMessage] = state;

  const pressHandler = () => {
    SetMessage([
      ...message,
      {
        user: "user",
        text: text,
        date: new Date(),
      },
    ]);
    console.log(message);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(newText) => {
          SetText(newText);
          console.log(text);
         
        }}
        placeholder="Aa"
      />
      <TouchableOpacity style={styles.button}>
      <Pressable style={styles.button} onPress={pressHandler}>
        <Image
          style={styles.tinyLogo}
          source={require("./../assets/send.png")}
        />
      </Pressable>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 5,
    width: "75%",
    borderRadius: 25,
    backgroundColor: "#eff2fa",
    // borderWidth: 2,
    padding: 5,
    paddingLeft:10
  },
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 2,
    height:"10%",
  },
  button: {
    backgroundColor:"#eff2fa"
  },
  tinyLogo: {
    marginTop: 5,
    marginLeft: 10,
    width: 25,
    height: 25,
  },
});

export default MessageInput;
