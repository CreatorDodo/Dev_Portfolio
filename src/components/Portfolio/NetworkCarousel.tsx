import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import Button from '@/components/common/Button.tsx';

interface ConferenceSlide {
  image: string;
  title: string;
  date: string;
  gradient: string;
}

const slides: ConferenceSlide[] = [
  {
    image: '/NetworkImg/IMG (1).JPG?height=400&width=600',
    title: 'AWS Summit',
    date: '2024년 5월',
    gradient: 'from-blue-400 to-indigo-600',
  },
  {
    image: '/NetworkImg/IMG (2).JPG?height=400&width=600',
    title: 'AWS Summit',
    date: '2024년 5월',
    gradient: 'from-purple-400 to-pink-600',
  },
  {
    image: '/NetworkImg/IMG (3).JPG?height=400&width=600',
    title: 'AWS Summit',
    date: '2024년 5월',
    gradient: 'from-green-400 to-teal-600',
  },
  {
    image: '/NetworkImg/IMG (4).JPG?height=400&width=600',
    title: 'AWS Summit',
    date: '2024년 5월',
    gradient: 'from-yellow-400 to-orange-600',
  },
  {
    image: '/NetworkImg/IMG (5).JPG?height=400&width=600',
    title: 'AWS Summit',
    date: '2024년 5월',
    gradient: 'from-red-400 to-pink-600',
  },
  {
    image: '/NetworkImg/IMG (6).JPG?height=400&width=600',
    title: 'AI EduConf',
    date: '2024년 11월',
    gradient: 'from-blue-400 to-indigo-600',
  },
  {
    image: '/NetworkImg/IMG (7).JPG?height=400&width=600',
    title: 'OSSCA',
    date: '2024년 11월',
    gradient: 'from-purple-400 to-pink-600',
  },
  {
    image: '/NetworkImg/IMG (8).JPG?height=400&width=600',
    title: 'OSSCA',
    date: '2024년 11월',
    gradient: 'from-green-400 to-teal-600',
  },
  {
    image: '/NetworkImg/IMG (9).JPG?height=400&width=600',
    title: 'HangHae99',
    date: '2024년 5월',
    gradient: 'from-yellow-400 to-orange-600',
  },
  {
    image: '/NetworkImg/IMG (10).JPG?height=400&width=600',
    title: 'AWS Summit',
    date: '2024년 5월',
    gradient: 'from-red-400 to-pink-600',
  },
  {
    image: '/NetworkImg/IMG (11).JPG?height=400&width=600',
    title: 'AWS Summit',
    date: '2024년 5월',
    gradient: 'from-blue-400 to-indigo-600',
  },
  {
    image: '/NetworkImg/IMG (12).JPG?height=400&width=600',
    title: 'AWS Summit',
    date: '2024년 5월',
    gradient: 'from-purple-400 to-pink-600',
  },
  {
    image: '/NetworkImg/IMG (13).JPG?height=400&width=600',
    title: 'AWS Summit',
    date: '2024년 5월',
    gradient: 'from-yellow-400 to-orange-600',
  },
  {
    image: '/NetworkImg/IMG (14).JPG?height=400&width=600',
    title: 'AWS Summit',
    date: '2024년 5월',
    gradient: 'from-red-400 to-pink-600',
  },
  {
    image: '/NetworkImg/IMG (15).JPG?height=400&width=600',
    title: 'AWS Summit',
    date: '2024년 5월',
    gradient: 'from-green-400 to-teal-600',
  },
  {
    image: '/NetworkImg/IMG (16).JPG?height=400&width=600',
    title: 'OSSCA',
    date: '2024년 11월',
    gradient: 'from-green-400 to-teal-600',
  },
  {
    image: '/NetworkImg/IMG (17).JPG?height=400&width=600',
    title: 'OSSCA',
    date: '2024년 11월',
    gradient: 'from-green-400 to-teal-600',
  },
  {
    image: '/NetworkImg/IMG (18).JPG?height=400&width=600',
    title: 'OSSCA',
    date: '2024년 11월',
    gradient: 'from-yellow-400 to-orange-600',
  },
  {
    image: '/NetworkImg/IMG (19).JPG?height=400&width=600',
    title: 'DevLab',
    date: '2024년 8월',
    gradient: 'from-red-400 to-pink-600',
  },
  {
    image: '/NetworkImg/IMG (20).JPG?height=400&width=600',
    title: 'DevLab',
    date: '2024년 8월',
    gradient: 'from-green-400 to-teal-600',
  },
  {
    image: '/NetworkImg/IMG (21).JPG?height=400&width=600',
    title: 'DevLab',
    date: '2024년 8월',
    gradient: 'from-yellow-400 to-orange-600',
  },
  {
    image: '/NetworkImg/IMG (22).JPG?height=400&width=600',
    title: 'DevLab',
    date: '2024년 8월',
    gradient: 'from-red-400 to-pink-600',
  },
  {
    image: '/NetworkImg/IMG (23).JPG?height=400&width=600',
    title: 'AUSG Conf',
    date: '2024년 9월',
    gradient: 'from-green-400 to-teal-600',
  },
  {
    image: '/NetworkImg/IMG (24).JPG?height=400&width=600',
    title: 'OSSCA',
    date: '2024년 11월',
    gradient: 'from-yellow-400 to-orange-600',
  },
  {
    image: '/NetworkImg/IMG (25).JPG?height=400&width=600',
    title: 'OSSCA',
    date: '2024년 11월',
    gradient: 'from-red-400 to-pink-600',
  },
  {
    image: '/NetworkImg/IMG (26).JPG?height=400&width=600',
    title: 'TEO Conf',
    date: '2024년 11월',
    gradient: 'from-yellow-400 to-orange-600',
  },
  {
    image: '/NetworkImg/IMG (27).JPG?height=400&width=600',
    title: 'TEO Conf',
    date: '2024년 11월',
    gradient: 'from-red-400 to-pink-600',
  },
];

function NetworkCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      skipSnaps: false,
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 2 },
        '(min-width: 1024px)': { slidesToScroll: 3 },
      },
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return undefined;

    onSelect();
    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="network" className="w-full py-12 border-b">
      <div className="container px-4 sm:px-6 md:px-10">
        <h2 className="mb-8 sm:mb-12 text-3xl sm:text-4xl font-bold text-gray-900 flex flex-wrap items-center">
          Network
          <span className="text-blue-600">.</span>
        </h2>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {slides.map((slide) => (
              <div key={slide.image} className="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                <div
                  className={`h-[300px] rounded-2xl bg-gradient-to-r ${slide.gradient} p-4 flex flex-col overflow-hidden`}
                >
                  <div className="w-full h-48 relative rounded-xl overflow-hidden mb-4">
                    <img src={slide.image} alt={slide.title} className="object-cover w-full h-full" />
                  </div>
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-1">{slide.title}</h3>
                    <p className="text-sm opacity-80">{slide.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background/90"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background/90"
            onClick={scrollNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex justify-center mt-4">
          {slides.map((slide, index) => (
            <Button
              key={slide.image}
              variant="ghost"
              size="sm"
              className={`w-3 h-3 rounded-full mx-1 p-0 ${index === selectedIndex ? 'bg-primary' : 'bg-muted'}`}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NetworkCarousel;
