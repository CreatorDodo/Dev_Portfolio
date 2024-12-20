// TODO:Section들은 SectionProps를 상속받아서 사용하도록 리팩토링 필요.
import { type Project } from '@/types/project.ts';
import { FcLink } from 'react-icons/fc';

interface RelatedLinksProps {
  project: Project | null;
}

function RelatedLinks({ project }: RelatedLinksProps) {
  return (
    <section id="related-links">
      <div className="border-b pb-6 mb-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <FcLink className="mr-2" />
            관련 링크
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {project?.RelatedLinksSection.gitHub && (
              <li>
                <a
                  href={project.RelatedLinksSection.gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold hover:text-blue-500 underline"
                >
                  GitHub
                </a>
              </li>
            )}
            {project?.RelatedLinksSection.backLog && (
              <li>
                <a
                  href={project.RelatedLinksSection.backLog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold hover:text-blue-500 underline"
                >
                  BackLog
                </a>
              </li>
            )}
            {project?.RelatedLinksSection.url && (
              <li>
                <a
                  href={project.RelatedLinksSection.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold hover:text-blue-500 underline"
                >
                  Website
                </a>
              </li>
            )}
            {project?.RelatedLinksSection.jira && (
              <li>
                <a
                  href={project.RelatedLinksSection.jira}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold hover:text-blue-500 underline"
                >
                  Jira
                </a>
              </li>
            )}
            {project?.RelatedLinksSection.gerrit && (
              <li>
                <a
                  href={project.RelatedLinksSection.gerrit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold hover:text-blue-500 underline"
                >
                  Gerrit
                </a>
              </li>
            )}
            {project?.RelatedLinksSection.figma && (
              <li>
                <a
                  href={project.RelatedLinksSection.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold hover:text-blue-500 underline"
                >
                  Figma
                </a>
              </li>
            )}
          </ul>
          {/* <div>{project?.RelatedLinksSection.img.map((image) => <img src={image} alt="related-links" />)}</div> */}
        </div>
      </div>
    </section>
  );
}

export default RelatedLinks;
