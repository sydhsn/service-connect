import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Import Firebase
import firebase from '@react-native-firebase/app';

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp();
}

AppRegistry.registerComponent(appName, () => App);
