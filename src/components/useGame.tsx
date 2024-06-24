import { useState, useEffect } from 'react';
import gameMove from '../functions/directionMove';
import appearDelite from '../functions/appearDelite';
import minoShape from '../functions/minoShape';

const useGame = () => {
  const { minoStayLeft, minoStayBottom, minoStayRight, hardDrop } = gameMove();
  // const { minoAppear, minoOpt, delateLine, RotatePlace } = appearDelite();
  const { minoAppear, minoOpt, delateLine } = appearDelite();
  const { minoRotateShape } = minoShape();

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

  const [firstMino, setFirstMino] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
  // const [isTimeCount, setTimeCount] = useState(0);
  const [timerId, setTimerId] = useState<number | null>(null); // タイマーID用のState

  // useEffect(() => {
  //   if (timerId !== null) {
  //     clearInterval(timerId);
  //     minoMovement(1);
  //   }
  // }, [timerId]);

  const startTimer = () => {
    if (timerId !== null) {
      clearInterval(timerId);
    }
    const id = window.setInterval(() => {
      // setTimeCount((prev) => prev + 1);
    }, 1000);
    setTimerId(id);
  };

  const minoMovement = (direction: number) => {
    const a = board.flat().filter((cell) => cell > 10).length;
    const movedBoard = structuredClone(board);
    const newFirstMinoList = structuredClone(firstMino);
    if (direction === 0) {
      const leftPlased = minoStayLeft(movedBoard, newFirstMinoList[0]);
      setBoard(leftPlased);
    }
    if (direction === 1) {
      const bottomPlased = minoStayBottom(movedBoard, newFirstMinoList[0]);
      const delatedLines = delateLine(bottomPlased);
      setBoard(delatedLines);
      if (a < delatedLines.flat().filter((cell) => cell > 10).length) {
        const minoAppeared = minoAppear(delatedLines, newFirstMinoList[1]);
        setBoard(minoAppeared);
        const listNextMino = newFirstMinoList.splice(1);
        setFirstMino(listNextMino);
      }
    }
    if (direction === 2) {
      const rightPlased = minoStayRight(movedBoard, newFirstMinoList[0]);
      setBoard(rightPlased);
    }
    if (direction === 3) {
      for (let a = 0; a <= 20; a++) {
        for (let b = 0; b <= 10; b++) {
          const rotatedBoard = minoRotateShape(newFirstMinoList[0], b, a, movedBoard);
          setBoard(rotatedBoard);
        }
      }
    }
    if (newFirstMinoList.length === 7) {
      const firstMinoList = minoOpt();
      const fusionNinoList = firstMino.flat().concat(firstMinoList);
      setFirstMino(fusionNinoList);
    }
  };

  const keyDownHandler = (e: KeyboardEvent) => {
    const a = board.flat().filter((cell) => cell > 10).length;
    const key = e.code;
    const movedBoard = structuredClone(board);
    const newFirstMinoList = structuredClone(firstMino);
    if (key === 'ArrowLeft') {
      const leftPlased = minoStayLeft(movedBoard, newFirstMinoList[0]);
      setBoard(leftPlased);
    }
    if (key === 'ArrowDown') {
      const bottomPlased = minoStayBottom(movedBoard, newFirstMinoList[0]);
      const delatedLines = delateLine(bottomPlased);
      setBoard(delatedLines);
      if (a < delatedLines.flat().filter((cell) => cell > 10).length) {
        const minoAppeared = minoAppear(delatedLines, newFirstMinoList[1]);
        setBoard(minoAppeared);
        const listNextMino = newFirstMinoList.splice(1);
        setFirstMino(listNextMino);
        console.log(delatedLines);
      }
    }
    if (key === 'ArrowRight') {
      const rightPlased = minoStayRight(movedBoard, newFirstMinoList[0]);
      setBoard(rightPlased);
    }
    if (key === 'Space') {
      const hardDroped = hardDrop(movedBoard, newFirstMinoList[0]);
      const delatedLines = delateLine(hardDroped);
      if (a < delatedLines.flat().filter((cell) => cell > 10).length) {
        const minoAppeared = minoAppear(delatedLines, newFirstMinoList[1]);
        setBoard(minoAppeared);
        const listNextMino = newFirstMinoList.splice(1);
        setFirstMino(listNextMino);
      }
    }
    if (newFirstMinoList.length === 7) {
      const firstMinoList = minoOpt();
      const fusionNinoList = firstMino.flat().concat(firstMinoList);
      setFirstMino(fusionNinoList);
    }
  };

  const downCell = () => {
    console.log('down');
  };

  const clickHandler = () => {
    startTimer();
    const firstMinoList = minoOpt();
    const secondMinoList = minoOpt();
    const fusionNinoList = firstMinoList.flat().concat(secondMinoList);
    setFirstMino(fusionNinoList);
    const newBoard = structuredClone(board);
    const minoAppered = minoAppear(newBoard, fusionNinoList[0]);
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
