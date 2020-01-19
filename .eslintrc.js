module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-unused-vars': [
      0,
      {
        vars: 'all',
        args: 'none'
      }
    ],
    semi: [0, 'always'], //是否以分号结尾都可以
    eqeqeq: 0, //比较的时候使用严格等于
    'one-var': 0, //强制变量声明放在一起
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
