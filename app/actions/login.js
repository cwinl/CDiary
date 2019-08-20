'use strict';
/**
 * redux actions 触发方法
 * @type {Object}
 */
import React, { Component } from 'react';
import { DeviceEventEmitter } from 'react-native';
import * as types from '../../constants/actiontypes.js'; // 导入事件类型,用来做分配给各个事件

import Storages from '../../src/global/globalStorage.js';
// 登录
function login(params) {
	return dispatch => {
		dispatch({ type: types.LOAD_ING }); // 正在执行登录请求
		Storages.getItem('isConnect').then(isConnect => {
			if (isConnect === true) {
				OutHttpUtil.httpLogin(params)
					.then(res => {
						// console.log('请求成功',res);
						if (res.OK === 1) {
							dispatch({
								type: types.LOAD_SUCCEE,
								data: res
							});
							Storages.setItem('userInfo', res);
							Storages.setItem('userPwd', { phone: params.username, pwd: params.password1 }),
								DeviceEventEmitter.emit('loginSucess', res);

							// user({"uid":res.UID})
							// dispatch(user({"uid":res.UID}))
							params.navigation.goBack();
						} else {
							dispatch({ type: types.LOAD_FAIL }); // 登录请求出错
							Util.appToast('登录失败', 'bottom');
						}
					})
					.catch(err => {
						dispatch({ type: types.LOAD_FAIL }); // 登录请求出错
						Util.appToast('登录失败', 'bottom');
					});
			} else {
				dispatch({ type: types.LOAD_FAIL }); // 登录请求出错
				Util.appToast('当前处于无网络状态', 'bottom');
			}
		});
	};
}

export default {
	login: login,
};
