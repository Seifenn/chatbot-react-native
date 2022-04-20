import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MessageBubbleReceived from "./Components/MessageBubbleReceived";
import MessageBubbleSent from "./Components/MessageBubbleSent";


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MessageBubbleReceived></MessageBubbleReceived>
      <MessageBubbleSent></MessageBubbleSent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00183D",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
