'use strict';
/**登录
 * redux 数据管理
 * @type {Object}
 */
import * as types from '../../constants/actiontypes.js'; // 导入事件类别,用来做事件类别的判断

// 初始状态

const initialState = {
  status: '点击登录',
  isLoading: false,
  data: null,
}

// 不同类别的事件使用switch对应处理过程

export default function login(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_ING:
      return {
        ...state,
        status: '正在登录',
        isLoading: true,
        data: null,
      }
      break;
    case types.LOAD_SUCCEE:
      return {
        ...state,
        status: '登录成功',
        isLoading: false,
        data: action.data,

      }
      break;

    case types.LOAD_FAIL:
      return {
        ...state,
        status: '登录出错',
        isLoading: false,
        data: null,
      }
      break;
    default:
      return state;

  }

}
