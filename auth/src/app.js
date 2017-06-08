import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyA9x62FpuqjFUYswd9ugSGMLdqabQl4I8o',
    authDomain: 'auth-24f66.firebaseapp.com',
    databaseURL: 'https://auth-24f66.firebaseio.com',
    projectId: 'auth-24f66',
    storageBucket: 'auth-24f66.appspot.com',
    messagingSenderId: '331605437145'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    )
  }
}

export default App;
