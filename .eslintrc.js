module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "plugins": [
        'import',
        'react',
        'babel',
        'jsx-a11y',
    ],
    "globals": {
        "graphql": false,
    },
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
    ],
}
