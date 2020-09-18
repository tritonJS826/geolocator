import React, { useEffect, useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform, Linking
} from 'react-native';
import ModalWeb from 'modal-react-native-web';
import Modal from 'react-native-modal';
import { Ionicons } from '@expo/vector-icons';

import MyMap from '../../components/MyMap';
import CustomButton from '../../components/CustomButton';

import { ICurrentEvent } from '../../interfaces/currentEvent/ICurrentEvent';

import { delEventById } from '../../middlewares/archive';

interface IArchivePageProps {
  readArchFromStorage(): void;
  setError(error: Error): void;
  delEventById(id: string): void;
  archive: { archive: ICurrentEvent[] };
}

const ArchivePage: React.FC<IArchivePageProps> = ({
  readArchFromStorage,
  setError,
  archive,
}) => {
  const [isModalViseble, toogleModal] = useState(false);
  const [modalEvent, setModalEvent] = useState(archive.archive[0]);

  useEffect(() => {
    try {
      readArchFromStorage();
    } catch (error) {
      setError(error);
    }
  }, [archive]);

  const onToogleModal = () => {
    toogleModal(!isModalViseble);
  };

  const onGetInfo = (event: any) => {
    toogleModal(!isModalViseble);
    setModalEvent(event);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {[...archive.archive].map((el) => {
          const date = new Date(Number(el.id));
          return (
            <View key={el.id} style={styles.row}>
              <View style={styles.cell}>
                <Text style={styles.text}>{date.toLocaleDateString()}</Text>
                <Text style={styles.text}>{date.toLocaleTimeString()}</Text>
              </View>
              <TouchableOpacity onPress={() => onGetInfo(el)}>
                <View style={styles.cell}>
                  <Text style={styles.text}>{el.address}</Text>
                  <Text style={styles.text}>
                    latitude:
                    {el.coordinates?.latitude}
                  </Text>
                  <Text style={styles.text}>
                    longitude:
                    {el.coordinates?.latitude}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => delEventById(el.id)}>
                <View style={styles.modal}>
                <Ionicons name="ios-trash" size={40} color={'orange'} />
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
        {Platform.OS === 'web' && <ModalWeb visible={isModalViseble} ariaHideApp={false}>
          {!modalEvent && <Text>error</Text>}
          {modalEvent && (
            <View style={{ flex: 1 }}>
              <View style={styles.modal}>
                <Text style={styles.text}>
                  latitude:
                  {'\xa0'}
                  {modalEvent.coordinates.latitude}
                </Text>
                <Text style={styles.text}>
                  longitude:
                  {'\xa0'}
                  {modalEvent.coordinates.longitude}
                </Text>
                <Text style={styles.text}>
                  address:
                  {'\xa0'}
                  {modalEvent.address}
                </Text>
                <Text style={styles.text}>
                  Weather:
                  {'\xa0'}
                  {modalEvent.weather.description}
                </Text>
                <Text style={styles.text}>
                  Temperature:
                  {'\xa0'}
                  {'\xa0'}
                  {modalEvent.weather.temperatureNow}
                  {'\xa0'}
                  {'\u00B0'}
                  F
                </Text>
                <Text style={styles.text}>
                  Humidity:
                  {'\xa0'}
                  {modalEvent.weather.humidity}
                  %
                </Text>
                <Text style={styles.text}>
                  Wind speed:
                  {'\xa0'}
                  {modalEvent?.weather?.windSpeed}
                  {'\xa0'}
                  m/s
                </Text>
                {Platform.OS !== 'web' && (
                  <MyMap
                    longitude={modalEvent.coordinates.longitude}
                    latitude={modalEvent.coordinates.latitude}
                  />
                )}
                <CustomButton
                text="Open Map"
                  onPress={() => Linking.openURL(
                    `http://www.google.com/maps/place/${modalEvent.coordinates.latitude}, ${modalEvent.coordinates.longitude}`)}
                    />
              </View>
              <CustomButton text="Back" onPress={onToogleModal} />
            </View>
          )}
        </ModalWeb>}

        {Platform.OS !== 'web' && <Modal isVisible={isModalViseble}>
          {!modalEvent && <Text>error</Text>}
          {modalEvent && (
            <View style={{ flex: 1 }}>
              <View style={styles.modal}>
                <Text style={styles.text}>
                  latitude:
                  {'\xa0'}
                  {modalEvent.coordinates.latitude}
                </Text>
                <Text style={styles.text}>
                  longitude:
                  {'\xa0'}
                  {modalEvent.coordinates.longitude}
                </Text>
                <Text style={styles.text}>
                  address:
                  {'\xa0'}
                  {modalEvent.address}
                </Text>
                <Text style={styles.text}>
                  Weather:
                  {'\xa0'}
                  {modalEvent.weather.description}
                </Text>
                <Text style={styles.text}>
                  Temperature:
                  {'\xa0'}
                  {'\xa0'}
                  {modalEvent.weather.temperatureNow}
                  {'\xa0'}
                  {'\u00B0'}
                  F
                </Text>
                <Text style={styles.text}>
                  Humidity:
                  {'\xa0'}
                  {modalEvent.weather.humidity}
                  %
                </Text>
                <Text style={styles.text}>
                  Wind speed:
                  {'\xa0'}
                  {modalEvent?.weather?.windSpeed}
                  {'\xa0'}
                  m/s
                </Text>
                  <MyMap
                    longitude={modalEvent.coordinates.longitude}
                    latitude={modalEvent.coordinates.latitude}
                  />

              </View>
              <CustomButton text="Back" onPress={onToogleModal} />
            </View>
          )}
        </Modal>}

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'darkorange',
  },
  container: {
    minHeight: '100%',
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'darkorange',
    borderWidth: 2,
    paddingLeft: 5,
    paddingRight: 5,
    flexWrap: 'wrap',
  },
  cell: {
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'column',
  },
});
export default ArchivePage;
