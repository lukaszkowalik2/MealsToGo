import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfo } from '../components/restaurant-info.component';

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <View style={styles.containerGreen}>
        <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />
      </View>
      <View style={styles.containerBlue}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  containerGreen: {
    padding: 16,
  },
  containerBlue: {
    padding: 16,
    flex: 1,
  },
});
