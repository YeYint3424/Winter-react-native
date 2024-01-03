import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SwitchComponent,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {Image, Input} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const CreatePostScreen = ({
  user,
  activeComponent,
  switchComponent,
}: {
  user: any;
  activeComponent: string;
  switchComponent: (component: string) => void;
}) => {
  const [preImg, setPreImg] = useState<any>([]);
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();

  const upload = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 500,
      cropping: true,
    })
      .then(img => {
        console.log(img.path);
        
        setPreImg([...preImg, img.path]);
      })
      .catch(err => console.log(err));
  };

  const fetchData = async () => {
    try {
      console.log(user._id);
      
      const response = await axios.post(
        'http://192.168.199.32:9999/api/v1/post/create',
        {
          title: title,
          description: description,
          img: preImg.map(url => ({ url })),
          userId : user._id
        },
      );
      console.log('successfully shared', title, description);
      switchComponent('MainScreen')
      Alert.alert('Success', 'Successfully shared');
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const sharePost = () => {
    fetchData()
  };
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <Text style={styles.title}>Post Title</Text>
        <Input
          placeholder="Title"
          style={styles.input}
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <Text style={styles.title}>Post Description</Text>
        <Input
          placeholder="Description"
          style={styles.textArea}
          multiline
          value={description}
          onChangeText={text => setDescription(text)}
        />
        <View style={styles.row}>
          <TouchableOpacity style={styles.addImg} onPress={upload}>
            <Image
              source={require('../../assets/imgs/imgPlus.png')}
              style={styles.imgIcon}
            />
            <Text style={{color: '#006379', fontWeight: '800', marginLeft: 5}}>
              Add Image
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.create} onPress={sharePost}>
            <Icon name="share" size={20} color="#006379" />
            <Text style={{color: '#006379', fontWeight: '800', marginLeft: 5}}>
              Share
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imgContainer}>
          {preImg.length > 0 &&
            preImg.map((img: any, index: number) => (
              <View key={index} style={{marginVertical: 10}}>
                <Image
                  source={{ uri: `${img}` }}
                  style={styles.preImg}
                />
              </View>
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  addImg: {
    backgroundColor: '#60faff',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  create: {
    backgroundColor: '#60faff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 20,
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontFamily: 'Pacifico-Regular',
    fontSize: 20,
  },
  textArea: {
    color: 'white',
  },
  imgIcon: {
    width: 30,
    height: 30,
  },
  preImg: {
    width: 400,
    height: 500,
  },
  input: {
    color: 'white',
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
