'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import Reducer from '../reducer';
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

const createStoreWithMiddleware = applyMiddleware(...middlewares);

export default function configureStore(initialState) {
    const store = createStore(Reducer, initialState, createStoreWithMiddleware)
    return store;
}
