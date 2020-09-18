import React, { useEffect, useState } from 'react';
import {
  Text, StyleSheet, View, Platform, Linking, ScrollView,
} from 'react-native';
import ModalWeb from 'modal-react-native-web';
import timer from 'react-native-timer';

import { ICurrentEvent } from '../../interfaces/currentEvent/ICurrentEvent';

import CustomButton from '../../components/CustomButton';
import MyMap from '../../components/MyMap';

import dataId from '../../helpers/newDataId';

interface IHomePageProps {
  currentEvent: ICurrentEvent;
  getLocation(): void;
  getForecast(latitude: string, longitude: string): void;
  getPlace(latitude: string, longitude: string): void;
  setError(error: Error): void;
  writeArchToStorage(archive: ICurrentEvent[]): void;
  readArchFromStorage(): void;
  archive: { archive: ICurrentEvent[] };
}

const HomePage: React.FC<IHomePageProps> = ({
  getLocation,
  getForecast,
  getPlace,
  setError,
  writeArchToStorage,
  readArchFromStorage,
  currentEvent,
  archive,
}) => {
  const { coordinates, address, weather } = currentEvent;

  const [isModalVisible, toogleModal] = useState(false);
  const [isScanEnable, toogleScan] = useState(false);

  useEffect(() => {
    try {
      if (!coordinates.longitude) {
        getLocation();
      }
      readArchFromStorage();
    } catch (error) {
      setError(error);
    }
  }, []);

  useEffect(() => {
    try {
      if (!coordinates.longitude) return;
      const { latitude, longitude } = currentEvent.coordinates;
      getForecast(latitude, longitude);
      getPlace(latitude, longitude);
    } catch (error) {
      setError(error);
    }
  }, [currentEvent.coordinates]);

  const onReload = () => {
    try {
      getLocation();
    } catch (error) {
      setError(error);
    }
  };

  const addToArchive = () => {
    try {
      const event = { ...currentEvent, id: dataId() };
      const newArchive = [...archive.archive, event];
      writeArchToStorage(newArchive);
    } catch (e) {
      setError(e);
    }
  };

  // const onRealTimeTracking = () => {
  //   toogleModal(true);
  //   toogleScan(!isScanEnable);
  //
  //   const SCAN = 'scan';
  //   const scan = () => {
  //     try {
  //       getLocation();
  //       addToArchive();
  //     } catch (error) {
  //       setError(error);
  //     }
  //   };
  //
  //   if (isScanEnable) {
  //     timer.setInterval(SCAN, scan, 5000);
  //   } else {
  //     timer.clearInterval(SCAN);
  //   }
  // };

  return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>
          latitude:
          {'\xa0'}
          {coordinates.latitude}
        </Text>
        <Text style={styles.text}>
          longitude:
          {'\xa0'}
          {coordinates.longitude}
        </Text>
        <CustomButton text="reload data" onPress={onReload} />
        {/*<CustomButton text="Real time tracking ( 5sec )" onPress={onRealTimeTracking} />*/}
        <Text style={styles.text}>
          address:
          {'\xa0'}
          {address}
        </Text>
        <Text style={styles.text}>
          Weather:
          {'\xa0'}
          {weather.description}
        </Text>
        <Text style={styles.text}>
          Temperature:
          {'\xa0'}
          {'\xa0'}
          {weather.temperatureNow}
          {'\xa0'}
          {'\u00B0'}
          F
        </Text>
        <Text style={styles.text}>
          Humidity:
          {'\xa0'}
          {weather.humidity}
          %
        </Text>
        <Text style={styles.text}>
          Wind speed:
          {'\xa0'}
          {weather.windSpeed}
          {'\xa0'}
          m/s
        </Text>
        {Platform.OS !== 'web' && (
          <MyMap longitude={coordinates.longitude} latitude={coordinates.latitude} />
        )}
        {Platform.OS === 'web' && (
          <CustomButton
          text="Open Map"
            onPress={() => Linking.openURL(
              `http://www.google.com/maps/place/${coordinates.latitude}, ${coordinates.longitude}`)}
              />
            )}
        <View>
          <CustomButton text="Add to archive" onPress={addToArchive} />
        </View>
        {/*<ModalWeb visible={isModalVisible}>
          <View style={styles.container}>
            <Text style={styles.text}>{`scanner ${isScanEnable ? 'on' : 'off'}`}</Text>
            <CustomButton text="ok" onPress={() => toogleModal(false)} />
          </View>
          </ModalWeb>*/}
          </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'darkorange',
    textAlign: 'center',
  },
  container: {
    backgroundColor: '#000000',
    minHeight: '100%',
    flex: 1,
    marginTop: 'auto',
    marginBottom: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default HomePage;
