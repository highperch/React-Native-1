import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, CardSection, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyA9x62FpuqjFUYswd9ugSGMLdqabQl4I8o',
    authDomain: 'auth-24f66.firebaseapp.com',
    databaseURL: 'https://auth-24f66.firebaseio.com',
    projectId: 'auth-24f66',
    storageBucket: 'auth-24f66.appspot.com',
    messagingSenderId: '331605437145'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return (
          <LoginForm />
        );
      default:
        return (
          <View style={{ flex: 1 }}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    )
  }
}

export default App;
