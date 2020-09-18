import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ICustomButtonProps {
  text: string;
  onPress?: any;
  hidden?: boolean;
}

const CustomButton: React.FC<ICustomButtonProps> = ({ text, onPress, hidden }) => {
  if (hidden) return null;
  return (
    <TouchableOpacity style={styles.TouchableOpacity} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  TouchableOpacity: {
    alignItems: 'center',
    backgroundColor: '#202020',
    padding: 10,
    borderRadius: 5,
    marginLeft: '30%',
    marginRight: '30%',
    borderWidth: 1,
  },
  text: {
    textAlign: 'center',
    color: 'darkorange',
  },
});

export default CustomButton;
