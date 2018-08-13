const Koa = require('koa');
const app = new Koa();

const router = require('koa-router')();


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


router.post('/home/member/getmemberlist', function*(next) {
    this.body = _memberData
}).post('/home/member/getmemberinfo', function*(next) {
    this.body = _memberData2
}).post('/home/member/login', function*(next) {
    this.body = _logo
}).post('/home/index/getmenu', function*(next) {
    this.body = _menu
}).post('/home/department/getdepartmentlist', function*(next) {
    this.body = _home
}).post('/home/role/getallrolelist', function*(next) {
    this.body = _home2
}).post('/home/role/getrolelist', function*(next) {
    this.body = _home3
}).post('/home/role/getmembernodes', function*(next) {
    this.body = _home4
}).post('/home/role/getrolepriv', function*(next) {
    this.body = _home5
}).post('/home/department/getalldepartmentlist', function*(next) {
    this.body = _home6
}).post('/home/role/addrole', function*(next) {
    this.body = normalData
}).post('/home/department/adddepartment', function*(next) {
    this.body = normalData
}).post('/home/department/editdepartment', function*(next) {
    this.body = normalData
}).post('/home/department/deldepartment', function*(next) {
    this.body = normalData
}).post('/home/role/editrole', function*(next) {
    this.body = normalData
}).post('/home/role/setmemberextranode', function*(next) {
    this.body = normalData
}).post('/home/role/updaterolepriv', function*(next) {
    this.body = normalData
}).post('/home/role/delrole', function*(next) {
    this.body = normalData
}).post('/home/member/addmember', function*(next) {
    this.body = normalData
}).post('/home/member/setmemberstatus', function*(next) {
    this.body = normalData
}).post('/home/member/editmember', function*(next) {
    this.body = normalData
}).post('/home/member/logout', function*(next) {
    this.body = normalData
}).post('/home/member/batchsetmemberrole', function*(next) {
    this.body = normalData
}).post('/home/member/batchsetmemberdepartment', function*(next) {
    this.body = normalData
}).post('/home/member/batchsetmemberstatus', function*(next) {
    this.body = normalData
}).post('/home/member/resetpassword', function*(next) {
    this.body = normalData
}).post('/erp/area/addarea', function*(next) {
    this.body = normalData
}).post('/erp/area/editarea', function*(next) {
    this.body = normalData
}).post('/erp/store/authstore', function*(next) {
    this.body = normalData
}).post('/erp/store/editstore', function*(next) {
    this.body = normalData
}).post('/erp/store/addstore', function*(next) {
    this.body = normalData
});



// 开始服务并生成路由
app.use(router.routes())
    .use(router.allowedMethods());
app.listen(9090);
console.log('app running on port 9090');