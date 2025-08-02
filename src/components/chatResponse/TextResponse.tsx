interface TextResponseProps {
  text?: string;
}

export default function TextResponse({ text = 'wip' }: TextResponseProps) {
  return (
    <div className="w-full text-response-enter">
      <p className="font-inter text-[#2a2c2e]">{text}</p>
    </div>
  );
}
