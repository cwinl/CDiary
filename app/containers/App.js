/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 */

import React, { Fragment, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Provider } from 'react-redux';
import configureStore from '../store/configureStore.js';
const store = configureStore();
import Storages from '../src/global/globalStorage.js';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {

  UNSAFE_componentWillMount() {

  }
  componentDidMount() {

  }

  render() {
    return (
      
      <Provider store={store}><Text >Debug</Text></Provider>
    );
  }

};

