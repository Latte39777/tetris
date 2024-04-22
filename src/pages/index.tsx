import { useState } from 'react';
import styles from './index.module.css';

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
    // [0, 0, 0, 0, 0, 0, 0, 0],
    // [0, 0, 0, 0, 0, 0, 0, 1],
    // [0, 0, 0, 0, 0, 0, 2, 1],
    // [0, 0, 0, 0, 0, 1, 2, 1],
    // [0, 0, 0, 0, 2, 1, 2, 1],
    // [0, 0, 0, 1, 2, 1, 2, 1],
    // [0, 0, 2, 1, 2, 1, 2, 1],
    // [0, 1, 1, 2, 1, 2, 1, 2],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    console.log(turnColor);
    const newBoard = structuredClone(board);

    function checkSameColor(x: number, y: number) {
      console.log(1);

      for (const direction of directions) {
        console.log(2);
        const dx = direction[0];
        const dy = direction[1];

        const newX = x + dx;
        const newY = y + dy;

        for (let i = 1; i <= 6; i++)
          if (isNewValid(x + dx * 1, newY) && isAnotherColor(newX, newY)) {
            if (isNewValid(x + dx * 2, y + dy * 2) && isAnotherColor(x + dx * 2, y + dy * 2)) {
              if (isNewValid(x + dx * 3, y + dy * 3) && isAnotherColor(x + dx * 3, y + dy * 3)) {
                if (isNewValid(x + dx * 4, y + dy * 4) && isAnotherColor(x + dx * 4, y + dy * 4)) {
                  if (
                    isNewValid(x + dx * 5, y + dy * 5) &&
                    isAnotherColor(x + dx * 5, y + dy * 5)
                  ) {
                    if (
                      isNewValid(x + dx * 6, y + dy * 6) &&
                      isAnotherColor(x + dx * 6, y + dy * 6)
                    ) {
                      if (
                        isNewValid(x + dx * 7, y + dy * 7) &&
                        isSameColor(x + dx * 7, y + dy * 7)
                      ) {
                        newBoard[y][x] = turnColor;
                        newBoard[y + dy * 1][x + dx * 1] = turnColor;
                        newBoard[y + dy * 2][x + dx * 2] = turnColor;
                        newBoard[y + dy * 3][x + dx * 3] = turnColor;
                        newBoard[y + dy * 4][x + dx * 4] = turnColor;
                        newBoard[y + dy * 5][x + dx * 5] = turnColor;
                        newBoard[y + dy * 6][x + dx * 6] = turnColor;
                        setTurnColor(3 - turnColor);
                      }
                    }
                  }
                }
              }
            }

            if (isNewValid(x + dx * 2, y + dy * 2) && isAnotherColor(x + dx * 2, y + dy * 2)) {
              if (isNewValid(x + dx * 3, y + dy * 3) && isAnotherColor(x + dx * 3, y + dy * 3)) {
                if (isNewValid(x + dx * 4, y + dy * 4) && isAnotherColor(x + dx * 4, y + dy * 4)) {
                  if (
                    isNewValid(x + dx * 5, y + dy * 5) &&
                    isAnotherColor(x + dx * 5, y + dy * 5)
                  ) {
                    if (isNewValid(x + dx * 6, y + dy * 6) && isSameColor(x + dx * 6, y + dy * 6)) {
                      newBoard[y][x] = turnColor;
                      newBoard[y + dy * 1][x + dx * 1] = turnColor;
                      newBoard[y + dy * 2][x + dx * 2] = turnColor;
                      newBoard[y + dy * 3][x + dx * 3] = turnColor;
                      newBoard[y + dy * 4][x + dx * 4] = turnColor;
                      newBoard[y + dy * 5][x + dx * 5] = turnColor;
                      setTurnColor(3 - turnColor);
                    }
                  }
                }
              }
            }

            if (isNewValid(x + dx * 2, y + dy * 2) && isAnotherColor(x + dx * 2, y + dy * 2)) {
              if (isNewValid(x + dx * 3, y + dy * 3) && isAnotherColor(x + dx * 3, y + dy * 3)) {
                if (isNewValid(x + dx * 4, y + dy * 4) && isAnotherColor(x + dx * 4, y + dy * 4)) {
                  if (isNewValid(x + dx * 5, y + dy * 5) && isSameColor(x + dx * 5, y + dy * 5)) {
                    newBoard[y][x] = turnColor;
                    newBoard[y + dy * 1][x + dx * 1] = turnColor;
                    newBoard[y + dy * 2][x + dx * 2] = turnColor;
                    newBoard[y + dy * 3][x + dx * 3] = turnColor;
                    newBoard[y + dy * 4][x + dx * 4] = turnColor;
                    setTurnColor(3 - turnColor);
                  }
                }
              }
            }

            if (isNewValid(x + dx * 2, y + dy * 2) && isAnotherColor(x + dx * 2, y + dy * 2)) {
              if (isNewValid(x + dx * 3, y + dy * 3) && isAnotherColor(x + dx * 3, y + dy * 3)) {
                if (isNewValid(x + dx * 4, y + dy * 4) && isSameColor(x + dx * 4, y + dy * 4)) {
                  newBoard[y][x] = turnColor;
                  newBoard[y + dy * 1][x + dx * 1] = turnColor;
                  newBoard[y + dy * 2][x + dx * 2] = turnColor;
                  newBoard[y + dy * 3][x + dx * 3] = turnColor;
                  setTurnColor(3 - turnColor);
                }
              }
            }

            if (isNewValid(x + dx * 2, y + dy * 2) && isAnotherColor(x + dx * 2, y + dy * 2)) {
              if (isNewValid(x + dx * 3, y + dy * 3) && isSameColor(x + dx * 3, y + dy * 3)) {
                newBoard[y][x] = turnColor;
                newBoard[y + dy * 1][x + dx * 1] = turnColor;
                newBoard[y + dy * 2][x + dx * 2] = turnColor;
                setTurnColor(3 - turnColor);
              }
            }

            if (isNewValid(x + dx * 2, y + dy * 2) && isSameColor(x + dx * 2, y + dy * 2)) {
              newBoard[y][x] = turnColor;
              newBoard[y + dy * 1][x + dx * 1] = turnColor;

              setTurnColor(3 - turnColor);
              // newBoard[newY][newX] = turnColor;
              // foundCoordinates.push([newX, newY]);
            }
          }
      }
    }

    function isAnotherColor(x: number, y: number) {
      // console.log('isAnotherColor', x, y, turnColor, board[x][y]);
      return board[y][x] === 3 - turnColor;
    }
    function isSameColor(x: number, y: number) {
      return board[y][x] === turnColor;
    }
    checkSameColor(x, y);

    // if (board[y + 1] !== undefined && board[y + 1][x] === 3 - turnColor) {
    //   newBoard[y][x] = turnColor;
    //   setTurnColor(3 - turnColor);
    // }
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
