export const semverCompare = (
	verionA: string,
	versionB: string,
): -1 | 0 | 1 => {
	const {isNaN} = Number;
	const splitA = verionA.split('.');
	const splitB = versionB.split('.');
	const minLength = Math.min(splitA.length, splitB.length) || 3;

	for (let i = 0; i < minLength; i++) {
		const snippetA = Number(splitA[i]);
		const snippetB = Number(splitB[i]);

		if (snippetA > snippetB) return 1;
		if (snippetB > snippetA) return -1;

		// e.g. '1.0.0-rc' -- Number('0-rc') = NaN
		if (!isNaN(snippetA) && isNaN(snippetB)) return 1;
		if (isNaN(snippetA) && !isNaN(snippetB)) return -1;
	}

	return 0;
};

// 获取连接参数
export const getUrlParams = (name: string): null | string => {
	const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i'); //定义正则表达式
	const r = window.location.search.substr(1).match(reg);
	if (r !== null) return unescape(r[2]);
	return null;
};
