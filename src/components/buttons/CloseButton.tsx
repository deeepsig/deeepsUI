interface CloseButtonProps {
  onClick?: () => void;
}

export default function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <button
      className="p-1.5 rounded-md text-slate-500 border border-transparent hover:text-slate-700 hover:bg-slate-50 hover:border-slate-200 transition-all duration-200 cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative w-[18px] h-[18px]">
        {/* X mark with two diagonal lines */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="absolute top-0 left-0 transform group-hover:rotate-90 transition-transform duration-200"
        >
          <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z" />
        </svg>
      </div>
    </button>
  );
}
