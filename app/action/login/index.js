'use strict';
/**
 * redux actions 触发方法
 * @type {Object}
 */
import React, { Component } from 'react';
import { Constants } from '../../constants'; // 导入事件类型,用来做分配给各个事件
import globalStorages from '../../src/global/globalStorage';

// 登录
function login(params) {
	return dispatch => {
		dispatch({ type: Constants.LOGIN_ING }); // 正在执行登录请求
		globalStorages.getItem('isConnect').then(isConnect => {
			if (isConnect === true) {
				dispatch({ type: Constants.LOGIN_SUCCEED, data: null });
				Util.appToast('登录成功', 'bottom');
			} else {
				dispatch({ type: Constants.LOGIN_FAILED }); // 登录请求出错
				Util.appToast('当前处于无网络状态', 'bottom');
			}
		});
	};
}

export default {
	loginAction: login,
};
