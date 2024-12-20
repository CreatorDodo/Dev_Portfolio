import { Project } from '@/types/project.ts';

const projects: Project[] = [
  {
    id: 1,

    image: '/ProjectImg/smartDeal.png?height=400&width=600',

    coverImage: '/ProjectImg/smartDeal.png',
    className: '',
    title: 'SmartDeal',

    tags: ['React', 'TypeScript', 'Tailwind', 'Zustand', 'Ant Design', 'Vite', 'Vitest', 'Spring-Boot', 'JPA', 'JUnit'],
    duration: '2024.08 - 2024.12 (진행중)',
    team: 'Frontend 2명, Backend 4명',
    description: '경매를 통해 보다 합리적인 가격으로 상품을 구매할 수 있는 혁신적인 경매 플랫폼 서비스입니다.',

    RelatedLinksSection: {
      gitHub: 'https://github.com/TaskSprints/auction-front',
      backLog: 'https://github.com/orgs/TaskSprints/projects/1',
      url: 'https://clever-swan-acedb5.netlify.app/',
    },

    ScreenshotSection: {
      img: [
        '/SmartDeal/screenShot1.png',
        '/SmartDeal/screenShot2.png',
        '/SmartDeal/screenShot3.png',
        '/SmartDeal/screenShot4.png',
        '/SmartDeal/screenShot5.png',
        '/SmartDeal/screenShot6.png',
      ],
    },

    BackgroundSection: {
      text: [
        'Smart Deal은 인프런 커뮤니티에 게시된 팀원 모집 공고를 통해 중간에 합류한 경매 서비스 플랫폼 프로젝트입니다.',
        '경매를 통한 합리적 가격 형성 및 다양한 상품 경험을 제공하기 위해 기획되었습니다.',
        '개발자들이 바쁜 일정 속에서도 협업하여 조금씩 개선하고 있으며,',
        '지속적인 업데이트를 통해 보다 나은 쇼핑 경험을 제공하고자 합니다.',
      ],
    },

    IssuesBacklogSection: {
      text: ['GitHub Issue를 통한 이슈 관리를 진행합니다.', 'GitHub Project를 통한 백로그 관리를 진행합니다.'],
      url: [
        'https://github.com/TaskSprints/auction-front/issues',
        'https://github.com/orgs/TaskSprints/projects/1/views/11',
      ],
      img: ['/SmartDeal/issuesBacklog.png'],
    },

    DatabaseSection: {
      text: [
        'H2 인메모리 데이터베이스를 통해 개발 환경을 구축하였으며,',
        '해당 프로젝트에서는 영구적 저장소를 사용하지 않으므로 별도의 정교한 DB 설계 문서는 작성하지 않았습니다.',
      ],
    },

    SkillsSection: {
      img: ['/SmartDeal/skills.png'],
    },

    ConventionSection: {
      img: ['/SmartDeal/convention1.png', '/SmartDeal/convention2.png', '/SmartDeal/convention3.png'],
    },

    MyFeatureSection: {
      text: [
        '성능 및 문제 해결 경험: Webpack에서 Vite로 전환하여 빌드 속도를 단축',
        '모듈 번들링 및 종속성 관리 최적화를 통해 전반적인 개발 생산성 향상',
        '시스템 아키텍처 개선: Feature-Sliced Design(FSD) 도입으로 코드 모듈화 및 가독성 개선, 재사용성 증대와 유지보수 시간 단축 실현',
        '개발 주기 내 병목 현상을 제거하고 유지보수성을 개선하여 팀 전체 생산성 향상에 기여',
        'Tailwind를 활용한 커스텀 폰트 설정 및 글로벌 스타일 개선',
        '메인 페이지, 입찰 페이지, 카테고리 페이지 UI 리뉴얼',
      ],
      img: [
        '/SmartDeal/myFeature1.png',
        '/SmartDeal/myFeature2.png',
        '/SmartDeal/myFeature3.png',
        '/SmartDeal/myFeature4.png',
      ],
    },
  },
  {
    id: 2,

    image: '/ProjectImg/o-RAN.png?height=400&width=600',

    coverImage: '/ProjectImg/o-RAN.png?height=400&width=600',
    className: 'bg-violet-950',
    title: 'OSSCA[삼성전자 O-RAN]',

    tags: ['React', 'Javascript', 'Go', 'Python', 'Go', 'Gerrit', 'Jira'],
    duration: '2024.07 - 2024.10',
    team: '멘토 2명, 멘티 14명',
    description: '오픈소스 컨트리뷰션 아카데미에서 삼성전자 O-RAN 대시보드 고도화(FrontEnd) 프로젝트에 참여하였습니다.',

    RelatedLinksSection: {
      gitHub: 'https://github.com/o-ran-sc/portal-aiml-dashboard',
      jira: 'https://lf-o-ran-sc.atlassian.net/projects/AIMLFW/issues',
      gerrit: 'https://gerrit.o-ran-sc.org/r/q/owner:difbfl4750%2540gmail.com',
    },

    ScreenshotSection: {
      img: [
        '/O-RAN/screenShot1.png',
        '/O-RAN/screenShot2.png',
        '/O-RAN/screenShot3.png',
        '/O-RAN/screenShot4.png',
        '/O-RAN/screenShot5.png',
        '/O-RAN/screenShot6.png',
        '/O-RAN/screenShot7.png',
      ],
    },

    BackgroundSection: {
      text: [
        '삼성전자 O-RAN 대시보드 고도화 프로젝트에 참여하였습니다.',
        '처음에는 오픈소스 기여에 관심이 있어 OSSCA(오픈소스 컨트리뷰션 아카데미)에 지원하였고, 이를 통해 대시보드 UX/UI 개선 작업에 참여하게 되었습니다.',
        '기존에는 주로 백엔드 업무를 담당했으나, 프론트엔드 분야로 직무 전환을 시도하면서 자연스럽게 사용자 인터페이스 개선에 참여하게 되었습니다.',
        '프론트엔드 개발은 React를 활용하여 진행하였습니다.',
        '이슈 관리 및 추적은 Jira를 이용하였습니다.',
        '코드 리뷰는 Gerrit을 통해 수행하였습니다.',
      ],
    },

    IssuesBacklogSection: {
      text: ['이슈 관리 및 추적은 Jira를 활용하였습니다.', '코드 리뷰는 Gerrit을 통해 수행하였습니다.'],
      url: [
        'https://lf-o-ran-sc.atlassian.net/projects/AIMLFW/issues',
        'https://gerrit.o-ran-sc.org/r/q/owner:difbfl4750%2540gmail.com',
      ],
      img: ['/O-RAN/issuesBacklog1.png', '/O-RAN/issuesBacklog2.png'],
    },

    ConventionSection: {
      img: ['/O-RAN/convention1.png'],
    },

    MyFeatureSection: {
      text: [
        '네비게이션바 UX/UI 개선',
        '페이지 단위로 나뉘어 있던 대시보드 구성을 기능 중심의 Dropdown 방식으로 재구성',
        '머신러닝 데이터 생성과 조회로 분리되어 있던 페이지를 통합',
        '웹 대시보드의 Node.js 버전을 14에서 22로 업데이트',
      ],
      img: ['/O-RAN/myFeature1.png', '/O-RAN/myFeature2.png'],
    },

    RetrospectiveSection: {
      img: ['/O-RAN/retrospective1.png', '/O-RAN/retrospective2.png'],
    },
  },
  {
    id: 3,

    image: '/ProjectImg/dateLeaf.png?height=400&width=600',

    coverImage: '/CoverImg/dateLeaf.png?height=400&width=600',
    className: 'bg-green-100',
    title: 'DateLeaf',

    tags: ['React', 'TypeScript', 'Supabase', 'React-Query', 'Tailwind', 'Zustand', 'daisyUI'],
    duration: '2024.04 - 2024.05',
    team: 'Frontend 5명',
    description: '여러 사람들의 일정을 조율하여 최적의 모임 시간을 찾아주는 서비스입니다.',

    RelatedLinksSection: {
      gitHub: 'https://github.com/imaginer-dev/DateLeaf',
      backLog: 'https://github.com/orgs/imaginer-dev/projects/1',
      url: 'https://www.date-leaf.com/login',
      figma:
        'https://www.figma.com/design/Z012B8PyNZhPqy5EVPzn6u/DateLeaf-%EB%94%94%EC%9E%90%EC%9D%B8-(Daisy-UI%2C-Tailwind)?node-id=10-9&t=K9i537o6Vfk9P7IB-1',
    },

    ScreenshotSection: {
      url: 'https://drive.google.com/file/d/1NtKXwRjNBQ3Z6i9x5y9D8zUrVlDjw17j/view',
      img: [
        '/DateLeaf/screenShot1.png',
        '/DateLeaf/screenShot2.png',
        '/DateLeaf/screenShot3.png',
        '/DateLeaf/screenShot4.png',
        '/DateLeaf/screenShot5.png',
        '/DateLeaf/screenShot6.png',
      ],
    },

    BackgroundSection: {
      img: ['/DateLeaf/background2.png'],
    },

    IssuesBacklogSection: {
      text: [
        'GitHub Issue를 사용하여 이슈 관리를 진행하였습니다.',
        'GitHub Project를 사용하여 백로그 관리를 진행하였습니다.',
      ],
      url: ['https://github.com/imaginer-dev/DateLeaf/issues', 'https://github.com/orgs/imaginer-dev/projects/1'],
      img: ['/DateLeaf/issuesBacklog.png'],
    },

    DatabaseSection: {
      img: ['/DateLeaf/database.png'],
    },

    SkillsSection: {
      img: ['/DateLeaf/skills.png'],
    },

    ConventionSection: {
      img: [
        '/DateLeaf/convention2.png',
        '/DateLeaf/convention3.png',
        '/DateLeaf/convention4.png',
        '/DateLeaf/convention5.png',
        '/DateLeaf/convention1.png',
      ],
    },

    FeatureStatementSection: {
      img: ['/DateLeaf/featureStatement1.png', '/DateLeaf/featureStatement2.png'],
    },

    MyFeatureSection: {
      text: [
        '사이드바(SideBar) UI 컴포넌트 개발 및 반응형 개선',
        '푸터(Footer) UI 컴포넌트 개발',
        '회원가입 페이지 개발 및 성능 개선',
      ],
      img: ['/DateLeaf/myFeature2.png', '/DateLeaf/myFeature1.png'],
    },

    RetrospectiveSection: {
      img: ['/DateLeaf/retrospective.png'],
    },
  },
  {
    id: 4,
    title: 'TodoFlow',
    description: '[미완]',
    image: '/ProjectImg/todoFlow.png?height=400&width=600',
    coverImage: '',
    className: '',
    tags: ['React'],
    duration: '2024.01 - 2024.02',
    team: '',

    RelatedLinksSection: {
      gitHub: 'https://github.com/imaginer-dev/DateLeaf',
      backLog: 'https://github.com/orgs/imaginer-dev/projects/1',
      url: 'https://www.date-leaf.com/login',
      figma:
        'https://www.figma.com/design/Z012B8PyNZhPqy5EVPzn6u/DateLeaf-%EB%94%94%EC%9E%90%EC%9D%B8-(Daisy-UI%2C-Tailwind)?node-id=10-9&t=K9i537o6Vfk9P7IB-1',
    },

    ScreenshotSection: {
      url: 'https://drive.google.com/file/d/1NtKXwRjNBQ3Z6i9x5y9D8zUrVlDjw17j/view',
      img: [
        '/DateLeaf/screenshot1.png',
        '/DateLeaf/screenshot2.png',
        '/DateLeaf/screenshot3.png',
        '/DateLeaf/screenshot4.png',
        '/DateLeaf/screenshot5.png',
        '/DateLeaf/screenshot6.png',
      ],
    },

    BackgroundSection: {
      img: ['/DateLeaf/background1.png, /DateLeaf/background2.png'],
    },

    IssuesBacklogSection: {
      text: ['GitHub Issue를 통한 이슈 관리를 진행합니다.', 'GitHub Project를 통한 백로그 관리를 진행합니다.'],
      url: ['https://github.com/imaginer-dev/DateLeaf/issues', 'https://github.com/orgs/imaginer-dev/projects/1'],
      img: ['/DateLeaf/issuesBacklog.png'],
    },

    DatabaseSection: {
      img: ['/DateLeaf/database.png'],
    },

    SkillsSection: {
      img: ['/DateLeaf/skills.png'],
    },

    ConventionSection: {
      img: [
        '/DateLeaf/convention1.png',
        '/DateLeaf/convention2.png',
        '/DateLeaf/convention3.png',
        '/DateLeaf/convention4.png',
        '/DateLeaf/convention5.png',
      ],
    },

    FeatureStatementSection: {
      img: ['/DateLeaf/featureStatement1.png', '/DateLeaf/featureStatement2.png'],
    },

    MyFeatureSection: {
      text: [
        '사이드바(SideBar) UI 컴포넌트 개발 및 반응형 개선',
        '푸터(Footer) UI 컴포넌트 개발',
        '회원가입 페이지 개발 및 성능 개선',
      ],
      img: ['/DateLeaf/myFeature1.png', '/DateLeaf/myFeature2.png'],
    },

    RetrospectiveSection: {
      img: ['/DateLeaf/retrospective.png'],
    },
  },
];

export default projects;
