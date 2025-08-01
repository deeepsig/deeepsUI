import SecondaryBubble from '../components/chatBubble/SecondaryBubble';
import ChatResponse from '../components/chatResponse/ChatResponse';

export default function CanvasInteraction() {
  return (
    <div className="flex flex-col items-end w-full px-4 space-y-6">
      <SecondaryBubble />
      <ChatResponse />
    </div>
  );
}
