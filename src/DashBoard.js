import {Image,StyleSheet,Text,TouchableOpacity,FlatList,View,ScrollView,ImageBackground} from 'react-native';
import React, {useEffect,useState} from 'react';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import {images} from '../constant';
import SideModal from './drawer/SideModal';

const DashBoard = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://storyfy.hirectjob.in/api/get-category',
      );
      setData(response.data.category_data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderListItem = ({item}) => (
    <TouchableOpacity onPress={() => navigation.navigate('MyStory')}>
          <LinearGradient colors={['#5AF357', '#079516']} style={styles.box}>
            {/* <Image
              source={{uri:item.category_image}}
              style={{position: 'absolute', bottom: 5}}
        /> */}
          <Image style={styles.itemImage} source={{ uri: item.category_image }} />
            <View style={{marginLeft: 170}}>
          <Text style={styles.heading}>{item.category_name}</Text>
              {/* <Text style={styles.subHeading}> 50 stories</Text> */}
            </View>
          </LinearGradient>
        </TouchableOpacity>
  );

  return (
    <ScrollView style={{backgroundColor:'#F5F5F5'}}>
      <ImageBackground
        source={images.head}
        style={{height: 180, justifyContent: 'flex-start'}}
      />
      <View style={{flexDirection: 'row', position: 'absolute'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={images.home} style={styles.homeIcon} />
        </TouchableOpacity>
        <View style={{flexDirection: 'column', marginTop: 60, marginLeft: 20}}>
          <Text
            style={{
              fontWeight: 700,
              fontSize: 18,
              color: '#fff',
              fontFamily: 'Poppins-Bold',
            }}>
            Hello !
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: '#fff',
              fontFamily: 'Rokkitt-Regular',
            }}>
            Lorem Ipsum is simply
          </Text>
        </View>

        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <Image source={images.avtar} style={styles.avtar} />
        </TouchableOpacity>
        <SideModal
          visible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
        />
      </View>
      <View style={styles.mainHeader}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.cat}>Categories</Text>
          <Text style={styles.list}>See All</Text>
        </View>
      </View>

      {/* <View style={{margin: 15, marginTop: 40}}>
        <TouchableOpacity onPress={() => navigation.navigate('MyStory')}>
          <LinearGradient colors={['#FE8CA7', '#F3406A']} style={styles.box}>
            <Text style={styles.heading}>Adventure</Text>
            <Text style={styles.subHeading}> 50 stories</Text>
            <Image source={images.adventure} style={styles.image} />
          </LinearGradient>
        </TouchableOpacity>
      </View> */}
      {/* <View style={{margin: 15}}>
        <TouchableOpacity onPress={() => navigation.navigate('MyStory')}>
          <LinearGradient colors={['#FDBE84', '#FD7D06']} style={styles.box}>
            <Image
              source={images.mystry}
              style={{position: 'absolute', bottom: 10}}
            />
            <View style={{marginLeft: 180}}>
              <Text style={styles.heading}>Mystry</Text>
              <Text style={styles.subHeading}> 50 stories</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View> */}
      {/* <View style={{margin: 15}}>
        <TouchableOpacity onPress={() => navigation.navigate('MyStory')}>
          <LinearGradient colors={['#5AF357', '#079516']} style={styles.box}>
            <Text style={styles.heading}>Fantasy</Text>
            <Text style={styles.subHeading}> 50 stories</Text>
            <Image source={images.fantacy} style={styles.image} />
          </LinearGradient>
        </TouchableOpacity>
      </View> */}

      <View style={{margin: 15}}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderListItem}
      />
       
      </View>
    </ScrollView>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  homeIcon: {
    marginTop: 70,
    marginLeft: 20,
  },
  avtar: {
    marginTop: 60,
    marginLeft: 90,
  },
  homeImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  mainHeader: {
    marginTop: 30,
  },
  cat: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: 700,
    color: '#01031A',
  },
  list: {
    textAlign: 'right',
    flex: 1,
    marginRight: 30,
    fontSize: 14,
    fontWeight: 500,
    color: '#57BBF3',
  },
  box: {
    padding: 30,
    borderRadius: 15,
    position: 'relative',
    marginBottom:'5%'
  },
  heading: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    fontWeight: 600,
    color: '#fff',
    lineHeight: 30,
    letterSpacing: 0.03,
  },
  subHeading: {
    fontSize: 12,
    fontWeight: 400,
    color: '#fff',
    fontFamily: 'Poppins-Regular',
  },
  image: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'flex-end',
  },
  itemImage: {
    position: 'absolute',
    width: 60,
    height: 60,
    // resizeMode: 'cover',
    bottom: 12,
    left:30
   
  },
});
