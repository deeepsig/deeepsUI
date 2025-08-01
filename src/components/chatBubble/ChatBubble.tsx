import React from 'react';

interface ChatBubbleProps {
  text?: string;
  isEditing?: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  text = 'Code the UI of a chat bubble',
  isEditing = false,
}) => {
  return (
    <div
      className={`inline-block py-2 px-4 rounded-2xl ${!isEditing ? 'bg-[#E5E7E9]' : ''}`}
    >
      <code className="text-base font-inter text-[#2a2c2e]">{text}</code>
    </div>
  );
};

export default ChatBubble;
