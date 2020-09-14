import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { Router, Route, Link } from '../react-router';

import HomePage from './pages/Home';
import ArchivePage from './pages/Archive';
import CustomButton from './components/CustomButton';

import store from './redux/redux-store';

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#000000',
    minHeight: '100%',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Link to="/">
            <CustomButton text="Home" onPress={() => {}} />
          </Link>
          <Link to="/archive">
            <CustomButton text="Archive" onPress={() => {}} />
          </Link>
        </View>

        <Route exact path="/" component={HomePage} />
        <Route exact path="/archive" component={ArchivePage} />
      </View>
    </Router>
  </Provider>
);

export default App;
