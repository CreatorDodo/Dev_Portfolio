/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard-Regular', 'sans-serif'], // 기본 폰트
        serif: ['Pretendard-Regular', 'sans-serif'], // serif 폰트
        mono: ['Pretendard-Regular', 'sans-serif'], // 코드용 폰트
        pretendard: ['Pretendard-Regular', 'sans-serif'], // 커스텀 클래스
      },
    },
  },
  plugins: [import('@tailwindcss/line-clamp')],
};
