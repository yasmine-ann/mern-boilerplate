module.exports = {
    "plugins": ['react'],
    "env": {
        "browser": true,
        "jest": true,
        "mongo": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
}