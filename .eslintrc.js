module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
    ],
    plugins: [
        'import',
        'react',
        'babel',
        'jsx-a11y',
    ],
    rules: {
        semi: 0,
        'no-console': 0,
    },
    globals: {
        graphql: true,
    },
    env: {
        browser: true,
        es6: true,
        node: true
    },
    parserOptions: {
        sourceType: 'module'
    }
};