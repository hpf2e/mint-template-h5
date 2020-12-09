import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

// 数据请求封装
/**
 * Construct a type with a set of properties K of type T
 * type Record<K extends keyof any, T> = {
 * 	[P in K]: T;
 * };
 */
enum IHttpMethods {
	GET = 'get',
	POST = 'post',
	DELETE = 'delete',
	PUT = 'put',
}

const methods = ['get', 'post', 'delete', 'put'];

interface IHttpFn {
	<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
}

type IHttp = Record<IHttpMethods, IHttpFn>;

// 基本设置
const prefix = '';

const instance = axios.create({
	baseURL: prefix, // 默认api
	timeout: 10000, // 默认超时时间 10s
	withCredentials: true, // 带cookie
});

// 拦截返回
instance.interceptors.response.use(
	(
		response: AxiosResponse<{
			code: string;
			errorMsg: string | undefined;
			data: any;
		}>,
	) => {
		// 当code返回SUCCESS为有效数据
		const {code, data, errorMsg} = response.data;

		if (code !== 'SUCCESS') {
			return Promise.reject(errorMsg);
		}
		return data;
	},
	() => {
		return Promise.reject('请求错误');
	},
);

// 请求函数分装
const request: IHttp = methods.reduce((map: any, method: string) => {
	map[method] = (url: string, options: AxiosRequestConfig = {}) => {
		const {data, ...config} = options;
		return (instance as any)[method](url, data, config);
	};
	return map;
}, {});

export default request;
