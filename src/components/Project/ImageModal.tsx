interface ScreenshotModalProps {
  isOpen: boolean;
  image: string | null;
  onClose: () => void;
}

function ImageModal({ isOpen, image, onClose }: ScreenshotModalProps) {
  if (!isOpen || !image) return null;

  return (
    <div
      role="button"
      tabIndex={0}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClose();
        }
      }}
    >
      <img src={image} alt="enlarged-screenshot" className="max-w-3xl max-h-3xl" />
    </div>
  );
}

export default ImageModal;
