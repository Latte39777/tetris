import React from 'react';
import styles from '../pages/index.module.css';

interface Props {
  clickHandler: (x: number, y: number) => void;
  downCell: () => void;
  board: number[][];
}

const Board: React.FC<Props> = ({ clickHandler, board, downCell }) => {
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
                {/* I = 1  O = 2  S = 3  Z = 4  L = 5  J = 6  T = 7 */}
                {color === (1 || 10) && <div className={styles.iStone} />}
                {color === (2 || 20) && <div className={styles.oStone} />}
                {color === (3 || 30) && <div className={styles.sStone} />}
                {color === (4 || 40) && <div className={styles.zStone} />}
                {color === (5 || 50) && <div className={styles.lStone} />}
                {color === (6 || 60) && <div className={styles.jStone} />}
                {color === (7 || 70) && <div className={styles.tStone} />}
              </div>
            )),
          )}
        </div>
      </div>
      <div className={styles.informationBoard}>
        <div className={styles.nextMino}>next</div>
        <div className={styles.operationBox}>
          <div className={styles.directionButton} onClick={() => {}}>
            ←
          </div>
          <div className={styles.directionButton} onClick={() => {}}>
            ↓
          </div>
          <div className={styles.directionButton} onClick={() => {}}>
            →
          </div>
          <div className={styles.directionButton} onClick={() => {}}>
            ↑
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
