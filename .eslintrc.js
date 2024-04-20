module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: { version: 'detect' }, // 사용 중인 React 버전 자동 감지
  },
  plugins: ['@typescript-eslint', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended', // React Hooks 권장 규칙 사용
  ],
  parser: '@typescript-eslint/parser', // TypeScript 파서 사용
  parserOptions: {
    ecmaVersion: 'latest', // 최신 ECMAScript 버전 사용
    sourceType: 'module', // ES6 import/export 문법 사용
  },
  rules: {
    // 여기에 React Hooks 규칙 추가
    'react-hooks/rules-of-hooks': 'error', // Hooks 규칙 위반시 에러 발생
    'react-hooks/exhaustive-deps': 'warn', // 의존성 배열 관련 경고
    // 다른 ESLint 규칙 설정
  },
};
