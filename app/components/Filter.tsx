import React from 'react';
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {filterData} from '../data/data.ts';
import COLORS from '../styles/colors.ts';

const Filter = ({
  activeFilter,
  onSelect,
}: {
  activeFilter: any;
  onSelect: (filter: any) => void;
}) => {
  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      {filterData.map((filter, index) => (
        <View key={index} style={styles.filterContainer}>
          <Pressable
            onPress={() => onSelect(filter)}
            style={[
              styles.filterButton,
              activeFilter.name === filter.name && styles.activeFilterButton,
            ]}>
            <Text
              style={[
                styles.filterText,
                activeFilter.name === filter.name && styles.activeFilterText,
              ]}>
              {filter.name}
            </Text>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
};

const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  gradientBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterContainer: {
    marginRight: 10,
    height: width * 0.15,
  },
  filterButton: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  activeFilterButton: {
    backgroundColor: COLORS.primary,
  },
  activeFilter: {
    backgroundColor: COLORS.primary,
  },
  filterText: {
    color: '#872929',
    fontSize: 15,
    fontWeight: 600,
  },
  activeFilterText: {
    color: COLORS.white,
  },
});

export default Filter;
