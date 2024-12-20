import { type Project } from '@/types/project.ts';
import Badge from '@/components/common/Badge.tsx';
import { FcAbout } from 'react-icons/fc';

interface ProjectInfoProps {
  project: Project | null;
}

function ProjectInfo({ project }: ProjectInfoProps) {
  return (
    <section id="project-info">
      <div className="border-b pb-6 mb-6">
        <div className="mx-auto max-w-6xl">
          {/* Project Title and Tags */}
          <div className="space-y-5 mb-10">
            <h1 className="text-4xl font-bold">{project?.title}</h1>
          </div>
          {/* Project Info */}
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <FcAbout className="mr-2" />
            프로젝트 정보
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="font-semibold">기술스택</div>
              <div className="flex flex-wrap gap-1.5 overflow-x-auto">
                {project?.tags?.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="font-semibold">진행 기간</div>
              <div className="text-muted-foreground">{project?.duration}</div>
            </div>
            <div className="space-y-2">
              <div className="font-semibold">팀 구성</div>
              <div className="text-muted-foreground">{project?.team}</div>
            </div>
            <div className="space-y-2">
              <div className="font-semibold">프로젝트 소개</div>
              <div className="text-muted-foreground">{project?.description}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectInfo;
