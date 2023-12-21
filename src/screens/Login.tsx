import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Button, Image, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { supabase } from '../api/supabase';

const Login = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [loading, setLoading] = useState<boolean>();

  async function signInWithEmail() {
    setLoading(true);
    const {error} = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }


  return (
    <View style={styles.container}>
      <View style={[styles.card]}>
        <View style={[styles.mb, styles.flexCenter]}>
          <Image
            source={require('../imgs/Winter.png')}
            style={{width: 200, height: 200, borderRadius: 100}}
          />
        </View>
        <Input
          label="Email"
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
          placeholder="Password"
          autoCapitalize={'none'}
          keyboardType="default"
        />
        <View style={styles.newAccountContainer}>
          <TouchableOpacity
            onPress={() => console.log('Create New Account')}>
            <Text style={styles.newAccountText}>Create new account ?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => signInWithEmail()}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>

        
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
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
    marginBottom: 50,
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
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  newAccountText:{
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign : 'center',
  },
  newAccountContainer: {
    marginBottom: 10
  }
});
