import request from '../utils/request';
// 登录
export async function loginIn(params) {
    return request('/CRM/editpwd/formLogin', {
      method: 'POST',
      body:params,
    });
  }

  export async function getCurrentUser(params) {
    return request('/CRM/currentUser', {
      method: 'POST',
      body:params,
    });
  }