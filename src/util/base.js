import {
	hashHistory
} from 'react-router'
import {
	Modal,
} from 'antd';

const USER_TOKEN = "USER_TOKEN";
export default {
	tipForm: false,
	baseUrl: 'http://hxmis.86xm.cn:81',
	//baseUrl: 'http://b.86xm.cn:88',
	getItem: function(key) {
		let value
		try {
			value = localStorage.getItem(key)
		} catch (ex) {
			
		} finally {
			return value
		}
	},
	setItem: function(key, value) {
		try {
			// ios safari 无痕模式下，直接使用 localStorage.setItem 会报错
			localStorage.setItem(key, value)
		} catch (ex) {
	
		}
	},
	//处理后台返回数据
	handleResult: function(result, success, err) {
		var that = this;
		if (result.resultId == "1") { //成功
			success(result);
		} else if (result.resultId == "0") { //失败
			Modal.error({
				title: '系统提示',
				content: result.resultMsg
			});
			err();
		} else if (result.resultId == -10) { //异常
			if (!this.tipForm) {
				Modal.error({
					title: '系统提示',
					content: result.resultMsg,
					onOk() {
						that.loginOut();
					}
				});
				this.tipForm = true;
			}
		}
	},
	//如果数据没有权限的时候 后台返回null  需要重置为[]
	restNoPowerData(data) {
		if (data.resultId == "0" && data.resultData.data == null) {
			return [];
		} else if (data.resultId == "1") {
			return data.resultData.data;
		}
	},
	//提交数据 含有undefined 的时候 删除掉非不要提交的值为undefined的字段
	delUndefinedCode(obj) {
		Object.keys(obj).forEach((item) => {
			if (obj[item] == undefined) {
				delete obj[item];
			}
		});
		return obj;
	},
	// loginOut: function() {
	// 	var that = this;
	// 	var result = loginOut().then(data => {
	// 		that.handleResult(data, function() {
	// 			that.setItem(USER_TOKEN, "");
	// 			hashHistory.push('/Login');
	// 		})
	// 	})
	// }

}