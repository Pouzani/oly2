import { useState, useEffect } from 'react';
import { getSavedGame } from '../utils/api';

export const useSaveGame = (token) => {
  const [game, setGame] = useState({});
  const loadGame = () => {
    getSavedGame(token).then((gameData) => {
      setGame(gameData);
    });
  };
  useEffect(()=> loadGame(),[]);
  return game;
}
