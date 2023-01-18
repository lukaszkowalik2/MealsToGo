import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function App() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={styles.containerGreen}>
          <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />
        </View>
        <View style={styles.containerBlue}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  containerGreen: {
    padding: 16,
  },
  containerBlue: {
    backgroundColor: 'blue',
    padding: 16,
    flex: 1,
  },
});
