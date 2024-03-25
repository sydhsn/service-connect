import React, {useState} from 'react';
import {
  View,
  Text,
  Alert,
  Keyboard,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {COLORS} from '../constants';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import Loader from '../components/common/Loader';
import auth from '@react-native-firebase/auth';

interface UserData {
  email: string;
  password: string;
}

interface InputErrors {
  email?: string | undefined;
  password?: string | undefined;
}

const LoginScreen: React.FC<{navigation: any}> = ({navigation}) => {
  const [inputs, setInputs] = useState<UserData>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<InputErrors>({});
  const [loading, setLoading] = useState<boolean>(false);

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };

  const login = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      try {
        await auth().signInWithEmailAndPassword(inputs.email, inputs.password);
        Alert.alert('Success', 'Login Successfull');
        navigation.navigate('Home', {loggedIn: true});
      } catch (err: any) {
        Alert.alert('Error', err.message);
      }
    }, 3000);
  };

  const handleOnchange = (text: string, input: string) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error: string | null, input: string) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{paddingTop: 50, paddingHorizontal: 20}}>
        <View style={{paddingTop: 50, paddingHorizontal: 20}}>
          <Text style={{color: COLORS.black, fontSize: 40, fontWeight: 'bold'}}>
            Log In
          </Text>
          <Text style={{color: COLORS.grey, fontSize: 18, marginVertical: 10}}>
            Enter Your Details to Login
          </Text>
          <View style={{marginVertical: 20}}>
            <Input
              onChangeText={text => handleOnchange(text, 'email')}
              onFocus={() => handleError(null, 'email')}
              iconName="email-outline"
              label="Email"
              placeholder="Enter your email address"
              error={errors.email}
            />
            <Input
              onChangeText={text => handleOnchange(text, 'password')}
              onFocus={() => handleError(null, 'password')}
              iconName="lock-outline"
              label="Password"
              placeholder="Enter your password"
              error={errors.password}
              password
            />
            <Button title="Log In" onPress={validate} />
            <Text
              onPress={() => navigation.navigate('Register')}
              style={{
                color: COLORS.black,
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 16,
              }}>
              Don't have account ?Register
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
