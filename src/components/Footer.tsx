import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Footer = ({ activeComponent, switchComponent }: { activeComponent: string; switchComponent: (component: string) => void }) => {

  return (
    <View style={styles.container}>
      <View style={styles.flexOne}>
        <TouchableOpacity onPress={() => switchComponent('MainScreen')}>
          <Icon name="home" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.flexOne}>
        <TouchableOpacity onPress={() => switchComponent('CreatePostScreen')}>
          <Icon name="plus-square" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.flexOne}>
        <TouchableOpacity onPress={() => switchComponent('Profile')}>
          <Icon name="user" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#006379',
    paddingVertical: 15,
    borderTopColor: '#343541',
    borderTopWidth: 1/2
  },
  flexOne: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
