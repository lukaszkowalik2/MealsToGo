import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar, SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={styles.containerGreen}>
          <Text>Search</Text>
        </View>
        <View style={styles.containerBlue}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  containerGreen: {
    padding: 16,
    backgroundColor: 'green',
  },
  containerBlue: {
    backgroundColor: 'blue',
    padding: 16,
    flex: 1,
  },
});
