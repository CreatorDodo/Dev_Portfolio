// TODO:Section들은 SectionProps를 상속받아서 사용하도록 리팩토링 필요.
import { type Project } from '@/types/project.ts';
import { FcTodoList } from 'react-icons/fc';
import { useState } from 'react';
import ImageModal from './ImageModal.tsx';

interface IssuesBacklogProps {
  project: Project | null;
}

function IssuesBacklog({ project }: IssuesBacklogProps) {
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
    <section id="issues-backlog">
      <div className="border-b pb-6 mb-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <FcTodoList className="mr-2" />
            Issues & Backlog
          </h2>
          <ul className="list-disc pl-6 space-y-2 pb-6">
            {project?.IssuesBacklogSection.text?.map((text, index) => (
              <li key={text} className="py-1 font-semibold">
                {text}{' '}
                {project?.IssuesBacklogSection.url?.[index] && (
                  <a href={project.IssuesBacklogSection.url[index]} className="text-blue-500">
                    (링크)
                  </a>
                )}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-4">
            {project?.IssuesBacklogSection.img?.map((image) => (
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
                <img src={image} alt="issues-backlog-images" />
              </button>
            ))}
          </div>
          <ImageModal isOpen={isModalOpen} image={selectedImage} onClose={closeModal} />
        </div>
      </div>
    </section>
  );
}

export default IssuesBacklog;
