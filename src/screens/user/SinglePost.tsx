import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import {Image} from 'react-native-elements';
import axios from 'axios';
import { ActivityIndicator } from 'react-native';

const SinglePost = ({postId, user}: {postId: any; user: any}) => {
  const [post, setPost] = useState<any>();

  useEffect(() => {
    const getPost = async () => {
      try {
        const result = await axios.get(
          `http://192.168.199.32:9999/api/v1/post/${postId}`,
        );
        setPost(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPost();
  }, [postId]);

  const renderImageItem = ({item}) => (
    <View style={styles.imgContainer}>
      <Image source={{uri: item.url}} style={styles.postImg} />
    </View>
  );
  return (
    <View>
      {post != null ? (
        <View style={styles.post} key={post._id}>
          <View style={styles.postHeaderContainer}>
            <Image
              source={require('../../assets/imgs/user.png')}
              style={styles.userIcon}
            />
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              {user.name}
            </Text>
          </View>
          <Carousel
            data={post.img}
            renderItem={renderImageItem}
            sliderWidth={400}
            itemWidth={400}
          />
          <View style={styles.postFooter}>
            <Text style={{color: 'white', fontWeight: '700'}}>
              {post.title}
            </Text>
            <Text
              style={{
                color: 'white',
                fontWeight: '400',
                paddingHorizontal: 10,
                marginTop: 5,
              }}>
              {post.description}
            </Text>
          </View>
        </View>
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

export default SinglePost;

const styles = StyleSheet.create({
  post: {
    paddingVertical: 30,
    backgroundColor: '#006379',
    marginBottom: 20,
  },
  postHeaderContainer: {
    paddingHorizontal: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  userIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 999,
  },
  postImg: {
    width: 'auto',
    height: 500,
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 15,
  },
  postFooter: {
    paddingVertical: 0,
    paddingHorizontal: 20,
  },
});
