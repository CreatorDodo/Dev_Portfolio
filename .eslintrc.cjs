module.exports = {
  root: true, // 현재 디렉토리를 ESLint 설정의 루트로 지정
  env: {
    browser: true, // 브라우저 전역 변수 사용 가능
    es2020: true, // ES2020 문법 지원
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended', // React 기본 권장 규칙
    'plugin:react-hooks/recommended', // React Hooks 사용을 위한 규칙
    'plugin:import/recommended', // import/export 문법 검사
    'eslint-config-prettier', // Prettier와 충돌 방지
    'prettier',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-refresh'],
  rules: {
    'react/jsx-filename-extension': ['warn', { extensions: ['.ts', '.tsx'] }], // JSX 파일 확장자를 .ts, .tsx로 제한
    'react/react-in-jsx-scope': 'off', // React를 import하지 않아도 사용 가능
    'react/function-component-definition': [
      1,
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react-refresh/only-export-components': [
      'warn',
      {
        allowConstantExport: true, // 상수 값의 export를 허용
      },
    ],
    'tailwindcss/no-custom-classname': 'off', // Tailwind CSS 클래스 사용 가능
    '@typescript-eslint/no-explicit-any': 'off', // any 타입 사용 가능
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 함수 반환 타입을 명시하지 않아도 됨
  },
};
