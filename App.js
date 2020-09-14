import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { Router, Route, Link } from "./react-router";

import HomePage from "./src/pages/Home";
import ArchivePage from "./src/pages/Archive";
import Button from "./src/components/Button";

const App = () => (
  <Router>
    <View style={styles.container}>
      <View style={styles.nav}>
        <Link to="/">
          <Button text="Home" onPress={()=>{}} />
        </Link>
        <Link to="/archive">
          <Button text="Archive" onPress={()=>{}} />
        </Link>
      </View>

      <Route exact path="/" component={HomePage} />
      <Route exact path="/archive" component={ArchivePage} />
    </View>
  </Router>
);

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: "#000000",
    minHeight: "100%",
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
});

export default App;
