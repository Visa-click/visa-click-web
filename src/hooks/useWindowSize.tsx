import { BreakpointPrefix } from '@utils/screens';
import { useEffect, useState } from 'react';

interface WindowSize {
  windowWidth: number;
  isMobile: boolean;
}

export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    windowWidth: 0,
    isMobile: false,
  });

  // Сохраняем только ширину окна, чтобы избежать лишних обновлений при изменении высоты
  const handleSize = () => {
    const newWidth = window.innerWidth;
    if (newWidth !== windowSize.windowWidth) {
      setWindowSize({
        windowWidth: newWidth,
        isMobile: newWidth <= BreakpointPrefix.SM,
      });
    }
  };

  useEffect(() => {
    handleSize(); // Устанавливаем начальный размер
    window.addEventListener('resize', handleSize); // Подписываемся на событие resize
    return () => window.removeEventListener('resize', handleSize); // Очищаем подписку
  }, [windowSize.windowWidth]); // Зависимость от ширины окна для предотвращения ненужных вызовов

  return windowSize;
}

//usage
//const { windowWidth, windowHeight } = useWindowSize()
