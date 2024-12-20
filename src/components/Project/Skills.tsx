// TODO:Section들은 SectionProps를 상속받아서 사용하도록 리팩토링 필요.
import { type Project } from '@/types/project.ts';
import { FcAutomatic } from 'react-icons/fc';

interface SkillsProps {
  project: Project | null;
}

function Skills({ project }: SkillsProps) {
  return (
    <div>
      {project?.SkillsSection && (
        <section id="skills">
          <div className="border-b pb-6 mb-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FcAutomatic className="mr-2" />
                사용 기술 및 라이브러리
              </h2>
              {/* <ul className="list-disc pl-6 space-y-2">
            {project?.SkillsSection.text.map((text) => <li key={text}>{text}</li>)}
          </ul> */}
              <div>{project?.SkillsSection.img.map((image) => <img key={image} src={image} alt="skills" />)}</div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Skills;
