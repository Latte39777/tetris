import { use, useState } from 'react';
import minoLack from '../functions/gameLack';

const useGame = () => {
  const { minoAppear, minoStayLeft, minoStayBottom, minoStayRight, hardDrop, delateLine, minoOpt } =
    minoLack();

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
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const [firstMino, setFirstMino] = useState([0, 1, 2, 3, 4, 5, 6, 7]);

  const minoMovement = (minoNunber: number, direction: number) => {
    // const minoList = minoOpt();
    const movedBoard = structuredClone(board);
    if (direction === 0) {
      const leftPlased = minoStayLeft(movedBoard, 6);
      setBoard(leftPlased);
    }
    if (direction === 1) {
      const bottomPlased = minoStayBottom(movedBoard, 6);
      setBoard(bottomPlased);
    }
    if (direction === 2) {
      const rightPlased = minoStayRight(movedBoard, 6);
      setBoard(rightPlased);
    }
  };

  const keyDownHandler = (e: KeyboardEvent) => {
    let n = 0;
    const a = board.flat().filter((cell) => cell > 10).length;
    const key = e.code;
    const movedBoard = structuredClone(board);
    if (key === 'ArrowLeft') {
      const leftPlased = minoStayLeft(movedBoard, firstMino[n]);
      setBoard(leftPlased);
    }
    if (key === 'ArrowDown') {
      const bottomPlased = minoStayBottom(movedBoard, firstMino[n]);
      const delatedLines = delateLine(bottomPlased);
      setBoard(delatedLines);
      if (a < delatedLines.flat().filter((cell) => cell > 10).length) {
        const minoAppeared = minoAppear(delatedLines, firstMino[n]);
        setBoard(minoAppeared);
        n++;
      }
    }
    if (key === 'ArrowRight') {
      const rightPlased = minoStayRight(movedBoard, firstMino[n]);
      setBoard(rightPlased);
    }
    if (key === 'Space') {
      const hardDroped = hardDrop(movedBoard, firstMino[n]);
      const delatedLines = delateLine(hardDroped);
      if (a < delatedLines.flat().filter((cell) => cell > 10).length) {
        const minoAppeared = minoAppear(delatedLines, firstMino[n]);
        setBoard(minoAppeared);
        n++;
      }
    }
    if (n === 7) {
      clickHandler();
    }
  };

  const downCell = () => {
    console.log('down');
  };

  const clickHandler = () => {
    const minoList = minoOpt();
    const newBoard = structuredClone(board);
    const minoAppered = minoAppear(newBoard, 6);
    setFirstMino(minoList);
    setBoard(minoAppered);
  };

  return {
    board,
    downCell,
    clickHandler,
    minoAppear,
    minoMovement,
    minoStayLeft,
    minoStayBottom,
    minoStayRight,
    keyDownHandler,
  };
};

export default useGame;
