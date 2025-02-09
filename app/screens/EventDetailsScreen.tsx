import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {observer} from 'mobx-react';
import COLORS from '../styles/colors.ts';
import ScreenBg from '../components/ScreenBg.tsx';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Event} from '../types';
import MyHeader from '../components/MyHeader.tsx';

interface MenuScreenProps {
  navigation: any;
  route: any;
}

const eventImages: any = {
  1: require('../assets/event1.png'),
  2: require('../assets/event2.png'),
};

const EventDetailsScreen: React.FC<MenuScreenProps> = props => {
  const {params} = props.route;
  // @ts-ignore
  const event: Event = params?.event;

  return (
    <ScreenBg>
      <SafeAreaView edges={['left', 'right']} style={styles.mainContainer}>
        <MyHeader showBack title={''} />
        <Image
          source={eventImages[event.image]}
          style={{width: '90%', height: 210, borderRadius: 16}}
        />
        <View style={styles.titleBg}>
          <Text style={styles.title}>{event.title}</Text>
        </View>
        <View style={styles.dateContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../assets/calendar.png')}
              style={{
                width: 12,
                height: 12,
                resizeMode: 'contain',
                opacity: 0.5,
              }}
            />
            <Text style={styles.date}>{event.date}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../assets/clock.png')}
              style={{
                width: 12,
                height: 12,
                resizeMode: 'contain',
                opacity: 0.5,
              }}
            />
            <Text style={styles.date}>{event.time}</Text>
          </View>
        </View>
        <Text style={styles.desc}>{event.desc}</Text>
      </SafeAreaView>
    </ScreenBg>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 70,
    alignItems: 'center',
  },
  backBtn: {
    paddingTop: 60,
    paddingLeft: 20,
  },
  titleBg: {
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: 15,
    paddingVertical: 5,
    paddingLeft: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 500,
    color: COLORS.white,
  },
  desc: {
    color: COLORS.white,
    opacity: 0.5,
    width: '90%',
  },
  date: {
    color: COLORS.white,
    marginLeft: 4,
  },
  dateContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // alignSelf: 'flex-start',
    marginBottom: 20,
  },
});

export default observer(EventDetailsScreen);
