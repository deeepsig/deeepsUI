import { useState, useEffect } from 'react';
import CanvasPreview from '../canvas/CanvasPreview';
import TextResponse from './TextResponse';
import { chatData, animationConfig } from '../../data/Data';

export default function ChatResponse() {
  const [showCanvas, setShowCanvas] = useState(false);
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);

  useEffect(() => {
    setShowCanvas(true);

    const timer1 = setTimeout(() => {
      setShowText1(true);
    }, animationConfig.text1Delay);

    const timer2 = setTimeout(() => {
      setShowText2(true);
    }, animationConfig.text2Delay);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="flex flex-col items-start w-full space-y-4">
      {showCanvas && <CanvasPreview />}
      {showText1 && <TextResponse text={chatData.responseTexts.text1} />}
      {showText2 && <TextResponse text={chatData.responseTexts.text2} />}
    </div>
  );
}
