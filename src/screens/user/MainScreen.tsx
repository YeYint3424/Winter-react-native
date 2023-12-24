import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native-elements';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.post}>
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
          <View style={styles.postFooter}>
            <Text style={{color: 'white', fontWeight: '700'}}>Post Title</Text>
            <Text style={{color: 'white', fontWeight: '400'}}>
              Post Descriptions
            </Text>
          </View>
        </View>

        <View style={styles.post}>
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
          <View style={styles.postFooter}>
            <Text style={{color: 'white', fontWeight: '700'}}>Post Title</Text>
            <Text style={{color: 'white', fontWeight: '400'}}>
              Post Descriptions
            </Text>
          </View>
        </View>

        <View style={styles.post}>
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
          <View style={styles.postFooter}>
            <Text style={{color: 'white', fontWeight: '700'}}>Post Title</Text>
            <Text style={{color: 'white', fontWeight: '400'}}>
              Post Descriptions
            </Text>
          </View>
        </View>

        <View style={styles.post}>
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
          <View style={styles.postFooter}>
            <Text style={{color: 'white', fontWeight: '700'}}>Post Title</Text>
            <Text style={{color: 'white', fontWeight: '400'}}>
              Post Descriptions
            </Text>
          </View>
        </View>


        <View style={styles.post}>
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
          <View style={styles.postFooter}>
            <Text style={{color: 'white', fontWeight: '700'}}>Post Title</Text>
            <Text style={{color: 'white', fontWeight: '400'}}>
              Post Descriptions
            </Text>
          </View>
        </View>


        <View style={styles.post}>
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
          <View style={styles.postFooter}>
            <Text style={{color: 'white', fontWeight: '700'}}>Post Title</Text>
            <Text style={{color: 'white', fontWeight: '400'}}>
              Post Descriptions
            </Text>
          </View>
        </View>

        <View style={styles.post}>
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
          <View style={styles.postFooter}>
            <Text style={{color: 'white', fontWeight: '700'}}>Post Title</Text>
            <Text style={{color: 'white', fontWeight: '400'}}>
              Post Descriptions
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },
  post: {marginVertical: 10},
  postHeaderContainer: {
    paddingHorizontal: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  userIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  postImg: {
    width: 'auto',
    height: 500,
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  postFooter: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
