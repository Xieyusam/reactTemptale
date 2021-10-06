import axios from 'axios'
// import { showLoading, hideLoading } from '@/components/loading/index.js'
// import store from '@/store/index'
import { Path,SystemConstants } from '@/constants/index.js'
// import { Message } from 'element-ui'
import qs from 'qs'
// import router from '../router/index.js'

// 默认请求接口地址
axios.defaults.baseURL = Path.HTTP_URL

const instance = axios.create({
	timeout:  SystemConstants.TIME_OUT * 1000
})

// 添加请求拦截器
instance.interceptors.request.use(
	function(config) {
		// 获取vuex里的token
		// const token = store.state.user.token
		const token = 'token'
		// 每次请求都设置token
		if (token) config.headers['X-Access-Token'] = token
		return config
	},
	function(error) {
		// 对请求错误做些什么
		console.log(error)
		// hideLoading()
		return Promise.reject(error)
	}
)

// 添加响应拦截器
instance.interceptors.response.use(
	function(response) {
		// 获取请求头里的token
		const token = response.headers.token
		if (token) {
			// 将token存入vuex
			// store.commit('SET_TOKEN', token)
		}
		// hideLoading()
		return response.data
	},
	function(error, rep) {
		// hideLoading()
		console.log(error.response)
		const response = error.response

		if (response && response.status === 500 && response.data.status === 500 && response.data.message.indexOf('Token失效') >= 0 && response.data.exception.indexOf('AuthenticationException') >= 0) {
			Message.error('登录失效，请重新登录！')
			// store.dispatch('logOut')
			// router.replace('/login')
		}else{
			Message.error('请求异常，稍后重试！')
		}
		// 对响应错误做点什么
		return Promise.reject(error)
	}
)

export default {
	/**
	 * @param {String} url 接口地址
	 * @param {Object} data 参数
	 * @param {Boolean} isLoading 是否显示loading
	 */
	post(url, data, isLoading = true) {
		if (isLoading) {
			// showLoading()
		}
		return instance({
			url,
			method: 'post',
			data: qs.stringify(data),
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		})
	},
    postFile(url, data, isLoading = true) {
		if (isLoading) {
			// showLoading()
		}
		return instance({
			url,
			method: 'post',
			data: data,
		})
	},
	/**
	 * @param {String} url 接口地址
	 * @param {Object} data 参数
	 * @param {Boolean} isLoading 是否显示loading
	 */
	postJSON(url, data, isLoading = true) {
		if (isLoading) {
			// showLoading()
		}
		return instance({
			url,
			method: 'post',
			data: data,
			headers: {
				'Content-Type': 'application/json'
			}
		})
	},

	/**
	 * @param {String} url 接口地址
	 * @param {Object} data 参数
	 * @param {Boolean} isLoading 是否显示loading
	 */
	get(url, data, isLoading = true) {
		if (isLoading) {
			// showLoading()
		}
		return instance({
			url,
			method: 'get',
			params: data
		})
	},

	/**
	 * @param {String} url 接口地址
	 * @param {Object} data 参数
	 * @param {Boolean} isLoading 是否显示loading
	 */
	getForm(url, data, isLoading = true) {
		if (isLoading) {
			// showLoading()
		}
		return instance({
			url,
			method: 'get',
			data: data,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		})
	},

	/**
	 * @param {String} url 接口地址
	 * @param {Object} data 参数
	 * @param {Boolean} isLoading 是否显示loading
	 */
	del(url, data, isLoading = true) {
		if (isLoading) {
			// showLoading()
		}
		return instance({
			url,
			method: 'delete',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			params: data
		})
	},

	/**
	 * @param {String} url 接口地址
	 * @param {Object} data 参数
	 * @param {Boolean} isLoading 是否显示loading
	 */
	put(url, data, isLoading = true) {
		if (isLoading) {
			// showLoading()
		}
		return instance({
			url,
			method: 'put',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			params: data
		})
	},

	/**
	 * @param {String} url 接口地址
	 * @param {Object} data 参数
	 * @param {Boolean} isLoading 是否显示loading
	 */
	putJSON(url, data, isLoading = true) {
		if (isLoading) {
			// showLoading()
		}
		return instance({
			url,
			method: 'put',
			headers: {
				'Content-Type': 'application/json'
			},
			data: data
		})
	}
}
