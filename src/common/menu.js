import request from '../utils/request';
import { isUrl } from '../utils/utils';


export async function getMenu(params) {
  const res = await request('/CRM/menu', {
    method: 'POST',
    body: params,
  });
  let menuDataList = [];
  if (res.status === 200 && res.resultCode === 0) {
    menuDataList = res.resultData.menuData;
  }
  

  function formatter(data, parentPath = '/', parentAuthority) {
    return data.map(item => {
      let { path } = item;
      if (!isUrl(path)) {
        path = parentPath + item.path;
      }
      const result = {
        ...item,
        path,
        authority: item.authority || parentAuthority,
      };
      if (item.children) {
        result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
      }
      return result;
    });
  }
  const menuList = formatter(menuDataList);
  return menuList;
};







