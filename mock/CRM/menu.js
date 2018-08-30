module.exports = {
    "resultCode": 0,
    "status": 200,
    "resultMsg": "请求成功",
    "resultData": {
        "menuData": [{
            name: 'dashboard',
            icon: 'dashboard',
            path: 'dashboard',
            children: [{
              name: '分析页',
              path: 'analysis',
            }, {
              name: '监控页',
              path: 'monitor',
            }, {
              name: '工作台',
              path: 'workplace',
              hideInMenu: true,  // 隐藏该条
            }],
          }, {
            name: '表单页',
            icon: 'form',
            path: 'form',
            hideInMenu: true,  // 隐藏该组
            children: [{
              name: '基础表单',
              path: 'basic-form',
            }, {
              name: '分步表单',
              path: 'step-form',
            }, {
              name: '高级表单',
              path: 'advanced-form',
            }],
          }]
    }
}