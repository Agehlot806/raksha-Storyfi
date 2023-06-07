import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../../reusableComponent/ScreenWrapper';
import {icons, images} from '../../constant';
import AboutInputField from '../../reusableComponent/AboutInputField';
import {TextButton} from '../../reusableComponent';
import {ScrollView} from 'react-native-gesture-handler';

const AboutHelp = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [contact, setContact] = useState('');
  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [help, setHelp] = useState('');

  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
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
        <View style={{marginTop: 50}}>
          <AboutInputField
            label={'Contact reason'}
            title="Reason"
            value={contact}
            onChangeText={setContact}
          />
          <AboutInputField
            label={'Subject'}
            title="Reason"
            value={subject}
            onChangeText={setSubject}
          />
          <AboutInputField
            label={'Your name'}
            title="Your name"
            value={name}
            onChangeText={setName}
          />
          <AboutInputField
            label={'Your email address'}
            title="Email"
            value={email}
            onChangeText={setEmail}
          />
          <AboutInputField
            label={'Your message'}
            title="Message"
            value={message}
            onChangeText={setMessage}
            multiline={true}
            numberOfLines={6}
            maxLength={40}
          />
          <AboutInputField
            label={'Your want to talk about '}
            title="Help"
            value={help}
            onChangeText={setHelp}
            appendComponent={<Image source={icons.arrowDown} />}
          />
          <View style={{marginHorizontal: 20, marginTop: 30, marginBottom: 30}}>
            <TextButton
              title="Review Us"
              onPress={() => navigation.navigate('setting')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutHelp;

const styles = StyleSheet.create({});
