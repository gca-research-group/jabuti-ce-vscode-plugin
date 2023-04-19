module.exports = {
	env: {
	  browser: true,
	  es2021: true
	},
	extends: [
	  'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
	  'prettier'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
	  ecmaVersion: 'latest',
	  sourceType: 'module'
	},
	plugins: [
	  'eslint-plugin-import',
	  '@typescript-eslint',
	  'prettier'
	],
	rules: {
	  'prettier/prettier': ['error', { endOfLine: 'auto' }],
	  '@typescript-eslint/no-loss-of-precision': 'off',
	  '@typescript-eslint/no-namespace': 'off',
	  '@typescript-eslint/no-explicit-any': 'error',
	  '@typescript-eslint/no-unused-vars': 'off',
	  '@typescript-eslint/no-var-requires': 'off',
	  '@typescript-eslint/ban-types': 'off',
	  '@typescript-eslint/consistent-type-definitions': 'error',
	  '@typescript-eslint/dot-notation': 'off',
	  '@typescript-eslint/prefer-function-type': 'error',
	  '@typescript-eslint/unified-signatures': 'error',
	  'arrow-body-style': 'off',
	  'constructor-super': 'error',
	  'dot-notation': 'off',
	  'guard-for-in': 'error',
	  'id-denylist': 'off',
	  'id-match': 'off',
	  'no-bitwise': 'error',
	  'no-caller': 'error',
	  'no-console': 'off',
	  'no-debugger': 'error',
	  'no-empty': 'off',
	  'no-empty-function': ['error', { allow: ['constructors', 'arrowFunctions'] }],
	  'no-eval': 'error',
	  'no-fallthrough': 'error',
	  'no-new-wrappers': 'error',
	  'no-restricted-imports': ['error', 'rxjs/Rx'],
	  'no-shadow': 'off',
	  'no-throw-literal': 'error',
	  'no-undef-init': 'error',
	  'no-underscore-dangle': 'off',
	  'no-var': 'error',
	  'prefer-const': 'error',
	  'prefer-spread': 'off',
	  radix: 'error',
	  '@typescript-eslint/explicit-member-accessibility': [
		'off',
		{
		  accessibility: 'explicit'
		}
	  ],
	  '@typescript-eslint/member-ordering': 'off',
	  '@typescript-eslint/no-empty-function': 'off',
	  '@typescript-eslint/no-inferrable-types': [
		'error',
		{
		  ignoreParameters: true
		}
	  ],
	  '@typescript-eslint/no-misused-new': 'error',
	  '@typescript-eslint/no-non-null-assertion': 'error',
	  '@typescript-eslint/no-shadow': [
		'error',
		{
		  hoist: 'all'
		}
	  ]
	}
  };
  