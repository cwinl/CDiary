'use strict';

import { createStore, applyMiddleware } from 'redux';
import Reducer from '../reducer';
import thunkMiddleware from 'redux-thunk';

import {
	createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

const navMiddleware = createReactNavigationReduxMiddleware(
	"root",
	state => state.nav,
);
// 定义中间件数组，默认包括thunk middleware
const middlewares = [thunkMiddleware.withExtraArgument(), navMiddleware];

if (__DEV__) {
	//   console.log("开发环境===");
}


// const createStoreWithMiddleware = applyMiddleware(...middlewares);
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware);

export default function configureStore(initialState) {
	const store = createStore(Reducer, initialState, createStoreWithMiddleware)
	return store;
}
