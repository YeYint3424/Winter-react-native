import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {supabase} from '../api/supabase';

const SignUp = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [rePassword, setRePassword] = useState<string>();
  const [loading, setLoading] = useState<boolean>();

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: {session},
      error,
    } = await supabase.auth.signUp({
      name: name,
      email: email,
      password: password,
    });

    const {data} = await supabase
      .from('user')
      .insert([{name: name, email: email, password: password}])
      .select();

    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert('Please check your inbox for email verification!');
    setLoading(false);
  }

  return (
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
        placeholder="Username"
        keyboardType="default"
      />
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
        keyboardType="default"
      />
      <Input
        label="Retype Password"
        leftIcon={<Icon name="lock" size={24} color="black" />}
        onChangeText={text => setRePassword(text)}
        value={rePassword}
        secureTextEntry
        placeholder="Retype Password"
        keyboardType="default"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          disabled={loading}
          style={styles.button}
          onPress={() => signUpWithEmail()}>
          <Text style={styles.buttonText}>Create an Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
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
