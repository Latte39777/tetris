import { useState, useEffect } from 'react';
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
    // [1, 2, 0, 0, 0, 0, 0, 0],
    // [2, 0, 0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 3, 2, 1, 0, 0, 0],
    [0, 0, 0, 1, 2, 3, 0, 0],
    [0, 0, 0, 0, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const [blackStones, setBlackStones] = useState(0);
  const [whiteStones, setWhiteStones] = useState(0);

  function isAnotherColor(x: number, y: number) {
    return board[y][x] === 3 - turnColor;
  }
  function isSameColor(x: number, y: number) {
    return board[y][x] === turnColor;
  }
  function isZeroColor(x: number, y: number) {
    return board[y][x] === 0;
  }
  function Represent(x: number, y: number) {
    return board[y][x] === 3;
  }

  const newBoard = structuredClone(board);

  useEffect(() => {
    getPutPlace();
  }, [turnColor]);

  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    console.log(turnColor);

    if (isNewValid(x, y) && Represent(x, y)) {
      newBoard[y][x] = turnColor;
      setTurnColor(3 - turnColor);
      for (const direction of directions) {
        const dx = direction[0];
        const dy = direction[1];
        for (let a: number = 1; a <= 6; a++) {
          if (isNewValid(x + dx * a, y + dy * a) && isAnotherColor(x + dx * a, y + dy * a)) {
            if (
              isNewValid(x + dx * (a + 1), y + dy * (a + 1)) &&
              isSameColor(x + dx * (a + 1), y + dy * (a + 1))
            ) {
              for (let b = 1; b <= a; b++) {
                newBoard[y + dy * b][x + dx * b] = turnColor;
              }
              break;
            }
          } else {
            break;
          }
        }
      }
    }
    setBoard(newBoard);
  };

  const getPutPlace = () => {
    let candidatecount = 0;
    for (let c = 0; c <= 7; c++) {
      for (let d = 0; d <= 7; d++) {
        if (isZeroColor(c, d) || Represent(c, d)) {
          newBoard[d][c] = 0;
          for (const direction of directions) {
            const dx = direction[0];
            const dy = direction[1];
            for (let a: number = 1; a <= 6; a++) {
              if (isNewValid(c + dx * a, d + dy * a) && isAnotherColor(c + dx * a, d + dy * a)) {
                if (
                  isNewValid(c + dx * (a + 1), d + dy * (a + 1)) &&
                  isSameColor(c + dx * (a + 1), d + dy * (a + 1))
                ) {
                  newBoard[d][c] = 3;
                  candidatecount++;
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

    let blackCount = 0;
    let whiteCount = 0;
    board.forEach((row) => {
      row.forEach((cell) => {
        if (cell === 1) blackCount++;
        if (cell === 2) whiteCount++;
      });
    });
    setBlackStones(blackCount);
    setWhiteStones(whiteCount);

    // if (candidatecount === 0 && turnColor !== 3 - turnColor) {
    //   setTurnColor(3 - turnColor);
    // }
    setBoard(newBoard);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.setcontainer} ${styles.alignCenter}`}>
        <div
          className={`${styles.yourturn} ${styles.textLarge} ${styles.textBold} ${styles.textCenter}`}
        >
          Turn: {turnColor === 1 ? 'Black' : 'White'}
        </div>
        <div className={`${styles.numcolor} ${styles.textLarge} ${styles.textCenter}`}>
          <div className={styles.textBold}>Black Stones: {blackStones}</div>
          <div className={styles.textBold}>White Stones: {whiteStones}</div>
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
              {color === 3 && <div className={styles.circle} style={{ background: '#0000FF' }} />}
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export default Home;
