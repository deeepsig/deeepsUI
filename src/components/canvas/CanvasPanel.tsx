import { useCanvas } from '../../contexts/CanvasContext';
import CloseButton from '../buttons/CloseButton';

interface CanvasPanelProps {
  title?: string;
}

export default function CanvasPanel({
  title = 'Brand Design Mood Board',
}: CanvasPanelProps) {
  const { collapseCanvas } = useCanvas();

  return (
    <div className="h-full">
      {/* Main canvas container - larger version of CanvasPreview */}
      <div className="w-full h-full bg-[#fff] border border-[#ebecec] overflow-hidden flex flex-col shadow-[-4px_0_24px_-4px_rgba(0,0,0,0.08)]">
        {/* Header with title and close button */}
        <div className="flex justify-between items-center p-4 border-b bg-[#ffffff] border-[#f1f1f1]">
          <h3 className="font-inter text-[#2a2c2e] font-medium text-lg">
            {title}
          </h3>
          <CloseButton onClick={collapseCanvas} />
        </div>
        {/* Main content area - expanded version */}
        <div className="flex-1 p-6 bg-[#fff] relative font-inter"></div>
      </div>
    </div>
  );
}
