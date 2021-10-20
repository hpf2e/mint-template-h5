// 自定义导航栏

import './styles/index.scss';

import {NavBar} from '@hupu/bigboy-component-navbar';
import React, {memo, useMemo} from 'react';

import {getStatusBar} from '@utils/helper';

export default memo((props: any) => {
	const prefixCls = 'seckilling-appbar';
	const {children, leftContent, rightContent, onRightClick, onLeftClick} =
		props;

	return (
		<section className={prefixCls}>
			<div
				className={`${prefixCls}-placeholder`}
				style={{
					paddingTop: `${getStatusBar()}px`,
				}}
			></div>
			<div
				className={`${prefixCls}-fixed`}
				style={{
					paddingTop: `${getStatusBar()}px`,
				}}
			>
				<NavBar
					className={`${prefixCls}-navbar`}
					share={false}
					leftContent={leftContent}
					rightContent={rightContent}
					onRightClick={onRightClick}
					onLeftClick={onLeftClick}
				>
					{children}
				</NavBar>
			</div>
		</section>
	);
});
