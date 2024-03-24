import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../constants';
import {styles} from '../styles';
import Input from '../components/common/Input';

const RegisterScreen = ({navigation}: any) => {
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
          <Text style={styles.loginTitleText}>Welcome to Onboard!</Text>
          <Text>Let’s help to meet up your tasks.</Text>
        </View>
        <View style={styles.inputTextContainer}>
          <Input placeholder="Full Name" icon="user" />
          <Input placeholder="Email" icon="envelope" />
          <Input placeholder="Mobile" icon="mobile" keyboardType="numeric" />
          <Input placeholder="Password" icon="lock" secureTextEntry />
          <Input placeholder="Confirm password" icon="lock" secureTextEntry />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{marginTop: 10}}>
            Already have an account?{' '}
            <Text style={{color: COLORS.primary}}>Log in</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
