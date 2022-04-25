import { View, StyleSheet, ScrollView } from "react-native";
import MessageBubbleSent from "./MessageBubbleSent";
import MessageBubbleReceived from "./MessageBubbleReceived";

export default function ChatFeed({ state }) {
  const [messages, Setmessage] = state;
  return (
    <ScrollView style={styles.container}>
      {messages.map((message, index) => {
        if (message.user == "user") {
          return (
            <MessageBubbleSent
              message={message.text}
              key={index}
            ></MessageBubbleSent>
          );
        } else if (message.user == "bot") {
          return (
            <MessageBubbleReceived
              message={message.text}
              key={index}
            ></MessageBubbleReceived>
          );
        }
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    height: "95%",
    backgroundColor: "#eff2fa",
    borderStyle: "solid",
    // borderWidth:2,
    //  alignItems: "center",
    // justifyContent: "center",
  },
});
