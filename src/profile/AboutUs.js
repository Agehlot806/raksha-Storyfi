import {StyleSheet, Text, View, Image,ScrollView} from 'react-native';
import React,{useEffect,useState} from 'react';
import ScreenWrapper from '../../reusableComponent/ScreenWrapper';
import {icons, images} from '../../constant';
import LinearGradient from 'react-native-linear-gradient';
import {TextButton} from '../../reusableComponent';
import axios from 'axios';

const AboutUs = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://storyfy.hirectjob.in/api/get-about-us',
      );
      setData(response.data.category_data);
      console.log('shyam-----------------------', response.data.category_data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ScrollView>
      <ScreenWrapper
        headerImage={images.head}
        homeIcon={icons.arrowLeft}
        avtar={images.avtar}
        heading={'About Us'}
        navigation={navigation}
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
      />

<View style={styles.mainContainer}>
       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            {/* <Image source={images.about} /> */}
       </View>
      {data.map((item) => (
      <View style={styles.container}>
      <Image
          source={{ uri: item.logo }}
          style={styles.image}
        />
      <Text style={styles.heading}>Storyfi</Text>
      <Text style={styles.version}>{item.version}</Text>
      <Text style={styles.contend}>{item.description}</Text>
 <Text style={styles.link}>{item.url}</Text>
   <Text style={styles.link}>{item.help}</Text>
    </View>
    ))}
        <View style={{marginHorizontal:21, marginTop: 30}}>
          <TextButton title="Review Us" onPress={() => navigation.navigate('aboutHelp')} />
        </View>
      </View> 
      
    </ScrollView>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
  },
  heading: {
    fontSize: 40,
    fontWeight: 400,
    lineHeight: 40,
    color: '#000',
    textAlign: 'center',
  },
  version: {
    fontSize: 20,
    fontWeight: 400,
    lineHeight: 20,
    color: '#26B3E2',
    marginTop:40
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contend: {
    margin: 18,
    lineHeight: 25,
    fontWeight: 400,
    color: '#000',
    textAlign: 'center',
  },
  link: {
    fontSize: 20,
    fontWeight: 700,
    fontFamily: 'Rokkit-Regular',
    lineHeight: 23,
    color: '#26B3E2',
    marginTop: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 18,
    justifyContent:'center'
  },
});
