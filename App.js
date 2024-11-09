import React, { useState } from 'react';
import Lobby from './Lobby';
import Game from './Game';

function App() {
  const [gameId, setGameId] = useState(null);

  return (
    <div>
      {gameId ? (
        <Game gameId={gameId} />
      ) : (
        <Lobby setGameId={setGameId} />
      )}
    </div>
  );
}

export default App;
