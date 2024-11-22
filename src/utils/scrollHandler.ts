import { scroller } from 'react-scroll';

interface ScrollHandlerProps {
  sectionId: string;
  isProfile?: boolean;
}

const scrollHandler =
  ({ sectionId, isProfile = false }: ScrollHandlerProps) =>
  (e: React.MouseEvent) => {
    e.preventDefault();

    if (isProfile) {
      scroller.scrollTo('top', {
        duration: 700,
        smooth: true,
      });
      return;
    }

    scroller.scrollTo(sectionId, {
      duration: 700,
      smooth: true,
      offset: -50, // 헤더 높이만큼 오프셋
    });
  };

export default scrollHandler;
