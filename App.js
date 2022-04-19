import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MessageBubble from "./Components/MessageBubble";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MessageBubble></MessageBubble>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191e4d",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
