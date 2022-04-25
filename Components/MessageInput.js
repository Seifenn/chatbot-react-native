import react, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Image,
  View,
  Pressable,
  Text,
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
      <Pressable style={styles.button} onPress={pressHandler}>
        <Image
          style={styles.tinyLogo}
          source={require("./../assets/send.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    width: "75%",
    borderRadius: 25,
    height: "50%",
    backgroundColor: "#eff2fa",
    // borderWidth: 2,
    padding: 20,
  },
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",

    // borderWidth: 2,
  },
  button: {},
  tinyLogo: {
    marginTop: 15,
    marginLeft: 15,
    width: 30,
    height: 30,
  },
});

export default MessageInput;
