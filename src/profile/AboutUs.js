import {StyleSheet, Text, View, Image,ScrollView} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../reusableComponent/ScreenWrapper';
import {icons, images} from '../../constant';
import LinearGradient from 'react-native-linear-gradient';
import {TextButton} from '../../reusableComponent';

const AboutUs = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

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
          <Image source={images.about} />
        </View>
        <View style={styles.container}>
          <Text style={styles.heading}>Storyfi</Text>
          <Text style={styles.version}> Version 0.0</Text>
          <Text style={styles.contend}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonum Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
            diam nonum Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonum Lorem ipsum dolor sit amet, consectetuer adipiscing
            econsectetuer adipiscing elit, sed diam nonum
          </Text>

          <Text style={styles.link}>www.StotyFi.com</Text>

          <Text style={styles.link}>Help!</Text>
        </View>
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
});
