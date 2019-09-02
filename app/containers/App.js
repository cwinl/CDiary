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
	TextInput,
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
			zip: ""
		}
		console.log('constructor');
	}
	
	render() {
		return (
			<Provider store={store}>
				<View style={styles.container}>
					<TextInput style={styles.input} onSubmitEditing={this._handleTextCHange} />
					<Text style={styles.welcome}>your zip: {this.state.zip}</Text>
				</View>
			</Provider>
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

	_handleTextCHange = event => {
		this.setState({ zip: event.nativeEvent.text })
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 20
	},
	input: {
		fontSize: 20,
		borderWidth: 2,
		height: 40
	}
})

App.defaultProps = {};
App.propTypes = {};

export default App;