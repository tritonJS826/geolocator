import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from "react-native";


const  CustomButton = ({
  text,
  onPress,
  pressed,
  hidden,
}) => {
  if (hidden) return null;
  return (
    <TouchableOpacity style={styles.TouchableOpacity} onPress={onPress} >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  TouchableOpacity: {
    alignItems: "center",
    backgroundColor: "#202020",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "darkorange",
  }
});


export default CustomButton;
