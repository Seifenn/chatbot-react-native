import react from 'react'
import {StyleSheet, TextInput } from 'react-native'

const MessageInput =() => {
   // const [text,onChangeText] = React.useState(null)

return (
      <TextInput
        style={styles.input}
        multiline
       // onChangeText={onChangeText}
       // value={text}
        placeholder="Aa"
      />
  );};

const styles = StyleSheet.create({
  input: {
    height: 60,
    margin: 12,
    borderRadius:25,
    borderWidth: 1,
    alignSelf:"stretch",
    padding:10,
    paddingLeft:20

  },
});

export default MessageInput;