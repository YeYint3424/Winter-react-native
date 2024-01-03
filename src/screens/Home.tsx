import {
  StatusBar,
  StyleSheet,
  SwitchComponent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Profile from './user/Profile';
import {useFocusEffect} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './user/MainScreen';
import CreatePostScreen from './user/CreatePostScreen';
import Edit from './user/Edit';
import SinglePost from './user/SinglePost';

type Props = {
  navigation: any;
};
export default function Home({navigation}: Props) {
  const [postId, setPostId] = useState(null);
  const [user, setUser] = useState<any | null>(null);
  const [activeComponent, setActiveComponent] = useState('MainScreen');
    useFocusEffect(
    React.useCallback(() => {
      const getUser = async () => {
        try {
          const user = await AsyncStorage.getItem('userData');
          const parsedUser = user ? JSON.parse(user) : null;

          if (!parsedUser || Object.keys(parsedUser).length === 0) {
            navigation.navigate('Login');
          }
          setUser(parsedUser);
          return parsedUser;
        } catch (err) {
          console.log(err);
        }
      };
      getUser();

      return () => {};
    }, [navigation, activeComponent]),
  );
  const switchComponent = (component: string) => {
    setActiveComponent(component);
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        translucent
        backgroundColor={'transparent'}
      />
      <View style={styles.navBar}>
        <NavBar />
      </View>
      <View style={styles.content}>
        {activeComponent === 'Profile' && <Profile user={user} setPostId={setPostId} activeComponent={activeComponent} switchComponent={switchComponent}/>}
        {activeComponent === 'MainScreen' && <MainScreen />}
        {activeComponent === 'CreatePostScreen' && <CreatePostScreen user={user} activeComponent={activeComponent} switchComponent={switchComponent}/>}
        {activeComponent === 'Edit' && <Edit user={user} activeComponent={activeComponent} switchComponent={switchComponent}/>}
        {activeComponent === 'Single' && <SinglePost user={user} postId={postId}/>}
      </View>
      <View style={styles.footer}>
        <Footer activeComponent={activeComponent} switchComponent={switchComponent} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#006379',
    paddingHorizontal: 0,
  },
  navBar: {
    width: '100%',
    alignSelf: 'flex-start',
    marginBottom: 0,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  content: {
    flex: 1,
    margin: 0,
    padding: 0,
    paddingBottom: 60,
  },
});
