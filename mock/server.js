var Koa = require('koa');
var Router = require('koa-router');
const cors = require('koa-cors');
const bodyParser = require('koa-bodyparser')
var app = new Koa();
var router = new Router();


var loginData = require('./login/index.js');


router.post('/CRM/editpwd/formLogin', async (ctx, next) => {
    ctx.body = loginData;
    let {password, username} = ctx.request.body;
    console.log(username);
});



// 开始服务并生成路由
app.use(cors());
app.use(bodyParser());
app.use(router.routes())
    .use(router.allowedMethods());
app.listen(9090);
