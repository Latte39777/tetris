import { useState } from 'react';
import styles from './index.module.css';

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

const reversePlace = (x: number, y: number, board: number[][], turnColor: number) => {
  board[y][x] = turnColor;
  for (const direction of directions) {
    const dx = direction[0];
    const dy = direction[1];
    for (let a: number = 1; a <= 6; a++) {
      if (board[y + dy * a] !== undefined && board[y + dy * a][x + dx * a] === 3 - turnColor) {
        if (
          board[y + dy * (a + 1)] !== undefined &&
          board[y + dy * (a + 1)][x + dx * (a + 1)] === turnColor
        ) {
          for (let b: number = 1; b <= a; b++) {
            board[y + dy * b][x + dx * b] = turnColor;
          }
          break;
        }
      } else {
        break;
      }
    }
  }
  return board;
};

const getPutPlace = (board: number[][], turnColor: number, passCount: number) => {
  let candidatecount = 0;
  for (let c = 0; c <= 7; c++) {
    for (let d = 0; d <= 7; d++) {
      if (board[d][c] === 0 || board[d][c] === 3) {
        board[d][c] = 0;
        for (const direction of directions) {
          const dx = direction[0];
          const dy = direction[1];
          for (let a: number = 1; a <= 6; a++) {
            if (board[d + dy * a] !== undefined && board[d + dy * a][c + dx * a] === turnColor) {
              if (
                board[d + dy * (a + 1)] !== undefined &&
                board[d + dy * (a + 1)][c + dx * (a + 1)] === 3 - turnColor
              ) {
                candidatecount++;
                board[d][c] = 3;
                break;
              }
            } else {
              break;
            }
          }
        }
      }
    }
  }
  if (candidatecount === 0 && passCount <= 2) {
    getPutPlace(board, 3 - turnColor, 1 + passCount);
  }
  return board;
};

const Home = () => {
  const [turnColor, setTurnColor] = useState(1);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 3, 2, 1, 0, 0, 0],
    [0, 0, 0, 1, 2, 3, 0, 0],
    [0, 0, 0, 0, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const passCount = 0;
  const clickHandler = (x: number, y: number) => {
    if (board[y][x] === 3) {
      const newBoard = structuredClone(board);
      const reversed = reversePlace(x, y, newBoard, turnColor);
      const getPutted = getPutPlace(reversed, turnColor, passCount);
      setTurnColor(3 - turnColor);
      setBoard(getPutted);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.setcontainer}>
        {board.flat().filter((cell) => cell === 3).length === 0
          ? '終'
          : turnColor === 1
            ? '黒'
            : '白'}
        <div className={styles.textBold}>
          siro:{board.flat().filter((cell) => cell === 2).length}
        </div>
        <div className={styles.textBold}>
          kuro:{board.flat().filter((cell) => cell === 1).length}
        </div>
      </div>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div
              className={`${styles.cell} ${styles.alignCenter}`}
              key={`${x}-${y}`}
              onClick={() => {
                clickHandler(x, y);
              }}
            >
              {color !== 0 && color !== 3 && (
                <div
                  className={styles.stone}
                  style={{ background: color === 1 ? '#000' : '#fff' }}
                />
              )}
              {color === 3 && (
                <div className={styles.circle} style={{ background: '#rgb(0 200 200 / 100%)' }} />
              )}
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export default Home;
