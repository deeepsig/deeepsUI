interface CanvasProps {
  title?: string;
  isFocussed?: boolean;
}

export default function CanvasPreview({
  title = 'Chat bubble UI',
}: CanvasProps) {
  return (
    <div className="w-full h-[300px] bg-[#f4f4f4] border border-[#f1f1f1] rounded-2xl overflow-hidden">
      {/* Header with title and expand icon */}
      <div className="flex justify-between items-center p-4 border-b border-[#f1f1f1]">
        <h3 className="font-inter text-[#2a2c2e] font-medium">{title}</h3>
        <button
          className="p-1.5 rounded-md text-[#6b7280] hover:text-[#374151] hover:bg-[#f3f4f6] transition-all duration-200 cursor-pointer group"
          onClick={() => console.log('Expand clicked')}
        >
          <div className="relative w-[18px] h-[18px]">
            {/* Top-right arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 256 256"
              className="absolute top-0 left-0 transform group-hover:translate-x-px group-hover:-translate-y-px transition-transform duration-200"
            >
              <path d="M216,48V96a8,8,0,0,1-16,0V67.31l-50.34,50.35a8,8,0,0,1-11.32-11.32L188.69,56H160a8,8,0,0,1,0-16h48A8,8,0,0,1,216,48Z" />
            </svg>
            {/* Bottom-left arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 256 256"
              className="absolute top-0 left-0 transform group-hover:-translate-x-px group-hover:translate-y-px transition-transform duration-200"
            >
              <path d="M106.34,138.34,56,188.69V160a8,8,0,0,0-16,0v48a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16H67.31l50.35-50.34a8,8,0,0,0-11.32-11.32Z" />
            </svg>
          </div>
        </button>
      </div>

      {/* Main content area - expandable empty space */}
      <div className="h-full p-4 bg-[#fff]">
        {/* This area can be expanded with content */}
      </div>
    </div>
  );
}
