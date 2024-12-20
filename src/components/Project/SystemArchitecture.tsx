// TODO:Section들은 SectionProps를 상속받아서 사용하도록 리팩토링 필요.
import { type Project } from '@/types/project.ts';
import { FcSettings } from 'react-icons/fc';

interface SystemArchitectureProps {
  project: Project | null;
}

function SystemArchitecture({ project }: SystemArchitectureProps) {
  return (
    <div>
      {project?.SystemArchitectureSection && (
        <section id="system-architecture">
          <div className="border-b pb-6 mb-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FcSettings className="mr-2" />
                시스템 아키텍처
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                {project?.SystemArchitectureSection.text.map((text) => <li key={text}>{text}</li>)}
              </ul>
              <div>
                {project?.SystemArchitectureSection.img.map((image) => (
                  <img key={image} src={image} alt="system-architecture" />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default SystemArchitecture;
