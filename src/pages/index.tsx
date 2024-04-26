import { useState } from 'react';
import styles from './index.module.css';
import { get } from 'http';

function isNewValid(x: number, y: number) {
  return x >= 0 && x < 8 && y >= 0 && y < 8;
}

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

const Home = () => {
  const [turnColor, setTurnColor] = useState(1);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 2, 1],
    [0, 0, 0, 0, 0, 1, 2, 1],
    [0, 0, 0, 0, 2, 1, 2, 1],
    [0, 0, 0, 1, 2, 1, 2, 1],
    [0, 0, 2, 1, 2, 1, 2, 1],
    [0, 1, 1, 2, 1, 2, 1, 2],
    // [0, 0, 0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 1, 2, 0, 0, 0],
    // [0, 0, 0, 2, 1, 0, 0, 0],
    // [0, 0, 0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  function isAnotherColor(x: number, y: number) {
    return board[y][x] === 3 - turnColor;
  }
  function isSameColor(x: number, y: number) {
    return board[y][x] === turnColor;
  }
  function isZeroColor(x: number, y: number) {
    return board[y][x] === 0;
  }

  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    console.log(turnColor);
    const newBoard = structuredClone(board);

    if (isNewValid(x, y) && isZeroColor(x, y)) {
      for (const direction of directions) {
        const dx = direction[0]; //0;
        const dy = direction[1]; //1;
        for (let a: number = 1; a <= 6; a++) {
          if (isNewValid(x + dx * a, y + dy * a) && isAnotherColor(x + dx * a, y + dy * a)) {
            if (
              isNewValid(x + dx * (a + 1), y + dy * (a + 1)) &&
              isSameColor(x + dx * (a + 1), y + dy * (a + 1))
            ) {
              for (let b = 1; b <= a; b++) {
                newBoard[y][x] = turnColor;
                newBoard[y + dy * b][x + dx * b] = turnColor;
                setTurnColor(3 - turnColor);
              }
              break;
            }
          }

          if (isNewValid(x + dx * a, y + dy * a) && isSameColor(x + dx * a, y + dy * a)) {
            break;
          }

          if (isNewValid(x + dx * a, y + dy * a) && isZeroColor(x + dx * a, y + dy * a)) {
            break;
          }
        }
      }
    }
    setBoard(newBoard);
  };


  const getPutPlace = (x: number, y: number) => {
    console.log(x, y);
    console.log(turnColor);
    const newBoard = structuredClone(board);
    if (isNewValid(x, y) && isZeroColor(x, y)) {
      for (const direction of directions) {
        const dx = direction[0]; //0;
        const dy = direction[1]; //1;
        for (let a: number = 1; a <= 6; a++) {
          if (isNewValid(x + dx * a, y + dy * a) && isAnotherColor(x + dx * a, y + dy * a)) {
            console.log('あ');
            if (
              isNewValid(x + dx * (a + 1), y + dy * (a + 1)) &&
              isSameColor(x + dx * (a + 1), y + dy * (a + 1))
            ) {
              console.log('いい');
              for (let b = 1; b <= a; b++) {
                console.log("ううう");
              }
              break;
            }
          }

          if (isNewValid(x + dx * a, y + dy * a) && isSameColor(x + dx * a, y + dy * a)) {
            break;
          }

          if (isNewValid(x + dx * a, y + dy * a) && isZeroColor(x + dx * a, y + dy * a)) {
            break;
          }
        }
      }
    }
    newBoard[y][x] = 3;
    setBoard(newBoard);
  };

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cell} key={`${x}-${y}`} onClick={() => clickHandler(x, y)}>
              {color !== 0 && color !== 3 && (
                <div
                  className={styles.stone}
                  style={{ background: color === 1 ? '#000' : '#fff' }}
                />
              )}
            </div>
            <div className={styles.cell} key={`${x}-${y}`} inplace={() => getPutPlace(x, y)}>
              {color === 3 && <div className={styles.circle} style={{ background: '#0000ff' }} />}
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export default Home;
