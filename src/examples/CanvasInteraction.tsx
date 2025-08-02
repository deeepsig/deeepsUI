import { useState, useEffect } from 'react';
import SecondaryBubble from '../components/chatBubble/SecondaryBubble';
import ChatResponse from '../components/chatResponse/ChatResponse';
import CanvasPanel from '../components/canvas/CanvasPanel';
import { CanvasProvider, useCanvas } from '../contexts/CanvasContext';

function CanvasLayout() {
  const { isCanvasExpanded } = useCanvas();
  const [showSecondaryBubble, setShowSecondaryBubble] = useState(false);
  const [showChatResponse, setShowChatResponse] = useState(false);

  useEffect(() => {
    // Show SecondaryBubble immediately
    setShowSecondaryBubble(true);

    // Show ChatResponse after a delay
    const timer = setTimeout(() => {
      setShowChatResponse(true);
    }, 200); // 200ms delay

    return () => clearTimeout(timer);
  }, []);

  // Shared chat content
  const chatContent = (
    <div className="flex flex-col items-end w-full max-w-[576px] mx-auto px-4 space-y-6">
      {showSecondaryBubble && <SecondaryBubble />}
      {showChatResponse && <ChatResponse />}
    </div>
  );

  return (
    <div className="relative">
      {/* Chat content - dims when canvas expands */}
      <div
        className={`transition-opacity duration-300 ${
          isCanvasExpanded
            ? 'fixed left-0 top-0 w-1/3 h-full overflow-y-auto py-[25vh] bg-white z-40 opacity-80'
            : 'max-w-[576px] mx-auto opacity-100'
        }`}
      >
        {chatContent}
      </div>

      {/* Canvas panel - slides in from right */}
      <div
        className={`fixed top-0 right-0 w-2/3 h-full z-50 transition-transform duration-300 ${
          isCanvasExpanded ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <CanvasPanel />
      </div>
    </div>
  );
}

export default function CanvasInteraction() {
  return (
    <CanvasProvider>
      <CanvasLayout />
    </CanvasProvider>
  );
}
