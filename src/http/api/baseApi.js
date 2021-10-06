/**
 * @description 用户模块
 */
import request from '@/http/request'

const baseUrl = '/syni-cdp-data-analysis'

/* tag */
const tag = {
	// 查询系统预定标签
	tag_queryUserSysTag: params => {
		return request.postJSON(`${baseUrl}/tag/queryUserSysTag`, params, false)
	},
	// 查询热门标签
	tag_queryPopularTag: params => {
		return request.get(`${baseUrl}/tag/queryPopularTag`, params, false)
	},
	// 传输微信标签
	tag_transferWxTag: params => {
		return request.get(`${baseUrl}/tag/transferWxTag`, params, false)
	}
}

/* 用户 */
const user = {
	// 分页列表查询
	user_list: params => {
		return request.get(`${baseUrl}/user/list`, params, false)
	},
	// 修改用户画像
	user_modifyUserPortrait: params => {
		return request.postJSON(`${baseUrl}/user/modifyUserPortrait`, params, true)
	},
	// 查询用户画像
	user_queryById: params => {
		return request.get(`${baseUrl}/user/queryById`, params, true)
	},
	// 查询时间轴
	user_queryTimeShaft: params => {
		return request.postJSON(`${baseUrl}/user/queryTimeShaft`, params, true)
	},
	// 查询用户标签
	user_queryUserTag: params => {
		return request.get(`${baseUrl}/user/queryUserTag`, params, true)
	}
}

/* 渠道表 */
const channel = {
	// 添加
	channel_add: params => {
		return request.postJSON(`${baseUrl}/channel/add`, params, true)
	},
	// 渠道列表查询
	channel_list: params => {
		return request.get(`${baseUrl}/channel/list`, params, true)
	}
}

/* 用户分群表 */
const group = {
	// 添加用户到分群
	group_addUserToGroup: params => {
		return request.postJSON(`${baseUrl}/group/addUserToGroup`, params, true)
	},
	// 创建分群
	group_createGroup: params => {
		return request.postJSON(`${baseUrl}/group/createGroup`, params, true)
	},
	// 删除分群
	group_deleteGroup: params => {
		return request.get(`${baseUrl}/group/deleteGroup`, params, true)
	},
	// 修改分群名称
	group_modifyGroup: params => {
		return request.get(`${baseUrl}/group/modifyGroup`, params, true)
	},
	// 查询用户分群统计
	group_queryUserGroupCount: params => {
		return request.postJSON(`${baseUrl}/group/queryUserGroupCount`, params, false)
	}
}

/* 用户订单 */
const userOrder = {
	// 用户订单-分页列表查询
	userOrder_list: params => {
		return request.get(`${baseUrl}/userOrder/list`, params, true)
	}
}

/* 属性 */
const properties = {
	// 字段列表查询
	properties_list() {
		return request.get(`${baseUrl}/properties/list`, {}, true)
	}
}

/* 事件 */
const event = {
	// 字段列表查询
	event_queryProps() {
		return request.get(`${baseUrl}/event/queryProps`, {}, true)
	},
	// 事件元数据列表查询
	event_queryEventMetaData() {
		return request.get(`${baseUrl}/event/queryEventMetaData`, {}, true)
	}
}

export default {
	...tag,
	...user,
	...channel,
	...group,
	...userOrder,
	...properties,
	...event
}
