import './styles/empty.scss';

import React, {memo} from 'react';

import {EmptyProps} from './interface';

export default memo((props: EmptyProps) => {
	const prefixCls = 'mapp-empty';
	const {errText, type} = props;

	if (type === 'cell') {
		return <section className={`${prefixCls}-cell`}>{errText}</section>;
	}
	return <section className={prefixCls}>{errText}</section>;
});
