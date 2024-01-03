import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Image} from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';

const MainScreen = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const result = await axios.get(
          'http://192.168.199.32:9999/api/v1/post/all',
        );
        setPosts(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPosts();
  }, []);
  const renderImageItem = ({item}) => (
    <View style={styles.imgContainer}>
      <Image source={{uri: item.url}} style={styles.postImg} />
    </View>
  );
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {Array.isArray(posts) && posts.length > 0 ? (
          posts.map(post => (
            <View style={styles.post} key={post._id}>
              <View style={styles.postHeaderContainer}>
                <Image
                  source={require('../../assets/imgs/user.png')}
                  style={styles.userIcon}
                />
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  {post.userId && post.userId.name
                    ? post.userId.name
                    : 'Unknown User'}
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
          ))
        ) : (
          <View style={styles.noPost}>
            <ActivityIndicator
              style={{alignSelf: 'center', marginBottom: 10}}
              size={70}
              color="white"
            />
          </View>
        )}

        {/* <Text>hi</Text> */}

        {/* <View style={styles.postAction}>
            <TouchableOpacity>
              <Icon name="snowflake" size={28} color="#00F7FF" />
            </TouchableOpacity>
            <TouchableOpacity style={{marginHorizontal: 20}}>
              <Icon name="comment" size={28} color="white" />
            </TouchableOpacity>
          </View> */}
        {/* <View style={styles.post}>
          <View style={styles.postHeaderContainer}>
            <Image
              source={require('../../assets/imgs/user.png')}
              style={styles.userIcon}
            />
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Hnin Sandar Myo Thein
            </Text>
          </View>
          <View style={styles.imgContainer}>
            <Image
              source={require('../../assets/imgs/bg.jpg')}
              style={styles.postImg}
            />
          </View>
          <View style={styles.postAction}>
            <TouchableOpacity>
              <Icon name="snowflake" size={28} color="lightblue" />
            </TouchableOpacity>
            <TouchableOpacity style={{marginHorizontal: 20}}>
              <Icon name="comment" size={28} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.postFooter}>
            <Text style={{color: 'white', fontWeight: '700'}}>Post Title</Text>
            <Text style={{color: 'white', fontWeight: '400'}}>
              Post Descriptions
            </Text>
          </View>
        </View> */}
      </ScrollView>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    backgroundColor: '#006379',
    minHeight: '100%',
    paddingBottom: 120,
  },
  noPost: {
    alignSelf: 'center',
    marginTop: 100,
  },
  post: {
    paddingVertical: 10,
    backgroundColor: '#006379',
    marginBottom: 20,
  },
  postHeaderContainer: {
    paddingHorizontal: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  postAction: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 15,
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
    marginBottom: 5,
  },
  postFooter: {
    paddingVertical: 0,
    paddingHorizontal: 20,
  },
});
