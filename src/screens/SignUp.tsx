import {
  Alert,
  ImageBackground,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {RootStackScreenProps} from '../routes/type';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

type Props = RootStackScreenProps<'SignUp'>;
type Navigation = Props['navigation'];

const SignUp = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rePassword, setRePassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const navigation = useNavigation<Navigation>()

  const fetchData = async () => {
    try {
      const ipAddress = '192.168.199.32';
      const port = '9999';
      const response = await axios.post(
        `http://${ipAddress}:${port}/api/v1/user/create`,{
          name : name,
          email : email,
          password : password
        }
      );
      console.log('created successfully:');
      navigation.navigate('Login')
    } catch (error:any) {
      console.log('Error:', error.message);
    }
  };

  const onSubmit = () => {
    fetchData();
  };
  // 10.1.30.81
  return (
    <ImageBackground
      source={require('../assets/imgs/bg.jpg')}
      style={{flex: 1}}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={'transparent'}
      />
      <KeyboardAvoidingView keyboardVerticalOffset={100} style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <View style={styles.icon}>
              <Icon name="user" size={70} color="white" />
            </View>
          </View>
          <Input
            label="Username"
            leftIcon={<Icon name="user" size={24} color="black" />}
            onChangeText={text => setName(text)}
            value={name}
            labelStyle={{color: 'black'}}
            placeholder="Username"
            keyboardType="default"
          />
          <Input
            label="Email"
            leftIcon={<Icon name="envelope" size={24} color="black" />}
            onChangeText={text => setEmail(text)}
            value={email}
            labelStyle={{color: 'black'}}
            placeholder="email@address.com"
            autoCapitalize={'none'}
            keyboardType="email-address"
          />
          <Input
            label="Password"
            leftIcon={<Icon name="lock" size={24} color="black" />}
            onChangeText={text => setPassword(text)}
            value={password}
            labelStyle={{color: 'black'}}
            secureTextEntry
            placeholder="Password"
            keyboardType="default"
          />
          <Input
            label="Retype Password"
            leftIcon={<Icon name="lock" size={24} color="black" />}
            onChangeText={text => setRePassword(text)}
            value={rePassword}
            secureTextEntry
            labelStyle={{color: 'black'}}
            placeholder="Retype Password"
            keyboardType="default"
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              disabled={loading}
              style={styles.button}
              onPress={onSubmit}>
              <Text style={styles.buttonText}>Create an Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  buttonContainer: {
    marginTop: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#006379',
    borderRadius: 50,
    paddingVertical: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  icon: {
    backgroundColor: '#006379',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 100,
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
