import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, Modal, Alert, ScrollView} from 'react-native';
import {COLORS, icons} from '../../constant';
import {InputFeild, TextButton} from '../../reusableComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = ({navigation}) => {
  const [countryModal, setCountryModal] = useState(false);
  const [mobile, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [view, setView] = useState(true);

  const countryList = [
    {name: 'India', code: 'IN', dialCode: '+91'},
    {name: 'United States', code: 'US', dialCode: '+1'},
    {name: 'United Kingdom', code: 'GB', dialCode: '+44'},
  ]; // Add more countries here];

  // Mobile Number Validation
  const handleNumberChange = value => {
    // Accept only numbers
    if (/^\d{0,10}$/.test(value) || value === '') {
      setNumber(value);
    }
  };


  const renderCountryCodeModal = () => {
    return (
      <Modal animationType="slide" transparent={true} visible={countryModal}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.transparentBlack1,
          }}>
          <View
            style={{
              backgroundColor: COLORS.white,
              padding: 20,
              borderRadius: 10,
              width: '80%',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontWeight: '700',
                fontSize: 18,
                color: '#000',
                marginBottom: 20,
              }}>
              Select a Country
            </Text>
            {countryList.map(country => (
              <TouchableOpacity
                key={country.code}
                onPress={() => {
                  // Set the selected country code
                  setCountryCode(country.dialCode);
                  setCountryModal(false);
                }}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    fontWeight: '400',
                    fontSize: 26,
                    color: '#000',
                    paddingVertical: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: COLORS.lightGray,
                  }}>
                  {/* {`${country.name} (${country.dialCode})`} */}
                  {`${country.name} (${country.dialCode})`}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    );
  };
 
  // const handleLogin = async () => {
  //     if (!mobile || !password) {
  //     Alert.alert('Error', 'All fields are required.');
  //     return;
  //     }
  //     else {
  //       loginFunction();
  //     }
  // }

  const loginFunction = () => {
    let url = `https://storyfy.hirectjob.in/api/login-user`
    var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
      mobile: mobile,
      password: password,
      }),
      headers: headers,
    })
    .then((Response) => Response.json())
    .then((Response) => {
      console.log('Login response ',Response)
      if(Response.status_code == 200){
        console.log('response status',Response)
        Alert.alert('Login successfull')
        navigation.navigate('HomeScreen',{dataofuser:Response})
      }
      else if(Response.status_code == 404) {
        Alert.alert('Login failed. Please try again.')
        console.log('response status',Response)
      }
    })
    .catch ((error) => {
          console.error(error);
          Alert.alert('An error occurred. Please try again.');
          console.log('error found',Response)
        })
  }

  const handleLogin = async () => {
    if (!mobile || !password) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }
    try {
      const response = await fetch(
        'https://storyfy.hirectjob.in/api/login-user',
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            mobile: mobile,
            password: password,
          }),
        },
      );
      const data = await response.json();
   
      if (response.status === 200 && data.status === true) {
        // Save user data to AsyncStorage
        await AsyncStorage.setItem('userData', JSON.stringify(data.user_data));
        // Alert.alert('Login successfull');
        navigation.navigate('HomeScreen',{dataofuser:data});
        
      } else {
        Alert.alert('Login failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('An error occurred. Please try again.');
    }
  };


  

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
         padding: 20,
        justifyContent: 'space-between',
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, }}>  
      <View>
        <Text
          style={{
            marginTop: 84,
            fontFamily: 'Poppins-Bold',
            fontWeight: '700',
            fontSize: 25,
            lineHeight: 32,
            color: '#01031A',
          }}>
          Welcome to our story {'\n'}world
        </Text>

        <View
          style={{
            marginTop: 38,
          }}>
          <InputFeild
            placeholder="88"
            placeholderTextColor='black'
            lable="Mobile Number"
            icon={icons.call}
            value={mobile}
            onChange={handleNumberChange}
            countryCodeComponent={
              <TouchableOpacity
                style={{
                  marginHorizontal: 12.67,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                onPress={() => setCountryModal(true)}>
                <Text
                  style={{
                    fontFamily: 'Rokkitt-Regular',
                    fontWeight: '400',
                    fontSize: 17,
                    lineHeight: 15.92,
                    color: '#57BBF3',
                  }}>
                  {countryCode}
                </Text>

                <Image
                  source={icons.arrow_down}
                  style={{tintColor: '#02141F', marginLeft: 6.54}}
                />
              </TouchableOpacity>
            }
          />
          {/* ---------------- password===== */}
          <InputFeild
            placeholder="*******"
            lable="Password"
            value={password}
            onChange={setPassword}
            secureTextEntry={view}
            icon={icons.lock}
            appendComponent={
              <TouchableOpacity onPress={()=>setView(!view)}>
            { view ?
              <Image source={icons.eye_slash}/>:
                <Image source={icons.eyeView} />}
                </TouchableOpacity>
            }
           
          />

          {/* ---------- Button------ */}
          <View style={{marginTop: 50}}>
              <TextButton title="Continue"
                onPress={handleLogin}
                // onPress={()=>{navigation.navigate('HomeScreen')}}
              />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
            alignSelf: 'center',
          marginTop:'50%'
        }}>
        <Text
          style={{
            fontFamily: 'Rokkitt-Regular',
            fontWeight: '400',
            fontSize: 17,
            lineHeight: 28,
            color: '#7D7D7D',
          }}>
          Want to create an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text
            style={{
              marginLeft: 5,
              textTransform: 'uppercase',
              fontFamily: 'Poppins-Regular',
              fontWeight: '400',
              fontSize: 14,
              lineHeight: 28,
              color: '#57BBF3',
              marginTop: 2,
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      {renderCountryCodeModal()}

      </ScrollView>
    </View>
  );
};

export default SignIn;
