import { type Project } from '@/types/project.ts';

interface ProjectCoverProps {
  project: Project | null;
}

function ProjectCover({ project }: ProjectCoverProps) {
  if (!project) {
    return null;
  }

  return (
    <div className="relative w-full h-72 rounded-lg overflow-hidden">
      <img
        src={project.coverImage}
        alt={project.title}
        className={`object-contain w-full h-full ${project.className}`}
      />
    </div>
  );
}

export default ProjectCover;
