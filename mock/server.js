var Koa = require('koa');
var Router = require('koa-router');
const cors = require('koa-cors');
const bodyParser = require('koa-bodyparser')
var app = new Koa();
var router = new Router();


var loginData = require('./login/index.js');
var currentUser = require('./currentUser/currentUser.js');


router.post('/CRM/editpwd/formLogin', async (ctx, next) => {
    let {password, username} = ctx.request.body;
    if ( username !== 'admin' || password !== '888888') {
        ctx.body ={
            "resultId": 2,
            "resultMsg": "账户或密码错误",
        }
    }else{
        ctx.body =loginData
    }
}).post('/CRM/currentUser', async (ctx, next) => {
    ctx.body = currentUser;
});



// 开始服务并生成路由
app.use(cors());
app.use(bodyParser());
app.use(router.routes())
    .use(router.allowedMethods());
app.listen(9090);
