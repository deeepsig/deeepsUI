import ExpandButton from '../buttons/ExpandButton';

interface CanvasProps {
  title?: string;
  isFocussed?: boolean;
}

export default function CanvasPreview({
  title = 'Chat bubble UI',
}: CanvasProps) {
  return (
    <div className="w-full h-[300px] bg-[#fff] border border-[#f1f1f1] rounded-2xl overflow-hidden">
      {/* Header with title and expand icon */}
      <div className="flex justify-between items-center p-4 border-b border-[#f1f1f1]">
        <h3 className="font-inter text-[#2a2c2e] font-medium">{title}</h3>
        <ExpandButton onClick={() => console.log('Expand clicked')} />
      </div>

      {/* Main content area - expandable empty space */}
      <div className="h-full p-4 bg-[#fff]">
        {/* This area can be expanded with content */}
      </div>
    </div>
  );
}
