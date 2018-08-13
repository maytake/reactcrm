module.exports = {
	"resultId": 1,
	"resultMsg": "请求成功",
	"resultData": {
		"fixed": {
			"p": 1,
			"pagesize": 20
		},
		"data": {
			"count": "2",
			"list": [{
				"id": "1", //分类id
				"name": "分类1", //分类名称
				"code": "abc123", //分类编码
				"type": "1", //类型 1=固定资产 2=非固定资产
				"type_name": "固定资产" //类型名称
			}, {
				"id": "2",
				"name": "分类2",
				"code": "abc456",
				"type": "2",
				"type_name": "非固定资产"
			}]
		}
	}
}