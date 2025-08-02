import { useState, useEffect } from 'react';
import SecondaryBubble from '../components/chatBubble/SecondaryBubble';
import ChatResponse from '../components/chatResponse/ChatResponse';
import CanvasPanel from '../components/canvas/CanvasPanel';
import { CanvasProvider, useCanvas } from '../contexts/CanvasContext';
import { animationConfig } from '../data/Data';

function CanvasLayout() {
  const { isCanvasExpanded } = useCanvas();
  const [showSecondaryBubble, setShowSecondaryBubble] = useState(false);
  const [showChatResponse, setShowChatResponse] = useState(false);

  useEffect(() => {
    setShowSecondaryBubble(true);

    const timer = setTimeout(() => {
      setShowChatResponse(true);
    }, animationConfig.chatResponseDelay);

    return () => clearTimeout(timer);
  }, []);

  const chatContent = (
    <div className="flex flex-col items-end w-full max-w-[576px] mx-auto px-4 space-y-6">
      {showSecondaryBubble && <SecondaryBubble />}
      {showChatResponse && <ChatResponse />}
    </div>
  );

  return (
    <div className="relative">
      <div
        className={`transition-opacity duration-300 ${
          isCanvasExpanded
            ? 'fixed left-0 top-0 w-1/3 h-full overflow-y-auto py-[25vh] bg-white z-40 opacity-80'
            : 'max-w-[576px] mx-auto opacity-100'
        }`}
      >
        {chatContent}
      </div>

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
