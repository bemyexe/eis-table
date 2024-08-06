import { useEffect, useRef, useState } from 'react';
export const usePressState = <T extends HTMLElement>() => {
  const [isPressed, setIsPressed] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;

    const handleStart = () => {
      setIsPressed(true);
    };

    const handleEnd = () => {
      setIsPressed(false);
    };

    if (element) {
      element.addEventListener('mousedown', handleStart);
      element.addEventListener('mouseup', handleEnd);
      element.addEventListener('touchstart', handleStart);
      element.addEventListener('touchend', handleEnd);

      return () => {
        element.removeEventListener('mousedown', handleStart);
        element.removeEventListener('mouseup', handleEnd);
        element.removeEventListener('touchstart', handleStart);
        element.removeEventListener('touchend', handleEnd);
      };
    }
  }, []);

  return { ref, isPressed };
};
