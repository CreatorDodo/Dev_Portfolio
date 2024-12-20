// TODO:Section들은 SectionProps를 상속받아서 사용하도록 리팩토링 필요.
import { type Project } from '@/types/project.ts';
import { FcVoicePresentation } from 'react-icons/fc';
import { useState } from 'react';
import ImageModal from './ImageModal.tsx';

interface MyFeatureProps {
  project: Project | null;
}

function MyFeature({ project }: MyFeatureProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      {project?.MyFeatureSection && (
        <section id="my-feature">
          <div className="border-b pb-6 mb-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FcVoicePresentation className="mr-2" />
                My Feature
              </h2>
              <ul className="list-disc pl-6 space-y-2 pb-6">
                {project?.MyFeatureSection.text?.map((text) => (
                  <li key={text} className="text-base font-semibold">
                    {text}
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-4">
                {project?.MyFeatureSection.img.map((image) => (
                  <button
                    type="button"
                    key={image}
                    onClick={() => handleImageClick(image)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleImageClick(image);
                      }
                    }}
                    className="w-full rounded-lg cursor-pointer focus:outline-none"
                  >
                    <img src={image} alt="my-feature-images" />
                  </button>
                ))}
              </div>
              <ImageModal isOpen={isModalOpen} image={selectedImage} onClose={closeModal} />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default MyFeature;
