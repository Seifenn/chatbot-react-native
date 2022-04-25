import { StyleSheet, View, Text } from "react-native";
const MessageBubble = ({ message }) => {
  return (
    <View
      style={{
        backgroundColor: "#0078fe",
        padding: 10,
        marginLeft: "45%",
        borderRadius: 5,
        //marginBottom: 15,
        marginTop: 5,
        marginRight: "5%",
        maxWidth: "50%",
        alignSelf: "flex-end",
        //maxWidth: 500,

        borderRadius: 20,
      }}
      //   key={index}
    >
      <Text style={{ fontSize: 16, color: "#fff" }}>{message}</Text>

      <View style={styles.rightArrow}></View>

      <View style={styles.rightArrowOverlap}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  rightArrow: {
    position: "absolute",
    backgroundColor: "#0078fe",
    //backgroundColor:"red",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomLeftRadius: 25,
    right: -10,
  },

  rightArrowOverlap: {
    position: "absolute",
    backgroundColor: "#eff2fa",
    //backgroundColor:"green",
    width: 20,
    height: 50,
    bottom: -6,
    borderBottomLeftRadius: 18,
    right: -20,
  },
});
export default MessageBubble;
