module.exports = {
    extends: 'airbnb-base',
    plugins: [
        'import',
    ],
    rules: {
        'import/no-unresolved': [
            2,
            { caseSensitive: false },
        ],
        'import/no-extraneous-dependencies': [
            2,
            {},
        ],
    },
    env: {
        jest: true,
    },
};