module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    // 代码风格
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs', {
      allowSingleLine: true
    }],
    'comma-spacing': [2, {
      before: false,
      after: true
    }],
    'comma-dangle': [2, 'never'],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    // indent: ['off', 2],
    'key-spacing': [2, {
      beforeColon: false,
      afterColon: true
    }],
    'keyword-spacing': [2, {
      before: true,
      after: true
    }],
    'linebreak-style': 0,
    'multiline-ternary': [2, 'always-multiline'],
    'no-multiple-empty-lines': [2, {
      max: 1
    }],
    'no-unneeded-ternary': [2, {
      defaultAssignment: false
    }],
    // quotes: [2, 'single'],
    semi: ['error', 'never'],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, {
      words: true,
      nonwords: false
    }],
    'spaced-comment': [2, 'always', {
      markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }],
    'switch-colon-spacing': [2, {
      after: true,
      before: false
    }],
    'object-curly-spacing': [2, 'always'],
    // ES6
    'arrow-parens': [2, 'as-needed'],
    'arrow-spacing': [2, {
      before: true,
      after: true
    }],
    // Vue - https://github.com/vuejs/eslint-plugin-vue
    'vue/multi-word-component-names': 0,
    'vue/no-v-html': 0,
    'vue/max-attributes-per-line': 0,
    'vue/require-default-prop': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/require-explicit-emits': [2, {
      allowProps: true
    }],
    // 支持定义any类型
    "@typescript-eslint/no-explicit-any": ["off"]
    // 'vue/script-indent': [2, 4, {
    //   switchCase: 1
    // }]
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ]
}
