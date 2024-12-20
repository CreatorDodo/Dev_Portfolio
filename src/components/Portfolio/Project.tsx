import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import Badge from '@/components/common/Badge.tsx';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/common/Card.tsx';
import Button from '@/components/common/Button.tsx';
import CircleButton from '@/components/common/CircleButton.tsx';
import projects from '@/data/projects.ts';

function Project() {
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
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 9,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 9,
              },
            }}
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
                      className={`w-full h-48 rounded-t-lg ${
                        project.title === 'SmartDeal' ? 'object-contain bg-white' : 'object-cover'
                      }`}
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
                  {project.description !== '[미완]' && (
                    <CardFooter>
                      <Link to={`/project/${project.id}`}>
                        <Button variant="ghost" className="text-primary hover:text-primary/80">
                          자세히 보기
                          <FaChevronRight className="w-3 h-3 ml-1" />
                        </Button>
                      </Link>
                    </CardFooter>
                  )}
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
