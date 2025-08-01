interface SecondaryBubbleProps {
  text?: string;
  isEditing?: boolean;
}

export default function SecondaryBubble({
  text = 'find me some good brand design inspirations',
  isEditing = false,
}: SecondaryBubbleProps) {
  return (
    <div
      className={`inline-block py-2 px-4 rounded-2xl ${!isEditing ? 'bg-[#FaFcFe] border border-[#f1f1f1]' : ''}`}
    >
      <p className="font-inter text-[#2a2c2e]">{text}</p>
    </div>
  );
}
