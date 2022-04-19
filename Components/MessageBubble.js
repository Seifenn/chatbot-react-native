import { StyleSheet, View, Text } from "react-native";
const MessageBubble = () => {
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
      <Text style={{ fontSize: 16, color: "#fff" }}>
        Welcome to SMU Chatbot
      </Text>

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
    backgroundColor: "#191e4d",
    //backgroundColor:"green",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomLeftRadius: 18,
    right: -20,
  },

  /*Arrow head for recevied messages*/
  leftArrow: {
    position: "absolute",
    backgroundColor: "#dedede",
    //backgroundColor:"red",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomRightRadius: 25,
    left: -10,
  },

  leftArrowOverlap: {
    position: "absolute",
    backgroundColor: "#eeeeee",
    //backgroundColor:"green",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomRightRadius: 18,
    left: -20,
  },
});
export default MessageBubble;
