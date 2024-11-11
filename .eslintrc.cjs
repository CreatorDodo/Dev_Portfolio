module.exports = {
  root: true, // 현재 디렉토리를 ESLint 설정의 루트로 지정
  env: {
    browser: true, // 브라우저 전역 변수 사용 가능
    es2020: true, // ES2020 문법 지원
  },
  extends: [
    "airbnb",

    // ESLint의 기본적인 권장 규칙 세트
    "eslint:recommended",

    // TypeScript 관련 권장 규칙
    "plugin:@typescript-eslint/recommended",

    "plugin:react/recommended", // React 기본 권장 규칙
    "plugin:react-hooks/recommended", // React Hooks 사용을 위한 규칙

    "plugin:import/recommended", // import/export 문법 검사
    "plugin:jsx-a11y/recommended", // plugin:jsx-a11y/recommended는 React 애플리케이션의 웹 접근성(Web Accessibility)을 향상시키기 위한 ESLint 플러그인입니다.
    "eslint-config-prettier", // Prettier와 충돌 방지

    "prettier",
    "plugin:prettier/recommended",
  ],
  settings: {
    react: {
      version: "detect", // React 버전 자동 감지
    },
    "import/resolver": {
      node: {
        path: ["src"], // import 경로 해석 시 src 디렉토리 포함
        extensions: [".js", ".jsx", ".ts", ".tsx"], // 자동 확장자 처리
      },
    },
  },
  ignorePatterns: [
    "dist", // 빌드 출력 디렉토리 무시
    ".eslintrc.cjs", // ESLint 설정 파일 자체 무시
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-refresh"],
  rules: {
    // 이 규칙은 React Fast Refresh 기능과 관련된 것으로, 컴포넌트의 Hot Reloading을 최적화하기 위한 것입니다.
    // React Fast Refresh는 React 개발 환경에서 실시간 코드 수정을 가능하게 하는 기능입니다.
    // Hot Reloading의 새로운 버전으로, 이전 버전들의 한계를 개선한 기술입니다.
    "react-refresh/only-export-components": [
      "warn",
      {
        allowConstantExport: true, // 상수 값의 export를 허용
      },
    ],
    "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
  },
};
