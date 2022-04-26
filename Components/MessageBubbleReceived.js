import { StyleSheet, View, Text } from "react-native";
const MessageBubbleReceived = ({ message }) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        marginLeft: "5%",
        maxWidth: "50%",
        alignSelf: "flex-start",
        //maxWidth: 500,
        //padding: 14,

        //alignItems:"center",
        borderRadius: 20,
      }}
    >
      <Text style={{ fontSize: 16, color: "#000", justifyContent: "center" }}>
        {message}
      </Text>
      <View style={styles.leftArrow}></View>
      <View style={styles.leftArrowOverlap}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  leftArrow: {
    position: "absolute",
    backgroundColor: "#fff",
    //backgroundColor:"red",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomRightRadius: 25,
    left: -10,
  },

  leftArrowOverlap: {
    position: "absolute",
    backgroundColor: "#eff2fa",
    //backgroundColor:"green",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomRightRadius: 18,
    left: -20,
  },
});
export default MessageBubbleReceived;
