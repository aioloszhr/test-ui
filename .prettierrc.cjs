module.exports = {
	printWidth: 100, //单行长度
	tabWidth: 4, //缩进长度
	useTabs: true, //使用空格代替tab缩进
	semi: true, //句末使用分号
	singleQuote: true, //使用单引号
	quoteProps: 'as-needed', //仅在必需时为对象的key添加引号
	jsxSingleQuote: true, // jsx中使用单引号
	trailingComma: 'none', //多行时尽可能打印尾随逗号
	bracketSpacing: true, //在对象前后添加空格-eg: { foo: bar }
	jsxBracketSameLine: false, //多属性html标签的‘>’折行放置
	arrowParens: 'avoid', //单参数箭头函数参数周围使用圆括号-eg: (x) => x
	requirePragma: false, //无需顶部注释即可格式化
	insertPragma: false, //在已被preitter格式化的文件顶部加上标注
	proseWrap: 'always', //不知道怎么翻译
	htmlWhitespaceSensitivity: 'strict', //对HTML全局空白不敏感
	endOfLine: 'auto', //结束行形式
	embeddedLanguageFormatting: 'auto', //对引用代码进行格式化
	singleAttributePerLine: false //每行单个属性
};
