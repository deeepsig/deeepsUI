import ExpandButton from '../buttons/ExpandButton';

interface CanvasProps {
  title?: string;
  isFocussed?: boolean;
}

export default function CanvasPreview({
  title = 'Brand Design Mood Board',
}: CanvasProps) {
  return (
    <div className="w-full h-[300px] bg-[#fff] border border-[#f1f1f1] rounded-2xl overflow-hidden flex flex-col">
      {/* Header with title and expand icon */}
      <div className="flex justify-between items-center p-4 border-b bg-[#ffffff] border-[#f1f1f1]">
        <h3 className="font-inter text-[#2a2c2e] font-medium">{title}</h3>
        <ExpandButton onClick={() => console.log('Expand clicked')} />
      </div>

      {/* Main content area - expandable empty space */}
      <div className="flex-1 p-4 bg-[#fff] relative font-inter">
        {/* This area can be expanded with content */}

        {/* Work in progress indicator with animated circle */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2 text-[#cdcecf] text-sm font-normal">
          <svg width="8" height="8" viewBox="0 0 8 8" className="animate-pulse">
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
  );
}
