module.exports = {
    extends: 'thedark1337',
    rules: {
        camelcase: [2, {
            allow: [
            'long_description',
            'short_description'
            ],
            properties: 'always'
        }],
        'func-style': 0,
        'max-lines-per-function' :0,
        'newline-per-chained-call': 0,
        'no-negated-condition': 0,
        'no-sync': 0,
        'one-var': [2, {
            initialized: 'never'
        }],
        'prefer-arrow-callback': 0,
        'prefer-destructuring': 0,
        'prefer-rest-params': 0,
        'prefer-reflect': 0,
        'prefer-spread': 0,
        'require-jsdoc': 2
    }
};
