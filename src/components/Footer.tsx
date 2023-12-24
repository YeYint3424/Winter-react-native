import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flexOne}>
        <TouchableOpacity>
          <Icon name="list" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.flexOne}>
        <TouchableOpacity>
          <Icon name="plus-square" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.flexOne}>
        <TouchableOpacity>
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
    backgroundColor: 'black',
    paddingVertical: 15,
  },
  flexOne: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
