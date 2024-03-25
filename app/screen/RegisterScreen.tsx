import React, {useState} from 'react';
import {View, Text, ScrollView, Alert, Keyboard} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../constants';
import Input from '../components/common/Input';
import Loader from '../components/common/Loader';
import Button from '../components/common/Button';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

interface Inputs {
  email: string;
  fullname: string;
  phone: string;
  password: string;
  photoURL?: string;
}

interface Errors {
  email?: string | undefined;
  fullname?: string | undefined;
  phone?: string | undefined;
  password?: string | undefined;
}

const RegisterScreen: React.FC<{navigation: any}> = ({navigation}) => {
  const [inputs, setInputs] = useState<Inputs>({
    email: '',
    fullname: '',
    phone: '',
    password: '',
    photoURL: 'https://my-cdn.com/assets/user/123.png',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState<boolean>(false);

  const validate = () => {
    Keyboard.dismiss();
    const validations = [
      {field: 'email', message: 'Please input email', condition: !inputs.email},
      {
        field: 'email',
        message: 'Please input a valid email',
        condition: !/\S+@\S+\.\S+/.test(inputs.email),
      },
      {
        field: 'fullname',
        message: 'Please input fullname',
        condition: !inputs.fullname,
      },
      {
        field: 'phone',
        message: 'Please input phone number',
        condition: !inputs.phone,
      },
      {
        field: 'password',
        message: 'Please input password',
        condition: !inputs.password,
      },
      {
        field: 'password',
        message: 'Min password length of 5',
        condition: inputs.password.length < 5,
      },
    ];
    const invalidFields = validations.filter(({condition}) => condition);
    if (invalidFields.length > 0) {
      invalidFields.forEach(({message, field}) => {
        handleError(message, field);
      });
      return;
    }
    register();
  };

  const register = async () => {
    setLoading(true);
    try {
      await auth()
        .createUserWithEmailAndPassword(inputs.email, inputs.password)
        .then(() => {
          const user = auth().currentUser;
          return user?.updateProfile({
            displayName: inputs.fullname,
            photoURL: inputs.photoURL,
          });
        })
        .then(() => {
          auth().onAuthStateChanged(async user => {
            if (user) {
              await saveUserData(user.uid, {
                ...inputs,
              });
              Alert.alert('Success', 'User registered successfully');
              navigation.navigate('Login');
            } else {
              console.log('error');
            }
          });
        })
        .catch(e => {
          console.log(e.code, e.message);
        });
    } catch (error: any) {
      setLoading(false);
      Alert.alert('Error', error?.message);
    }
  };

  // Function to save user data to Firebase Database
  const saveUserData = async (userId: string, userData: Inputs) => {
    try {
      await database().ref(`users/${userId}`).set(userData);
    } catch (error: any) {
      Alert.alert('Error', error?.message);
      throw error;
    }
  };

  const handleOnchange = (text: string, input: string) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error: string | undefined, input: string) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{paddingTop: 50, paddingHorizontal: 20}}>
        <Text style={{color: COLORS.black, fontSize: 40, fontWeight: 'bold'}}>
          Register
        </Text>
        <Text style={{color: COLORS.grey, fontSize: 18, marginVertical: 10}}>
          Enter Your Details to Register
        </Text>
        <View style={{marginVertical: 20}}>
          <Input
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError('', 'email')}
            iconName="email-outline"
            label="Email"
            placeholder="Enter your email address"
            error={errors.email}
          />

          <Input
            onChangeText={text => handleOnchange(text, 'fullname')}
            onFocus={() => handleError('', 'fullname')}
            iconName="account-outline"
            label="Full Name"
            placeholder="Enter your full name"
            error={errors.fullname}
          />

          <Input
            keyboardType="numeric"
            onChangeText={text => handleOnchange(text, 'phone')}
            onFocus={() => handleError('', 'phone')}
            iconName="phone-outline"
            label="Phone Number"
            placeholder="Enter your phone no"
            error={errors.phone}
          />
          <Input
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError('', 'password')}
            iconName="lock-outline"
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
            password
          />
          <Button title="Register" onPress={validate} />
          <Text
            onPress={() => navigation.navigate('Login')}
            style={{
              color: COLORS.black,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
            }}>
            Already have account ?Login
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
