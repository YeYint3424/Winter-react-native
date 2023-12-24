/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import RootNavigator from './routes/RootNavigator';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
