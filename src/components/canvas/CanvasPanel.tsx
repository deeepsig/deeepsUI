import { useCanvas } from '../../contexts/CanvasContext';

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
      <div className="w-full h-full bg-[#fff] border border-[#f1f1f1] overflow-hidden flex flex-col">
        {/* Header with title and close button */}
        <div className="flex justify-between items-center p-4 border-b bg-[#ffffff] border-[#f1f1f1]">
          <h3 className="font-inter text-[#2a2c2e] font-medium text-lg">
            {title}
          </h3>
          <button
            onClick={collapseCanvas}
            className="p-2 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-all duration-200"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        {/* Main content area - expanded version */}
        <div className="flex-1 p-6 bg-[#fff] relative font-inter">
          {/* Expanded canvas content goes here */}
          <div className="h-full flex items-center justify-center text-gray-400">
            Expanded canvas content area
          </div>
          {/* Work in progress indicator with animated circle */}
          <div className="absolute bottom-6 right-6 flex items-center gap-2 text-[#cdcecf] text-sm font-normal">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              className="animate-pulse"
            >
              <circle
                cx="4"
                cy="4"
                r="3"
                fill="#cdcecf"
                className="animate-pulse"
              />
            </svg>
            work in progress
          </div>
        </div>
      </div>
    </div>
  );
}
