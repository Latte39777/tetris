import React from 'react';
import styles from '../pages/index.module.css';

// const [I, O, S, Z, L, J, T] = [1, 2, 3, 4, 5, 6, 7] as const;
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
                {/* {(color === I || color === I * 10) && <div className={styles.iStone} />} */}
                {/* {(color === O || color === O * 10) && <div className={styles.oStone} />} */}
                {/* {(color === S || color === S * 10) && <div className={styles.sStone} />} */}
                {/* {(color === Z || color === Z * 10) && <div className={styles.zStone} />} */}
                {/* {(color === L || color === L * 10) && <div className={styles.lStone} />} */}
                {/* {(color === J || color === J * 10) && <div className={styles.jStone} />} */}
                {/* {(color === T || color === T * 10) && <div className={styles.tStone} />} */}
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
