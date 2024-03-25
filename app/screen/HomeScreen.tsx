import React, {useEffect, useState} from 'react';
import {Alert, Image, SafeAreaView, Text, View} from 'react-native';
import Button from '../components/common/Button';
import auth from '@react-native-firebase/auth';

interface UserDetails {
  email: string;
  fullname: string;
  phone: string;
  password: string;
}

interface Props {
  navigation: any;
  route?: any;
}

const HomeScreen: React.FC<Props> = ({navigation, route}) => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(route.params?.loggedIn);
  const currentUser = auth().currentUser;
  const {loggedIn} = route.params;

  const logout = async () => {
    if (currentUser) {
      await auth().signOut();
      setIsLoggedIn((prevState: any) => ({
        ...prevState,
        isLoggedIn: false,
      }));
      navigation.navigate('Login');
    }
  };

  console.log('loggedIn', loggedIn);
  console.log('route.params', route.params);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40,
      }}>
      <View>
        {currentUser ? (
          <>
            <Text>Welcome, {currentUser.displayName}!</Text>
            <Text>
              {isLoggedIn ? 'User is logged in' : 'User is not logged in'}
            </Text>
          </>
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
      <Button title="Logout" onPress={logout} />
    </SafeAreaView>
  );
};

export default HomeScreen;
