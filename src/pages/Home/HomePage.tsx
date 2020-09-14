import React from 'react';
import { Text, StyleSheet } from "react-native";

interface IHomePage {
  
}

const HomePage: React.FC<IHomePage> = () => {
  return (
    <>
      <Text style={styles.text}>HomePage</Text>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "darkorange",
  }
});

export default HomePage;
