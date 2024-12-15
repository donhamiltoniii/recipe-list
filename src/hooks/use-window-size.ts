import { useEffect, useState } from 'react';

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<{
    height: number | undefined;
    width: number | undefined;
  }>({
    height: undefined,
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
