import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {styles} from '../styles';
import {COLORS} from '../constants';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
const LoginScreen = ({navigation}: any) => {
  return (
    <ScrollView style={styles.app}>
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <Image
            source={require('../assets/images/shape.png')}
            style={styles.loginImageTop}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.loginTitleText}>Welcome back</Text>
        </View>
        <View style={styles.logoConatiner}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.inputTextContainer}>
          <Input placeholder="Email" icon="user" />
          <Input placeholder="Password" icon="lock" secureTextEntry />
        </View>
        <Button title={'Login'} onPress={() => {}} />
        <TouchableOpacity onPress={() => console.log('Forgot password')}>
          <Text style={{color: COLORS.primary, marginBottom: 10}}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={{marginTop: 10}}>
            Don't have an account?{' '}
            <Text style={{color: COLORS.primary}}>Register</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
