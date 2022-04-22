import { StyleSheet, Text, View } from "react-native";
import { Directions } from "react-native-gesture-handler";

import MessageBubbleReceived from "./../Components/MessageBubbleReceived";
import MessageBubbleSent from "./../Components/MessageBubbleSent";
import MessageInput from "./../Components/MessageInput";


export default function Chat() {
  return (
    <View style={styles.container}>
      <MessageBubbleReceived></MessageBubbleReceived>
      <MessageBubbleSent></MessageBubbleSent>
      <MessageInput></MessageInput>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: "#E8E8E8",
      justifyContent: "center",
    },
    text: {
      color: "#fff",
    },
  });
