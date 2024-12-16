import { useEffect, useState } from 'react';
import PortfolioPageLayout from '@/layouts/PortfolioPageLayout.tsx';
import Header from '@/components/common/Header.tsx';
import Contact from '@/components/Portfolio/Contact.tsx';
import Profile from '@/components/Portfolio/Profile.tsx';
import WorkExperience from '@/components/Portfolio/WorkExperience.tsx';
import OtherExperience from '@/components/Portfolio/OtherExperience.tsx';
import Project from '@/components/Portfolio/Project.tsx';
import Skill from '@/components/Portfolio/Skill.tsx';
import { FadeInContainer, FadeInSection } from '@/components/common/FadeInSection.tsx';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function PortfolioPage() {
  const [showLottie, setShowLottie] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLottie(false);
    }, 3000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  return (
    <div>
      {showLottie ? (
        <DotLottieReact
          src="/Lottie/portfolio.lottie"
          loop
          autoplay
          speed={2}
          className="overflow-hidden w-full h-screen"
        />
      ) : (
        <div>
          <Header />
          <PortfolioPageLayout>
            <FadeInContainer>
              <FadeInSection>
                <Profile />
              </FadeInSection>

              <FadeInSection>
                <WorkExperience />
              </FadeInSection>

              <FadeInSection>
                <OtherExperience />
              </FadeInSection>

              <FadeInSection>
                <Project />
              </FadeInSection>

              <FadeInSection>
                <Skill />
              </FadeInSection>

              <FadeInSection>
                <Contact />
              </FadeInSection>
            </FadeInContainer>
          </PortfolioPageLayout>
        </div>
      )}
    </div>
  );
}

export default PortfolioPage;
