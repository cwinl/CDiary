'use strict';
/**登录
 * redux 数据管理
 * @type {Object}
 */
import { Constants } from '../../constants'; // 导入事件类别,用来做事件类别的判断

// 初始状态
const initialState = {
  status: '点击登录',
  isLoading: false,
  data: null,
}

// 不同类别的事件使用switch对应处理过程
export default function login(state = initialState, action) {
  switch (action.type) {
    case Constants.LOGIN_ING:
      return {
        ...state,
        status: '正在登录',
        isLoading: true,
        data: null,
      }
      break;
    case Constants.LOGIN_SUCCEED:
      return {
        ...state,
        status: '登录成功',
        isLoading: false,
        data: action.data,
      }
      break;
    case Constants.LOGIN_FAILED:
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
