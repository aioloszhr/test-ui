module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
		'prettier',
		'plugin:storybook/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
		  jsx: true
		},
		ecmaVersion: "latest",
		sourceType: "module"
	},
	plugins: ['react-refresh', '@typescript-eslint', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
	}
};
