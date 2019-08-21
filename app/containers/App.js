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
import configureStore from '../store/configureStore';
const store = configureStore();
import globalStorages from '../src/global/globalStorage';



import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
  componentDidMount() {

    console.log(store.getState());



  }

  render() {
    return (
      <Provider store={store}><Text >Debug</Text></Provider>
    );
  }
};

