import React, { useEffect, useRef } from 'react';
import { Game } from './game/Game';

const App: React.FC = () => {
  const canvas = useRef(null);

  useEffect(() => {
    if (!canvas.current) return;
    const game = new Game();
    game.start(window, canvas.current);
    return () => {
      game.stop();
    };
  }, [canvas]);

  return <canvas ref={canvas} />;
};

export default App;
