import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { type Project } from '@/types/project.ts';
import projects from '@/data/projects.ts';
import {
  ProjectCover,
  SideBar,
  ProjectInfo,
  RelatedLinks,
  Screenshot,
  Background,
  IssuesBacklog,
  Database,
  SystemArchitecture,
  Skills,
  Convention,
  FeatureStatement,
  ApiStatement,
  MyFeature,
  Retrospective,
  Improvement,
} from '@/components/Project/index.ts';

function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [showLottie, setShowLottie] = useState(true);

  useEffect(() => {
    // 실제 프로젝트에서는 API 호출로 대체
    const currentProject = projects.find((p) => p.id === Number(id));
    setProject(currentProject || null);

    const timer = setTimeout(() => {
      setShowLottie(false);
    }, 1500);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, [id]);

  if (!project && !showLottie) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      {showLottie ? (
        <DotLottieReact
          src="/Lottie/project.lottie"
          loop
          autoplay
          speed={3}
          backgroundColor="#1D2951"
          className="overflow-hidden w-full h-screen"
        />
      ) : (
        <div className="relative">
          <ProjectCover project={project} />
          <div className="grid grid-cols-5">
            <div className="col-span-4 container mx-auto py-10 space-y-8">
              <ProjectInfo project={project} />
              <RelatedLinks project={project} />
              <Screenshot project={project} />
              <Background project={project} />
              <IssuesBacklog project={project} />
              <Database project={project} />
              <SystemArchitecture project={project} />
              <Skills project={project} />
              <Convention project={project} />
              <FeatureStatement project={project} />
              <ApiStatement project={project} />
              <MyFeature project={project} />
              <Retrospective project={project} />
              <Improvement project={project} />
            </div>
            <div className="col-span-1">
              <SideBar project={project} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectPage;
