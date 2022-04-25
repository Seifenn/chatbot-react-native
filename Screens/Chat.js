import { useEffect, useState } from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";

import Feed from "../Components/Feed";
import MessageInput from "./../Components/MessageInput";

export default function Chat() {
  useEffect(()=>{
    SetMessage([
      {
        user: "bot",
        text: "Hello there my friend. my name is Optimus 🤖. How can I help you today?",
        date: new Date(),
      },
    ])
  },[])
  const [message, SetMessage] = useState([
    {
      user: "bot",
      text: "Hello there my friend. my name is Optimus 🤖. How can I help you today?",
      date: new Date(),
    },
  ]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset="70"
    >
      <View style={styles.container}>
        <Feed state={[message, SetMessage]} />
        <MessageInput state={[message, SetMessage]} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    // borderWidth: 2,
  },
});
