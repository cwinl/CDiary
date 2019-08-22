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
import configureStore from '../store';
const store = configureStore();
import globalStorages from '../src/global/globalStorage';

import LoginAction from '../action/login';

import { Constants } from '../constants';

import {
	Header,
	LearnMoreLinks,
	Colors,
	DebugInstructions,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
		console.log('constructor');
	}

	render() {
		console.log('render');
		return (
			<Provider store={store}><Text >Debug</Text></Provider>
		);
	}

	componentDidMount() {
		console.log('componentDidMount');
		console.log(store.getState());

		store.dispatch({ type: Constants.LOGIN_SUCCEED });

		console.log(store.getState());

	}

	shouldComponentUpdate(nextProps) {
		console.log('shouldComponentUpdate');
		return true;
	}

	componentDidUpdate() {
		console.log('componentDidUpdate');
	}

	componentWillUnmount() {
		console.log('componentWillUnmount');
	}
};

App.defaultProps = {};
App.propTypes = {};

export default App;