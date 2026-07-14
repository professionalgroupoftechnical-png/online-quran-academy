import { useEffect, useRef } from 'react';

export function useCardTilt(intensity = 10) {
  const ref = useRef(null);

  useEffect(() => {
    const card = ref.current;
    if (!card || window.matchMedia('(max-width: 768px)').matches) return;

    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) translateY(-10px) scale(1.02)`;
    };

    const handleLeave = () => {
      card.style.transform = '';
    };

    card.addEventListener('mousemove', handleMove);
    card.addEventListener('mouseleave', handleLeave);
    return () => {
      card.removeEventListener('mousemove', handleMove);
      card.removeEventListener('mouseleave', handleLeave);
    };
  }, [intensity]);

  return ref;
}
