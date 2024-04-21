import { useState } from 'react';
import styles from './index.module.css';
import { runInNewContext } from 'vm';

const Home = () => {
  const [turnColor, setTurnColor] = useState(1);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    const newBoard = structuredClone(board);
    newBoard[y][x] = turnColor;

    const directions = [
      [0, 1],
      [1, 1],
      [1, 0],
      [1, -1],
      [0, -1],
      [-1, -1],
      [-1, 0],
      [-1, 1],
    ];
    function checkSameColor(x: number, y: number) {
      const foundCoordinates = [];

      for (const direction of directions) {
        const dx = direction[0];
        const dy = direction[1];

        const newX = x + dx;
        const newY = y + dy;

        if (isNewValid(newX, newY) && isSameColor(newX, newY)) {
          newBoard[newY][newX] = 3 - turnColor;
          foundCoordinates.push([newX, newY]);
        }
      }
    }

    function isNewValid(x: number, y: number) {
      return x >= 0 && x < boardWidth && y >= 0 && y < boardHeight;
    }

    function isSameColor(x: number, y: number) {
      return board[x][y] === 3 - turnColor;
    }

    setTurnColor(3 - turnColor);

    if (board[y + 1] !== undefined && board[y + 1][x] === 3 - turnColor) {
      newBoard[y][x] = turnColor;
      setTurnColor(3 - turnColor);
    }
    setBoard(newBoard);
  };

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cell} key={`${x}-${y}`} onClick={() => clickHandler(x, y)}>
              {color !== 0 && (
                <div
                  className={styles.stone}
                  style={{ background: color === 1 ? '#000' : '#fff' }}
                />
              )}
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export default Home;
