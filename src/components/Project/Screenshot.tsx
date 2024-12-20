// TODO:Section들은 SectionProps를 상속받아서 사용하도록 리팩토링 필요.
import { type Project } from '@/types/project.ts';
import { FcCompactCamera } from 'react-icons/fc';
import { useState } from 'react';
import ImageModal from './ImageModal.tsx';

interface ScreenshotProps {
  project: Project | null;
}

function Screenshot({ project }: ScreenshotProps) {
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
    <section id="screenshot">
      <div className="border-b pb-6 mb-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <FcCompactCamera className="mr-2" />
            스크린샷
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {project?.ScreenshotSection.url && (
              <li className="py-2 pb-5">
                <a
                  href={project.ScreenshotSection.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold hover:text-blue-500 underline"
                >
                  DateLeaf 시연 영상
                </a>
              </li>
            )}
          </ul>
          <div className="grid grid-cols-2 gap-4">
            {project?.ScreenshotSection.img.map((image) => (
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
                <img src={image} alt="screenshot-images" className="w-full rounded-lg" />
              </button>
            ))}
          </div>
          <ImageModal isOpen={isModalOpen} image={selectedImage} onClose={closeModal} />
        </div>
      </div>
    </section>
  );
}

export default Screenshot;
