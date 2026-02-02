import React, { useEffect, useRef } from 'react';
import { Game } from './game/Game';

const App: React.FC = () => {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvas.current) return;
    canvas.current.width = canvas.current.clientWidth;
    canvas.current.height = canvas.current.clientHeight;
    const game = new Game();
    game.start(window, canvas.current);
    return () => {
      game.stop();
    };
  }, [canvas]);

  return (
    <canvas
      ref={canvas}
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: '100%',
        width: '100%',
      }}
    />
  );
};

export default App;
