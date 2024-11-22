// import Image from 'next/image';
// import Link from 'next/link';
import PortfolioPageLayout from '@/layouts/PortfolioPageLayout.tsx';
import Header from '@/components/common/Header.tsx';
import Contact from '@/components/Portfolio/Contact.tsx';
import Profile from '@/components/Portfolio/Profile.tsx';
import WorkExperience from '@/components/Portfolio/WorkExperience.tsx';
import OtherExperience from '@/components/Portfolio/OtherExperience.tsx';
import Project from '@/components/Portfolio/Project.tsx';
import Skill from '@/components/Portfolio/Skill.tsx';
import { FadeInContainer, FadeInSection } from '@/components/common/FadeInSection.tsx';

function PortfolioPage() {
  return (
    <>
      <Header />
      <PortfolioPageLayout>
        <FadeInContainer>
          <FadeInSection immediate>
            <Profile />
          </FadeInSection>

          <FadeInSection immediate>
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
    </>
  );
}

export default PortfolioPage;
