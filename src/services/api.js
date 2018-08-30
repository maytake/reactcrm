import request from '../utils/request';
// 登录
export async function loginIn(params) {
    return request('/CRM/editpwd/formLogin', {
      method: 'POST',
      body:params,
    });
  }