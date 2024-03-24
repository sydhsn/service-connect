import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../components/common/Button';

interface UserDetails {
  email: string;
  fullname: string;
  phone: string;
  password: string;
}

interface Props {
  navigation: any; // Adjust type according to your navigation library
}

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const userData = await AsyncStorage.getItem('userData');
    if (userData) {
      setUserDetails(JSON.parse(userData));
    }
  };

  const logout = () => {
    if (userDetails) {
      AsyncStorage.setItem(
        'userData',
        JSON.stringify({...userDetails, loggedIn: false}),
      );
    }
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40,
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        Welcome {JSON.stringify(userDetails)}
      </Text>
      <Button title="Logout" onPress={logout} />
    </SafeAreaView>
  );
};

export default HomeScreen;
