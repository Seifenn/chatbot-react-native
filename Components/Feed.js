import { View, StyleSheet, ScrollView } from "react-native";
import MessageBubbleSent from "./MessageBubbleSent";
import MessageBubbleReceived from "./MessageBubbleReceived";
import { useEffect, useRef } from "react";
import { unstable_createPortal } from "react-dom";

export default function ChatFeed({ state }) {
  const [messages, Setmessage] = state;
  const ScrollV = useRef(null);
  useEffect(() => {
    ScrollV.current.scrollToEnd({ animated: true });
  }, [messages]);
  return (
    <ScrollView style={styles.container} ref={ScrollV}>
      <View style={styles.container}>
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
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:5,
    paddingBottom:10,
    backgroundColor: "#eff2fa",
    borderStyle: "solid",
    height:"90%"
    // borderWidth:2,
    //  alignItems: "center",
    // justifyContent: "center",
  },
});
