
import Lobby from "./pages/Lobby";
import Game from "./pages/Game";
import { useState } from "react";

const App = () => {
  const {gameId, setGameId} = useState(null);
  return (
    gameId == null ? 
    <Lobby setGameId={setGameId}/> :
    <Game gameId={gameId}/>
  );
}

export default App;
