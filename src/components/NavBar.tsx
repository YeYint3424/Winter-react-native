import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const NavBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Winter</Text>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 22,
    paddingVertical: 0,
  },
  logo: {
    fontFamily: 'Pacifico-Regular',
    fontSize: 30,
    color: '#60faff',
    textShadowColor: '#3b3a3a',
    textShadowRadius: 2,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
  },
});
