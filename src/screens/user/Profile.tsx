import {
  ActivityIndicator,
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Image} from 'react-native-elements';
import axios from 'axios';

const Profile = ({
  user,
  setPostId,
  activeComponent,
  switchComponent,
}: {
  user: any;
  setPostId : any;
  activeComponent: string;
  switchComponent: (component: string) => void;
}) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const image = async () => {
      try {
        const result = await axios.get(
          `http://192.168.199.32:9999/api/v1/post/user/${user._id}`,
        );
          console.log(result.data[0]);
          
          const img = result.data.map(data => ({
            _id: data._id,
            img: data.img.length > 0 ? { url: data.img[0].url } : null
          }));


        setData(img);
      } catch (err) {
        console.log(err.message);
      }
    };
    image();
  }, [user]);

  const postClick = (id:any) => {
    setPostId(id)
    switchComponent('Single')
  }
  const renderItem = ({item}: {item: any}) => (
    <TouchableOpacity style={styles.item} onPress={() => postClick(item._id)} id={item._id}>
      <Image source={{uri: `${item.img.url}`}} style={styles.postImg} />
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: 30}}>
        <View style={styles.row}>
          <View style={{flex: 1}}>
            <Image
              source={require('../../assets/imgs/user.png')}
              style={styles.userIcon}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.postText}>{data.length}</Text>
            <Text style={styles.postText}>Posts</Text>
          </View>
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>{user && user.name}</Text>
          <Text style={styles.email}>@{user && user.email}</Text>
        </View>
      </View>
      <View style={{marginTop: 20, paddingHorizontal: 20}}>
        <TouchableOpacity
          style={styles.edit}
          onPress={() => switchComponent('Edit')}>
          <Text
            style={{color: '#000', textAlign: 'center', fontWeight: 'bold'}}>
            Edit Profile
          </Text>
        </TouchableOpacity>
      </View>
      {data.length > 0 ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          contentContainerStyle={styles.imgGrid}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <ActivityIndicator
          style={{alignSelf: 'center', marginTop: 20}}
          size={70}
          color="white"
        />
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingTop: 20,
    flex: 1,
  },
  imgGrid: {
    justifyContent: 'space-between',
  },
  item: {
    flex: 1,
    margin: 2,
  },
  postImg: {
    height: 125,
    resizeMode: 'cover',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  edit: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 5,
    borderRadius: 15,
    marginBottom: 20,
  },
  postText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  userIcon: {
    width: 80,
    height: 80,
    borderRadius: 9991,
  },
  info: {
    marginTop: 10,
  },
  name: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  email: {
    marginTop: 5,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
