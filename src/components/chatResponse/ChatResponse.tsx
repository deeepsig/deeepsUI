import CanvasPreview from '../canvas/CanvasPreview';
import TextResponse from './TextResponse';

const text1 =
  'This is a UI demo to experiment with ChatGPT-like canvas interaction. For the time being, due to lack of time and my obviously amateur interaction design skills, I have just kept a Claude-like interaction here.';

const text2 =
  'But I try to make the best of the situation—see the interactions for the button.';

export default function ChatResponse() {
  return (
    <div className="flex flex-col items-start w-full space-y-4">
      <CanvasPreview />
      <TextResponse text={text1} />
      <TextResponse text={text2} />
    </div>
  );
}
