import { useState } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
// import Link from 'next/link';

interface Project {
  name: string;
  period: string;
  description: string;
  achievements?: string[];
  techStack?: string[];
}

interface WorkExperienceProps {
  company: string;
  period: string;
  projects: Project[];
}

function WorkExperience({ company, period, projects }: WorkExperienceProps) {
  return (
    <div className="border-b pb-12">
      <h2 className="mb-2 text-2xl font-semibold text-gray-900">{company}</h2>
      <p className="mb-4 text-gray-600">
        {/* {role} | {period} */}
        {period}
      </p>

      {projects.map((project, index) => (
        <div key={project.name} className={index > 0 ? 'mt-8' : ''}>
          <h3 className="mb-2 text-xl font-semibold text-blue-600">{project.name}</h3>
          <p className="mb-2 text-gray-600">{project.period}</p>
          <p className="mb-4 text-gray-700">{project.description}</p>

          {project.achievements && (
            <div className="mb-4">
              <h4 className="mb-2 font-semibold text-gray-900">What did I do</h4>
              <ul className="list-inside list-disc text-gray-700">
                {project.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}

          {project.techStack && (
            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Tech Stack</h4>
              <p className="text-gray-700">{project.techStack.join(', ')}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

interface OtherExperienceProps {
  title: string;
  period: string;
  description: string;
  // link?: string;
  link: string;
}

function OtherExperience({ title, period, description, link }: OtherExperienceProps) {
  return (
    <div className="border-b pb-8">
      <h2 className="mb-2 text-2xl font-semibold text-gray-900">{title}</h2>
      <p className="mb-4 text-gray-600">
        {/* {role} | {period} */}
        {period}
      </p>
      <p className="mb-4 text-gray-700">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          Visit Website
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      )}
    </div>
  );
}

export default function ExperiencePage() {
  const [activeTab, setActiveTab] = useState('work');

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="mx-auto max-w-4xl">
        <a href="/" className="mb-8 inline-flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </a>

        <h1 className="mb-8 text-4xl font-bold text-gray-900">My Experience</h1>

        <div className="mb-8 border-b">
          <button
            type="button"
            onClick={() => setActiveTab('work')}
            className={`mr-4 pb-2 ${activeTab === 'work' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
          >
            Work Experience
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('other')}
            className={`pb-2 ${activeTab === 'other' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
          >
            Other Experiences
          </button>
        </div>

        {activeTab === 'work' && (
          <div className="space-y-12">
            <WorkExperience
              company="AWS 코리아"
              // role="Software Engineer"
              period="2016. 10 - 2018. 11"
              projects={[
                {
                  name: '인간 Enterprise',
                  period: '2017. 10 - 2018. 11',
                  description: 'Storybook와 연동되는 AWS Cloud의 릴리즈가 완료되어 여러 기업에 납품되었습니다.',
                  achievements: [
                    '프론트엔드 기본 기능 구현',
                    'MobX, MobX State Tree를 사용한 스토어 디자인',
                    'React기반 컴포넌트 계층 구조 디자인',
                    '스토리북을 이용한 컴포넌트 기반 개발 도입',
                    'Jest 기반의 테스트 작성',
                  ],
                  techStack: [
                    'TypeScript',
                    'React',
                    'MobX',
                    'styled-components',
                    'Storybook',
                    'Jest',
                    'React Router',
                    'GitLab',
                    'GitLab CI',
                    'Docker',
                  ],
                },
                {
                  name: 'ProtoPie Share Page',
                  period: '2017. 04 - 2018. 11',
                  description:
                    ' Studio에Share Page를  프로젝트였기 때문에 별도의 프론트엔드 라이브러리는 사용하지 않았습니다.',
                },
              ]}
            />

            {/* Add more WorkExperience components here for other roles */}
          </div>
        )}

        {activeTab === 'other' && (
          <div className="space-y-8">
            <OtherExperience
              title="AWS Korea WebTech"
              // role="Organizer"
              // role={role}
              link="https://aws.koreawebtech.org"
              period="2018. 08. - 현재"
              description="구글의 웹 기술 기반 개발자 커뮤니티인 무한루프입니다. 여러가지 행사를 주최하거나 돕고 있습니다."
            />

            <OtherExperience
              title="TypeScript Korea"
              // role="Organizer"
              // role={role}
              link="https://aws.koreawebtech.org"
              period="2017. 10. - 2018. 12."
              description="TypeScript의 사용자 커뮤니티인 TypeScript Korea의 오거나이저를 맡았습니다."
            />

            <OtherExperience
              title="Blog"
              // role="Author, Maintainer"
              // role={role}
              period="2016. 09. - 현재"
              description="dodo.dev운영하고 있습니다. 비정기적으로 제가 새롭게 배우게 된 내용 등을 정리하여 공유하고 있습니다."
              link="https://dodo.dev"
            />
          </div>
        )}
      </div>
    </div>
  );
}
