import { chatData } from '../../data/Data';

interface SecondaryBubbleProps {
  text?: string;
  isEditing?: boolean;
}

export default function SecondaryBubble({
  text = chatData.secondaryBubbleText,
  isEditing = false,
}: SecondaryBubbleProps) {
  return (
    <div
      className={`
        inline-block py-2 px-4 rounded-2xl secondary-bubble-enter
        ${!isEditing ? 'bg-[#f4f4f4] border border-[#ebecec]' : ''}
      `}
    >
      <p className="font-inter text-[#2a2c2e]">{text}</p>
    </div>
  );
}
