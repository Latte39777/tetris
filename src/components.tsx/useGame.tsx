import { useState } from 'react';
import minoLack from '../functions/minolack';

const useGame = () => {
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 2, 2, 0, 3, 3, 4, 4, 0, 0],
    [1, 2, 2, 3, 3, 1, 1, 4, 4, 1],
    [1, 0, 5, 0, 0, 6, 0, 7, 0, 0],
    [1, 0, 5, 0, 0, 6, 7, 7, 7, 0],
    [0, 0, 5, 5, 6, 6, 0, 0, 0, 0],
  ]);

  const downCell = () => {
    console.log('down');
  };

  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    const newBoard = structuredClone(board);
    minoLack();
    // minoOpt();
    const minoAppered = minoAppear(newBoard, 7);
    setBoard(minoAppered);
  };

  return {
    downCell,
    clickHandler,
    minoAppear,
  };
};

export default useGame;
