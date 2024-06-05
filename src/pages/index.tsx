import { use, useState } from 'react';
import styles from './index.module.css';

function number1() {
  const iMino = [[1], [1], [1], [1]];
  return iMino;
}
function number2() {
  const oMino = [
    [2, 2],
    [2, 2],
  ];
  return oMino;
}

function number3() {
  const sMino = [
    [0, 3, 3],
    [3, 3, 0],
  ];
  return sMino;
}

function number4() {
  const zMino = [
    [4, 4, 0],
    [0, 4, 4],
  ];
  return zMino;
}

function number5() {
  const lMino = [
    [0, 0, 5],
    [5, 5, 5],
  ];
  return lMino;
}

function number6() {
  const jMino = [
    [6, 0, 0],
    [6, 6, 6],
  ];
  return jMino;
}

function number7() {
  const tMino = [
    [0, 7, 0],
    [7, 7, 7],
  ];
  return tMino;
}

function getRandomNumber() {
  const minoNumber = Math.floor(Math.random() * 7) + 1;
  return minoNumber;
}

//ミノ選択
const minoOpt = () => {
  const minoList: number[] = [];
  while (minoList.length < 7) {
    const minoNumber = getRandomNumber();
    if (!minoList.includes(minoNumber)) {
      minoList.push(minoNumber);
    }
  }
  console.log(minoList);
  return minoList;
};

//ミノオプトからミノ取得
//最初の場所のみ
const minoAppear = (board: number[][], minoNumber: number) => {
  if(minoNumber === )
};

const minoMovement = (board: number[][], minoNunber: number) => {
  for (let a = 0; a <= 10; a++) {
    for (let b = 0; b <= 20; b++) {
      //右に動かす
      if (board[b][a] === minoNunber && board[b + 1][a] !== undefined) {
        board[b + 1][a] = minoNunber;
      }
      //左に動かす
      if (board[b][a] === minoNunber && board[b - 1][a] !== undefined) {
        board[b - 1][a] = minoNunber;
      }
      //下に動かす
      if (board[b][a] === minoNunber && board[b][a - 1] !== undefined) {
        board[b][a - 1] = minoNunber;
      }
    }
  }
};

//揃ったLINE消す
const delateLine = (board: number[][]) => {
  for (let a = 0; a < 20; a++) {
    let deletePossibiltty = 0;
    for (let row = 0; row < 10; row++) {
      if (board[a][row] !== 0) {
        deletePossibiltty++;
      }
    }
    // console.log('a', deletePossibiltty);
    if (deletePossibiltty === 10) {
      board.splice(a, 1);
      board.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
  }
  return board;
};

const Home = () => {
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
    [1, 2, 2, 0, 3, 3, 4, 4, 0, 0],
    [1, 2, 2, 3, 3, 1, 1, 4, 4, 1],
    [1, 0, 5, 0, 0, 6, 0, 7, 0, 0],
    [1, 0, 5, 0, 0, 6, 7, 7, 7, 0],
    [0, 0, 5, 5, 6, 6, 0, 0, 0, 0],
  ]);

  const downCell = () => {
    console.log('down');
  };

  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    const newBoard = structuredClone(board);
    minoOpt();
    const delatedBoard = delateLine(newBoard);
    setBoard(delatedBoard);
  };

  return (
    <div className={styles.container}>
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
                {color === 1 && <div className={styles.iStone} />}
                {color === 2 && <div className={styles.oStone} />}
                {color === 3 && <div className={styles.sStone} />}
                {color === 4 && <div className={styles.zStone} />}
                {color === 5 && <div className={styles.lStone} />}
                {color === 6 && <div className={styles.jStone} />}
                {color === 7 && <div className={styles.tStone} />}
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
    </div>
  );
};

export default Home;
