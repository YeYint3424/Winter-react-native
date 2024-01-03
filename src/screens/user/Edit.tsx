import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Image, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RootStackScreenProps} from '../../routes/type';

const Edit = ({
  user,
  activeComponent,
  switchComponent,
}: {
  user: any;
  activeComponent: string;
  switchComponent: (component: string) => void;
}) => {
  const [name, setName] = useState<string>(user.name);
  const [email, setEmail] = useState<string>(user.email);

  const fetchData = async () => {
    try {
      const response = await axios.put(
        `http://192.168.199.32:9999/api/v1/user/update/${user._id}`,
        {
          name: name,
          email: email,
        },
      );

      const loginResponse = await axios.post(
        'http://192.168.199.32:9999/api/v1/user/find',
        {
          email: email,
          password: user.password,
        },
      );

      await AsyncStorage.setItem(
        'userData',
        JSON.stringify(loginResponse.data),
      );
      switchComponent('Profile');
    } catch (error: any) {
      console.error('Error:', error.message);
    }
  };

  const handleUpdate = () => {
    fetchData();
  };
  return (
    <KeyboardAvoidingView keyboardVerticalOffset={100} style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.imgContainter}>
          <Image
            source={require('../../assets/imgs/user.png')}
            style={styles.img}
          />
        </View>
        <Input
          label="Username"
          leftIcon={<Icon name="user" size={24} color="white" />}
          onChangeText={text => setName(text)}
          value={name}
          style={{color: 'white'}}
          labelStyle={{color: 'white'}}
          placeholder="Username"
          keyboardType="default"
        />
        <Input
          label="Email"
          leftIcon={<Icon name="envelope" size={24} color="white" />}
          onChangeText={text => setEmail(text)}
          value={email}
          style={{color: 'white'}}
          labelStyle={{color: 'white'}}
          placeholder="email@address.com"
          autoCapitalize={'none'}
          keyboardType="email-address"
        />
        <TouchableOpacity style={styles.updateContainer} onPress={handleUpdate}>
          <Text style={styles.update}>Update</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Edit;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 100, 
    height: 100,
    borderRadius : 999,
},
  imgContainter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  updateContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  update: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
