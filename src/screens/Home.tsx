import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {Button, Header} from 'react-native-elements';
import {supabase} from '../api/supabase';
import {Session} from '@supabase/supabase-js';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import MainScreen from './user/MainScreen';

const Home = ({session}: {session: Session}) => {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <NavBar />
      </View>
      <View style={styles.content}>
        <MainScreen/>
      </View>
      {/* <View style={styles.container}>
        <Button title={'Logout'} onPress={() => supabase.auth.signOut()} />

      </View> */}
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#006379'
  },
  navBar: {
    alignSelf: 'flex-start',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  content : {
    paddingBottom: 110
  }
});
