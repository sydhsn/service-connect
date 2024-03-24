import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import Button from '../components/common/Button';
import auth from '@react-native-firebase/auth';

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
  const currentUser = auth().currentUser;

  const logout = () => {
    if (userDetails) {
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
      <View>
        {currentUser ? (
          <>
            <Text>Welcome, {currentUser.displayName}</Text>
            {currentUser.photoURL && (
              <Image
                source={{uri: currentUser.photoURL}}
                style={{width: 100, height: 100}}
              />
            )}
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
