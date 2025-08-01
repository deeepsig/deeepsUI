interface SecondaryBubbleProps {
  text?: string;
  isEditing?: boolean;
}

export default function SecondaryBubble({
  text = 'Code the UI of a chat bubble',
  isEditing = false,
}: SecondaryBubbleProps) {
  return (
    <div
      className={`inline-block py-2 px-4 rounded-2xl ${!isEditing ? 'bg-[#F4F4F4] border border-[#f1f1f1]' : ''}`}
    >
      <p className="font-inter text-[#2a2c2e]">{text}</p>
    </div>
  );
}
