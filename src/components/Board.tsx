import React from 'react';
import styles from '../pages/index.module.css';

interface Props {
  clickHandler: (x: number, y: number) => void;
  downCell: () => void;
  board: number[][];
  minoMovement: (minoNunber: number, direction: number) => void;
}

const Board: React.FC<Props> = ({ clickHandler, board, downCell, minoMovement }) => {
  const mino: (keyof typeof styles)[] = [
    'iStone',
    'oStone',
    'sStone',
    'zStone',
    'lStone',
    'jStone',
    'tStone',
  ];

  return (
    <>
      <div className={styles.worldboard}>
        <div className={styles.board} onClick={() => downCell()}>
          {board.map((row, y) =>
            row.map((color, x) => (
              <div
                className={styles.cell}
                key={`${x}-${y}`}
                onClick={() => {
                  clickHandler(x, y);
                }}
              >
                <div className={styles[mino[(color % 10) - 1]]} />
              </div>
            )),
          )}
        </div>
      </div>
      <div className={styles.informationBoard}>
        <div className={styles.nextMino}>next</div>
        <div className={styles.operationBox}>
          <div
            className={styles.directionButton}
            onClick={() => {
              minoMovement(7, 0);
            }}
          >
            ←
          </div>
          <div
            className={styles.directionButton}
            onClick={() => {
              minoMovement(7, 1);
            }}
          >
            ↓
          </div>
          <div
            className={styles.directionButton}
            onClick={() => {
              minoMovement(7, 2);
            }}
          >
            →
          </div>
          <div
            className={styles.directionButton}
            // onClick={() => {
            //   minoMovement(board, minoNumber, direction);
            // }}
          >
            ↑
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
