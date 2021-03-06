module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['airbnb', 'plugin:import/typescript'],
    rules: {
        'arrow-body-style': 'off',
        'arrow-parens': ['error', 'as-needed'],
        'comma-dangle': 'off',
        'func-names': 'off',
        'function-paren-newline': 'off',
        'implicit-arrow-linebreak': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: ['karma.conf.js', 'test/**'] }
        ],
        'import/prefer-default-export': 'off',
        indent: ['error', 4, { SwitchCase: 1 }],
        'mocha/no-exclusive-tests': 'error',
        'mocha/no-skipped-tests': 'error',
        'newline-per-chained-call': 'off',
        'no-console': 'off',
        'no-new': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'warn',
        'no-underscore-dangle': 'off',
        'no-use-before-define': 'off',
        'object-curly-newline': 'off',
        'operator-linebreak': 'off',
        'prefer-arrow-callback': 'off',
        'react/jsx-filename-extension': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        semi: ['error', 'never'],
        '@typescript-eslint/no-use-before-define': ['error'],
    },
    env: {
        browser: true,
        mocha: true,
    },
    plugins: [
        'mocha',
        '@typescript-eslint'
    ]
}
