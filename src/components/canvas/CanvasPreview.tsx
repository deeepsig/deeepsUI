import { useCanvas } from '../../contexts/CanvasContext';
import ExpandButton from '../buttons/ExpandButton';
import Circle from '../icons/Circle';
import { chatData } from '../../data/Data';

interface CanvasPreviewProps {
  title?: string;
}

export default function CanvasPreview({
  title = chatData.canvasTitle,
}: CanvasPreviewProps) {
  const { expandCanvas } = useCanvas();

  return (
    <div className="w-full h-[300px] bg-[#fff] border border-[#ebecec] rounded-2xl overflow-hidden flex flex-col canvas-preview-enter">
      <div className="flex justify-between items-center p-4 border-b bg-[#ffffff] border-[#f1f1f1]">
        <h3 className="font-inter text-[#2a2c2e] font-medium">{title}</h3>
        <ExpandButton onClick={expandCanvas} />
      </div>
      <div className="flex-1 p-4 bg-[#fff] relative font-inter">
        <div className="absolute bottom-4 right-4 flex items-center gap-2 text-[#cdcecf] text-sm font-normal">
          <Circle size={8} fill="#cdcecf" className="animate-pulse" />
          {chatData.workInProgressText}
        </div>
      </div>
    </div>
  );
}
