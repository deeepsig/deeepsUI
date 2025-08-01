import SecondaryBubble from '../components/chatBubble/SecondaryBubble';
import ChatResponse from '../components/chatResponse/ChatResponse';
import CanvasPanel from '../components/canvas/CanvasPanel';
import { CanvasProvider, useCanvas } from '../contexts/CanvasContext';

function CanvasLayout() {
  const { isCanvasExpanded } = useCanvas();

  // Shared chat content
  const chatContent = (
    <div className="flex flex-col items-end w-full max-w-[576px] mx-auto px-4 space-y-6">
      <SecondaryBubble />
      <ChatResponse />
    </div>
  );

  if (isCanvasExpanded) {
    // Expanded layout: 50% chat panel, 50% canvas panel
    return (
      <div className="fixed inset-0 bg-white z-50 flex">
        {/* Left chat panel - 50% width */}
        <div className="w-1/3 flex-shrink-0 overflow-y-auto py-[25vh] bg-white">
          {chatContent}
        </div>

        {/* Right canvas panel - 50% width */}
        <div className="w-2/3 flex-shrink-0">
          <CanvasPanel />
        </div>
      </div>
    );
  }

  // Normal layout: centered chat
  return <div className="max-w-[576px] mx-auto">{chatContent}</div>;
}

export default function CanvasInteraction() {
  return (
    <CanvasProvider>
      <CanvasLayout />
    </CanvasProvider>
  );
}
