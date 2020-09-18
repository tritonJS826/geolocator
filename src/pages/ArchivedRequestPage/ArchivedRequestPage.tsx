import React from 'react';
import { Text, StyleSheet } from "react-native";

interface IArchivedRequestPage {

}

const ArchivedRequestPage: React.FC<IArchivedRequestPage> =  () => {
  return (
    <>
      <Text style={styles.text}>ArchivedRequest</Text>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "darkorange",
  }
});

export default ArchivedRequestPage
