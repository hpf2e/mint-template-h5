// 应用路由文件

import React, {
	ComponentType,
	LazyExoticComponent,
	NamedExoticComponent,
	ReactElement,
	ReactNode,
	Suspense,
	lazy,
} from 'react';
import {Redirect, Route} from 'react-router-dom';

import Home from '@pages/home';

export const RouteWithSubRoutes = (route: IRoute): ReactElement => {
	const _Route = () => (
		<Route
			path={route.path}
			exact={route.exact}
			render={(props) =>
				route.redirect ? (
					<Redirect to={route.redirect} />
				) : route.component ? (
					<route.component {...props} routes={route.routes} />
				) : null
			}
		/>
	);
	return route.fallback ? (
		<Suspense fallback={route.fallback}>
			<_Route />
		</Suspense>
	) : (
		<_Route />
	);
};

export interface IRoute {
	// 路由路径
	path: string | string[];
	// 路由对应的组件
	component?:
		| LazyExoticComponent<ComponentType<any>>
		| NamedExoticComponent<any>;
	// 是否精确匹配
	exact?: boolean;
	// 启用懒加载的fallback
	fallback?: NonNullable<ReactNode> | null;
	// 嵌套路由
	routes?: IRoute[];
	// 重定向路径
	redirect?: string;
}

const routes: IRoute[] = [
	{
		path: '/', // 商品评论
		exact: true,
		component: Home,
	},
];

export default routes;
