interface TextResponseProps {
  text?: string;
}

export default function TextResponse({ text = 'wip' }: TextResponseProps) {
  return (
    <div className="w-full">
      <p className="font-inter text-[#2a2c2e]">{text}</p>
    </div>
  );
}
