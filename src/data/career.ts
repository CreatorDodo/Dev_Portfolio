import { Career } from '@/types/career.ts';

const careers: Career[] = [
  {
    id: 1,
    company: '트립빌더',
    position: '프론트엔드 개발자',
    duration: '2024.XX - 2025.XX',
    description: 'AI 기반 여행 플랫폼 서비스 개발',
    achievements: [
      'AI 채팅 기반 여행 플래너 서비스 개발',
      'Next.js 15와 React 18을 활용한 여행 AI 채팅 플랫폼 구축',
      '실시간 채팅 폴링 시스템 및 타이핑 애니메이션 구현',
      '여행지 추천, 항공권 예약, E-sim 서비스 통합 UI/UX 개발',
      '지도 기반 여행 정보 시각화 시스템 구축',
      'Google Maps API를 활용한 인터랙티브 지도 컴포넌트 개발',
      '마커 클러스터링 및 호버카드, 장소 상세 정보 드로어 구현',
      '반응형 지도 전체화면 모드 및 모바일 최적화 UI 개발',
      '다국어 지원 및 사용자 경험 최적화',
      'Next.js i18n을 활용한 다국어 처리 시스템 구축 (한국어, 영어 등)',
      'SSR 최적화를 통한 웹 성능 개선 및 SEO 메타데이터 구조화',
      '결제 및 예약 시스템 UI 개발',
      '위시리스트, 여행 플래너 등 사용자 맞춤 기능 개발',
      '실시간 데이터 동기화 및 상태 관리 (Zustand 활용)',
      '프로젝트 아키텍처 및 개발 환경 구축',
      'FSD(Feature-Sliced Design) 아키텍처로 프로젝트 구조 마이그레이션',
      'Husky, ESLint, Prettier를 활용한 코드 품질 관리 시스템 구축',
      'Google OAuth 인증 시스템 및 사용자 관리 구현',
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Google Maps API',
      'Zustand',
      'i18n',
      'Husky',
      'ESLint',
      'Prettier',
      'Google OAuth',
    ],
  },
];

export default careers;
