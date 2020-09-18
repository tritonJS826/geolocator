import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


import HomePage from './pages/Home';
import ArchivePage from './pages/Archive';

import store from './redux/redux-store';

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#000000',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

const Tab = createBottomTabNavigator();

const App: React.FC = () => (
  <Provider store={store}>
    <NavigationContainer>
      <View style={styles.container}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            style: {
              pressColor: 'blue',
              backgroundColor: 'black',
            },
            header: null,
            tabBarIcon: ({ focused, size }) => {
            if (route.name === 'Home') {
              return (
                <Ionicons
                  name="ios-home"
                  size={size}
                  color={focused ? "black" : "grey"}
                />
              );
            } else if (route.name === 'Archive') {
              return (
                <Ionicons
                  name="ios-archive"
                  size={size}
                  color={focused ? "black" : "grey"}
                />
              );
            }
          },
          })}
        >
          <Tab.Screen name="Home" component={HomePage} />
          <Tab.Screen name="Archive" component={ArchivePage} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  </Provider>
);

export default App;
