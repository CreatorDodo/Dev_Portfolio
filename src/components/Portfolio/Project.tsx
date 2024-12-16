import 'swiper/css';
import 'swiper/css/navigation';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import Badge from '@/components/common/Badge.tsx';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/common/Card.tsx';
import Button from '@/components/common/Button.tsx';
import CircleButton from '@/components/common/CircleButton.tsx';

function Project() {
  const projects = [
    {
      id: 1,
      title: 'Side Project',
      description: '[미완]',
      image: '/taskSprints.png?height=400&width=600',
      tags: ['React'],
    },
    // {
    //   id: 2,
    //   title: 'Portfolio Project',
    //   description: '[미완]',
    //   image: '/dateLeaf.png?height=400&width=600',
    //   tags: ['React'],
    // },
    {
      id: 3,
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
      id: 4,
      title: 'OSSCA[삼성전자 O-RAN]',
      description: '오픈소스 컨트리뷰션 아카데미에서 삼성전자 O-RAN 프로젝트에 참여하였습니다.',
      image: '/o-RAN.png?height=400&width=600',
      tags: ['React', 'Javascript', 'Go', 'Python', 'Go', 'Gerrit', 'Jira'],
    },
    {
      id: 5,
      title: 'DateLeaf',
      description: '다수의 사람들과의 모임 시간을 보다 편리하게 계획하기 위한 일정 관리 프로그램',
      image: '/dateLeaf.png?height=400&width=600',
      tags: ['React', 'TypeScript', 'Supabase', 'React-Query', 'Tailwind', 'Zustand', 'daisyUI'],
    },
  ];

  return (
    <section id="skill" className="w-full py-12 border-b">
      <div className="container px-10 mx-auto relative">
        <h2 className="mb-12 text-4xl font-bold text-gray-900 flex items-center">
          Projects
          <span className="text-blue-600">.</span>
        </h2>
        <div className="mx-auto relative px-16">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={9}
            slidesPerView={3}
            navigation={{
              enabled: true,
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={2000}
            loop
            className="w-full"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="flex-shrink-0 w-72">
                <Card className="flex flex-col">
                  <CardHeader>
                    <img
                      src={project.image}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardTitle className="mb-2 text-base">{project.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mb-4 overflow-hidden text-ellipsis line-clamp-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 overflow-x-auto">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && <Badge variant="secondary">+{project.tags.length - 3}</Badge>}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="text-primary hover:text-primary/80">
                      자세히 보기
                      <FaChevronRight className="w-3 h-3 ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          <CircleButton
            variant="outline"
            size="md"
            className="swiper-button-prev absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md"
          >
            <FaChevronLeft size={15} />
          </CircleButton>
          <CircleButton
            variant="outline"
            size="md"
            className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md"
          >
            <FaChevronRight size={15} />
          </CircleButton>
        </div>
      </div>
    </section>
  );
}

export default Project;
