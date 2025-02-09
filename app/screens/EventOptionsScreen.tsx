import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {observer} from 'mobx-react';
import COLORS from '../styles/colors.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import ScreenBg from '../components/ScreenBg.tsx';
import KorzinaButton from '../components/KorzinaButton.tsx';
import {useNavigation} from '@react-navigation/native';
import {eventData} from '../data/data.ts';
import {Event} from '../types';
import MyHeader from '../components/MyHeader.tsx';

interface MenuScreenProps {
  navigation: any;
}

const EventOptionsScreen: React.FC<MenuScreenProps> = props => {
  return (
    <ScreenBg>
      <SafeAreaView edges={['left', 'right']} style={styles.mainContainer}>
        <MyHeader title={'Events'} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={styles.menuContainer}>
          <View style={styles.menuItemContainer}>
            {eventData.map(event => (
              <ItemButton key={event.id} event={event} />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ScreenBg>
  );
};

const ItemButton = ({event}: {event: Event}) => {
  const navigation: any = useNavigation();
  const [isActive, setIsActive] = React.useState(false);

  function handlePress() {
    navigation.navigate('EventDetail', {event: event});
  }

  function handleHeartPress() {
    setIsActive(!isActive);
  }

  return (
    <Pressable style={styles.menuItem} onPress={handlePress}>
      <Image source={event.image} style={styles.img} />
      <View style={styles.menuTextContainer}>
        <Text style={styles.menuTitle}>{event.title}</Text>
        <View
          style={{
            // backgroundColor: COLORS.white,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={{opacity: 0.5}}
              source={require('../assets/calendar.png')}
            />
            <Text style={styles.menuText}>{event.date}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{opacity: 0.5}}
              source={require('../assets/clock.png')}
            />
            <Text style={styles.menuText}>{event.time}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 80,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: 1,
    color: COLORS.white,
    textAlign: 'center',
  },
  menuContainer: {
    alignItems: 'center',
    paddingBottom: 80,
    paddingTop: 20,
  },
  menuItem: {
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  menuTextContainer: {
    borderRadius: 30,
    paddingVertical: 12,
    alignSelf: 'center',
  },
  menuText: {
    color: COLORS.white,
    fontWeight: 400,
    marginLeft: 4,
  },
  icon: {
    width: 90,
    height: 90,
  },
  iconContainer: {
    alignItems: 'flex-end',
    marginBottom: 60,
    marginRight: 20,
  },
  emptyContainer: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileTitle: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '400',
  },
  profileTitleContainer: {
    backgroundColor: COLORS.transparentBg,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 10,
  },
  editBtn: {
    backgroundColor: COLORS.white,
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginTop: 12,
    marginBottom: 30,
    alignSelf: 'flex-end',
  },
  emptyText: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
  },
  goBasketContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 20,
  },
  goBasketButton: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: COLORS.white,
    borderRadius: 12,
  },
  goBasketTitle: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: '700',
  },
  emptyText1: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 700,
    opacity: 0.5,
  },
  emptyText2: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 500,
    marginTop: 8,
  },
  emptyTextContainer: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  menuItemContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  eventTextIcon: {
    width: 150,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: -60,
    right: 0,
  },
  img: {
    width: 350,
    height: 165,
    borderRadius: 20,
    overflow: 'hidden',
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: 500,
    color: COLORS.white,
    marginBottom: 6,
  },
});

export default observer(EventOptionsScreen);
