module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: { version: 'detect' }, // 사용 중인 React 버전 자동 감지
  },
  plugins: ['@typescript-eslint', 'simple-import-sort', 'unused-imports'],
  extends: [
    'eslint:recommended', // ESLint의 기본 규칙 사용
    'plugin:react/recommended', // React에 대한 권장 규칙 사용
    'plugin:@typescript-eslint/recommended', // TypeScript 권장 규칙 사용
    'plugin:react-hooks/recommended', // React Hooks 권장 규칙 사용
    'plugin:import/recommended', // Import/Export 규칙 사용
    'plugin:jsx-a11y/recommended', // 접근성 관련 규칙 사용
    'plugin:prettier/recommended', // Prettier 규칙 사용
    'prettier', // Prettier 설정 사용
  ],
  overrides: [], // 특정 파일 또는 폴더에 대한 규칙 재정의
  parser: '@typescript-eslint/parser', // TypeScript 파서 사용
  parserOptions: {
    ecmaVersion: 'latest', // 최신 ECMAScript 버전 사용
    sourceType: 'module', // ES6 import/export 문법 사용
  },
  rules: {
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/media-has-caption': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/named': 'off',
    'react/jsx-uses-react': 'off', // React를 JSX에서 사용하는 경우 경고 비활성화
    'react/react-in-jsx-scope': 'off', // JSX에서 React import가 필요 없음
    'import/no-unresolved': 'off', // 미해결 import에 대한 경고 비활성화
    'react/prop-types': 'off', // PropTypes 경고 비활성화
    'import/no-named-as-default': 'off', // 기본 export와 동일한 이름의 명명된 export 경고 비활성화
    'jsx-a11y/label-has-associated-control': 'off', // label 요소에 연결된 control이 없는 경우 경고 비활성화
    eqeqeq: 'error', // == 대신 === 사용 강제
    'no-undef': 'off', // 정의되지 않은 변수 경고 비활성화
    'no-unused-vars': 'off', // 사용되지 않는 변수 경고 비활성화
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }], // JSX를 포함한 파일 확장자로 .tsx 사용
    'import/extensions': 'off', // import 시 파일 확장자 경고 비활성화
    'prettier/prettier': ['error', { endOfLine: 'auto' }], // 줄바꿈 설정에 따라 Prettier 경고 활성화
    'jsx-a11y/no-static-element-interactions': 'off',
    // 'react/function-component-definition': [
    //   // 함수형 컴포넌트 정의 방식 설정
    //   2,
    //   {
    //     namedComponents: 'off', // 명명된 컴포넌트는 화살표 함수 사용
    //     unnamedComponents: 'off', // 이름 없는 컴포넌트도 화살표 함수 사용
    //   },
    // ],
    'import/prefer-default-export': 'off', // 단일 export 경우 default export를 선호하는 경고 비활성화
  },
};
