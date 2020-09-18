import React from 'react';
import {
  View, Text, StyleSheet, Platform, Button
} from 'react-native';
import openMap from 'react-native-open-maps';

import CustomButton from '../CustomButton';

const styles = StyleSheet.create({
  text: {
    color: 'darkorange',
  },
  mapWrapper: {
    backgroundColor: '#000000',
  },
  map: {
    height: '70%',
  },
});

interface IMyMap {
  longitude?: string;
  latitude?: string;
}

const MyMap: React.FC<IMyMap> = ({ longitude, latitude }) => {
  const goToMap = () => {
    openMap({ latitude: Number(latitude), longitude: Number(longitude) });
  };

  return (
    <View style={styles.mapWrapper}>
      <CustomButton onPress={goToMap} text="Open Map" />
    </View>
  );
};

export default MyMap;
