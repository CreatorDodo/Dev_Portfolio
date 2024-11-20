// TODO: Next.js Image 컴포넌트 사용시 이미지 경로 설정
// import Image from 'next/image';
import Badge from '../common/Badge.tsx';
import { Card, CardContent } from '../common/Card.tsx';

function Project() {
  const projects = [
    {
      id: 1,
      title: 'Portfolio Project or Side Project[미정]',
      description: '[미정]',
      image: '/dateLeaf.png?height=400&width=600',
      tags: ['React'],
    },
    {
      id: 2,
      title: 'TaskSprints 팀 프로젝트',
      description: '경매 플랫폼 서비스',
      image: '/taskSprints.png?height=400&width=600',
      tags: [
        'React',
        'TypeScript',
        'Tailwind',
        'Zustand',
        'Ant Design',
        'Vite',
        'Vitest',
        'Spring-Boot',
        'JPA',
        'JUnit',
      ],
    },
    {
      id: 3,
      title: 'OSSCA[삼성전자 O-RAN]',
      description: '오픈소스 컨트리뷰션 아카데미에서 삼성전자 O-RAN 프로젝트에 참여하였습니다.',
      image: '/o-RAN.png?height=400&width=600',
      tags: ['React', 'Javascript', 'Go', 'Python', 'Go', 'Gerrit', 'Jira'],
    },
    {
      id: 4,
      title: 'DateLeaf',
      description: '다수의 사람들과의 모임 시간을 보다 편리하게 계획하기 위한 일정 관리 프로그램',
      image: '/dateLeaf.png?height=400&width=600',
      tags: ['React', 'TypeScript', 'Supabase', 'React-Query', 'Tailwind', 'Zustand', 'daisyUI'],
    },
  ];

  return (
    <section id="project" className="w-full py-12 border-b">
      <div className="container px-10">
        <h2 className="text-4xl font-bold mb-8">
          Project<span className="text-blue-600">.</span>
        </h2>

        <div className="space-y-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="aspect-video relative">
                  <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
                </div>
                <CardContent>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-md bg-gray-100" />
                    <h3 className="font-medium">{project.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
