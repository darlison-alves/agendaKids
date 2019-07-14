import { AppLoading } from 'expo';
import React, { useState } from 'react';
import { Provider } from 'react-redux'
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import AppNavigator from './src/navigation/AppNavigator';
import store from './src/reducers/store';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <Provider store={store}>
          <AppNavigator />
        </Provider>
        
      </View>
    );
  }
}

async function loadResourcesAsync() {
 
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
