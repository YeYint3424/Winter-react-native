import {
  Alert,
  FlatList,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {Button, Image, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {supabase} from '../api/supabase';
import {RootStackScreenProps} from '../routes/type';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


type Props = RootStackScreenProps<'Login'>;
type Navigation = Props['navigation'];

const Login = () => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>();
  const navigation = useNavigation<Navigation>()

  const handleToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleToSignIn = async () => {
    try {
      const response = await axios.post('http://192.168.199.32:9999/api/v1/user/find', {
        email: email,
        password: password,
      });
  
      console.log('Response data:', response.data);
      await AsyncStorage.setItem('userData', JSON.stringify(response.data));
      navigation.navigate('Home');
    }catch (err) {
      console.log(err)
    }
  };

  return (
    <ImageBackground
      source={require('../assets/imgs/bg.jpg')}
      style={styles.main}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={'transparent'}
      />
      <KeyboardAvoidingView
        keyboardVerticalOffset={80}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.main}>
        <View style={styles.container}>
          <View style={[styles.card]}>
            <View style={[styles.mb, styles.flexCenter]}>
              <Image
                source={require('../assets/imgs/Winter.png')}
                style={{width: 200, height: 200, borderRadius: 100}}
              />
            </View>
            <Input
              label="Email"
              labelStyle={{color: 'black'}}
              leftIcon={<Icon name="envelope" size={24} color="black" />}
              onChangeText={text => setEmail(text)}
              value={email}
              placeholder="email@address.com"
              autoCapitalize={'none'}
              keyboardType="email-address"
            />
            <Input
              label="Password"
              leftIcon={<Icon name="lock" size={24} color="black" />}
              onChangeText={text => setPassword(text)}
              value={password}
              secureTextEntry
              labelStyle={{color: 'black'}}
              placeholder="Password"
              autoCapitalize={'none'}
              keyboardType="default"
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleToSignIn}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={handleToSignUp}
              style={styles.newAccountContainer}>
              <Text style={styles.newAccountText}>Create new account ?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: 20,
  },
  textWhite: {
    textAlign: 'center',
    color: 'white',
  },
  card: {
    paddingHorizontal: 15,
    paddingVertical: 40,
  },
  mb: {
    marginBottom: 30,
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    paddingHorizontal: 100,
  },
  button: {
    backgroundColor: '#006379',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  newAccountText: {
    color: '#1d4682',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    textShadowColor: 'white',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
  },
  newAccountContainer: {
    marginTop: 25,
    marginBottom: 10,
  },
});
