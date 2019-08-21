/**
 * reducer配置
 * @time 2019/8/20
 * redux 导出数据
 */
'use strict';
import { combineReducers } from 'redux';
import login from './login';

const rootReducer = combineReducers({
	// 将所有的redux处理逻辑包装在一起
	login: login,
});

export default rootReducer; // 导出,作为统一入口
