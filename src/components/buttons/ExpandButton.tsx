interface ExpandButtonProps {
  onClick?: () => void;
}

export default function ExpandButton({ onClick }: ExpandButtonProps) {
  return (
    <button
      className="p-1.5 rounded-md text-slate-500 border border-transparent hover:text-slate-700 hover:bg-slate-50 hover:border-slate-200 transition-all duration-200 cursor-pointer group"
      onClick={onClick}
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
  );
}
