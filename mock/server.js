var Koa = require('koa');
var Router = require('koa-router');
const cors = require('koa-cors');
const bodyParser = require('koa-bodyparser')
var app = new Koa();
var router = new Router();


var _memberData = require('./member/getmemberlist.js');
var _memberData2 = require('./member/getmemberinfo.js');
var _logo = require('./login/index.js');
var _menu = require('./index/getmenu.js');
var _home = require('./home/getdepartmentlist.js');
var _home2 = require('./home/getallrolelist.js');
var _home3 = require('./home/getrolelist.js')
var _home4 = require('./home/getmembernodes.js')
var _home5 = require('./home/getrolepriv.js')
var _home6 = require('./home/getdepartmentlist.js')
var normalData = require('./getSingleResult.js')


router.post('/home/member/getmemberlist', async (ctx, next) => {
    ctx.body = _memberData;
    let {password, username} = ctx.request.body;
    console.log(username);
});
router.get('/', async (ctx, next) => {
    if(parseInt(ctx.status) === 404){
        ctx.body = '404';
    };
    if(parseInt(ctx.status) === 500){
        ctx.body = '500';
    };
});


// 开始服务并生成路由
app.use(cors());
app.use(bodyParser());
app.use(router.routes())
    .use(router.allowedMethods());
app.listen(9090);
