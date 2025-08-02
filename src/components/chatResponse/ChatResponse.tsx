import { useState, useEffect } from 'react';
import CanvasPreview from '../canvas/CanvasPreview';
import TextResponse from './TextResponse';

const text1 =
  'This is a UI demo to experiment with ChatGPT-like canvas interaction. For the time being, due to lack of time and my obviously amateur interaction design skills, I have just kept a Claude-like interaction here.';

const text2 =
  'But I try to make the best of the situation—see the interactions for the button.';

export default function ChatResponse() {
  const [showCanvas, setShowCanvas] = useState(false);
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);

  useEffect(() => {
    // Show CanvasPreview immediately
    setShowCanvas(true);

    // Show first text after a delay
    const timer1 = setTimeout(() => {
      setShowText1(true);
    }, 200);

    // Show second text after another delay
    const timer2 = setTimeout(() => {
      setShowText2(true);
    }, 400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="flex flex-col items-start w-full space-y-4">
      {showCanvas && <CanvasPreview />}
      {showText1 && <TextResponse text={text1} />}
      {showText2 && <TextResponse text={text2} />}
    </div>
  );
}
