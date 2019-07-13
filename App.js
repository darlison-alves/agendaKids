import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppRoot from './src/App'


export default function App() {
  return (
    <View >     
      <AppRoot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
