import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {images} from '../../constant';
import {TextButton} from '../../reusableComponent';
import CustomDrawerContend from '../drawer/CustomDrawerContend';

const BuyNow = () => {
  return (
    <View style={styles.modalContent}>
      <View style={styles.box}>
        <View style={{alignItems: 'center'}}>
          <Image source={images.buy} style={{height: 200}} />
          <Text style={styles.para}>
            My Spy discount now. Link a device to enjoy a 50% OFF for new users,
            first month only 2430.00
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.heading}>$49.00</Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 600,
                fontFamily: 'Poppins-Regular',
                color: '#001D4C',
                lineHeight: 18,
                marginTop: 40,
              }}>
              / first month{' '}
            </Text>
          </View>
          <Text style={styles.month}>3850.00/month</Text>
        </View>
        <TextButton title={'Buy Now'} />
        <View style={{flexDirection: 'row', marginHorizontal: 30}}>
          <Text style={styles.expire}>Expiration Date: </Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(239, 9, 64, 0.7)',
              borderRadius: 23.5,
              width: 152,
              height: 35,
              marginTop: 35,
              left: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 16,
                textAlign: 'center',
                paddingTop: 5,
              }}>
              07/15/2022 15:07
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BuyNow;

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    backgroundColor: 'rgba(87, 187, 243, 0.5);',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#fff',
    borderRadius: 31.5,
    overflow: 'hidden',
    width: 335,
    height: 550,
  },
  para: {
    marginHorizontal: 10,
    fontSize: 14,
    fontWeight: 500,
    color: '#001D4C',
    letterSpacing: 0.4,
    lineHeight: 22,
    fontFamily: 'Poppins-Regular',
    marginTop: 0,
  },
  heading: {
    fontSize: 46,
    fontWeight: 600,
    fontFamily: 'Poppins-Bold',
    lineHeight: 69,
    color: '#37C3F2',
  },
  month: {
    color: '#001D4C',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 22,
    textDecorationLine: 'line-through',
  },
  expire: {
    fontSize: 14,
    fontWeight: 500,
    fontFamily: 'Poppins-Regular',
    lineHeight: 22,
    color: '#EF0940',
    // lineSpacing:0.5
    marginTop: 40,
  },
});
