import React from 'react';
import { Text, StyleSheet } from "react-native";

interface IArchivePageProps {
  
}

const ArchivePage: React.FC<IArchivePageProps> = () => {
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
export default ArchivePage;
