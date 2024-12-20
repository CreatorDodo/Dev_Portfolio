import {
  FcAbout,
  FcLink,
  FcTodoList,
  FcCompactCamera,
  FcIdea,
  FcAutomatic,
  FcSettings,
  FcAddDatabase,
  FcRules,
  FcDocument,
  FcViewDetails,
  FcVoicePresentation,
  FcCollaboration,
  FcRating,
} from 'react-icons/fc';
import { type Project } from '@/types/project.ts';
import NavItem from './NavItem.tsx';

interface SideBarProps {
  project: Project | null;
}

function SideBar({ project }: SideBarProps) {
  return (
    <div className="w-[350px] border-l min-h-screen z-40 sticky top-0 px-3 overflow-y-auto">
      <div className="px-7 space-y-1 h-full py-10">
        <h1 className="text-2xl font-bold mb-4">목차</h1>
        <NavItem icon={FcAbout} text="프로젝트 정보" to="project-info" />
        <NavItem icon={FcLink} text="관련 링크" to="related-links" />
        <NavItem icon={FcCompactCamera} text="스크린샷" to="screenshot" />
        {/* 4. 오픈소스 기여 >> 성장을 위해서 경험을 했다, 결과보다는 하게 된 목적. */}
        <NavItem icon={FcIdea} text="프로젝트 배경 & 기획 의도" to="background" />
        <NavItem icon={FcTodoList} text="Issues & Backlog" to="issues-backlog" />
        {project?.DatabaseSection && <NavItem icon={FcAddDatabase} text="DB 설계도" to="database" />}
        {project?.SystemArchitectureSection && (
          <NavItem icon={FcSettings} text="시스템 아키텍처" to="system-architecture" />
        )}
        {project?.SkillsSection && <NavItem icon={FcAutomatic} text="사용 기술 및 라이브러리" to="skills" />}
        <NavItem icon={FcRules} text="컨벤션 정의서" to="convention" />
        {project?.FeatureStatementSection && (
          <NavItem icon={FcDocument} text="요구사항 & 기능 명세서" to="feature-statement" />
        )}
        {project?.ApiStatementSection && <NavItem icon={FcViewDetails} text="API 명세서" to="api-statement" />}
        {/* 2. 시연 영상, gif 등 개선 사항에 대한 수치 결과. */}
        <NavItem icon={FcVoicePresentation} text="My Feature" to="my-feature" />
        {/* 3. 회고(잘한 점, 아쉬운 점 및 개선 방향) */}
        {project?.RetrospectiveSection && <NavItem icon={FcCollaboration} text="회고" to="retrospective" />}
        {project?.ImprovementSection && <NavItem icon={FcRating} text="배운 점 및 개선 방향" to="Improvement" />}
      </div>
    </div>
  );
}

export default SideBar;
