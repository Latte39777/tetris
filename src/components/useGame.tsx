import { useState } from 'react';
import minoLack from '../functions/gameLack';

const useGame = () => {
  const { minoAppear, minoStayLeft, minoStayBottom, minoStayRight } = minoLack();

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
    [1, 2, 3, 4, 5, 6, 0, 0, 0, 0],
  ]);

  const minoMovement = (minoNunber: number, direction: number) => {
    const movedBoard = structuredClone(board);
    if (direction === 0) {
      const leftPlased = minoStayLeft(movedBoard, 7);
      setBoard(leftPlased);
    }
    if (direction === 1) {
      const bottomPlased = minoStayBottom(movedBoard, 7);
      setBoard(bottomPlased);
    }
    if (direction === 2) {
      const rightPlased = minoStayRight(movedBoard, 7);
      setBoard(rightPlased);
    }
  };

  // const keyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
  //   const movedBoard = structuredClone(board);
  //   const key = e.code;
  //   const minoPlace = [];
  //   for (let a = 0; a < movedBoard[0].length; a++) {
  //     for (let b = 0; b < movedBoard.length; b++) {
  //       if (movedBoard[b][a] === 7) {
  //         minoPlace.push([a, b]);
  //         movedBoard[b][a] = 0;
  //       }
  //     }
  //   }
  //   //左に動かす
  //   for (const [ax, by] of minoPlace) {
  //     if (key === 'ArrowLeft') {
  //       if (movedBoard[by][ax - 1] !== undefined && movedBoard[by][ax - 1] === 0) {
  //         movedBoard[by][ax - 1] = 7;
  //       }
  //     }
  //     //下に動かす
  //     if (key === 'ArrowDown') {
  //       if (movedBoard[by + 1][ax] !== undefined && movedBoard[by + 1][ax] === 0) {
  //         movedBoard[by + 1][ax] = 7;
  //       }
  //     }
  //     //右に動かす
  //     if (key === 'ArrowRight') {
  //       if (movedBoard[by][ax + 1] !== undefined && movedBoard[by][ax + 1] === 0) {
  //         movedBoard[by][ax + 1] = 7;
  //       }
  //     }
  //   }
  //   setBoard(movedBoard);
  // };

  const downCell = () => {
    console.log('down');
  };

  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    const newBoard = structuredClone(board);
    // minoLack();
    // minoOpt();
    const minoAppered = minoAppear(newBoard, 7);
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
    // keyDownHandler,
  };
};

export default useGame;
