const appearDelite = () => {
  function getRandomNumber() {
    const minoNumber = Math.floor(Math.random() * 7) + 1;
    return minoNumber;
  }

  // const directions = [
  //   [0, 1],
  //   [1, 1],
  //   [1, 0],
  //   [1, -1],
  //   [0, -1],
  //   [-1, -1],
  //   [-1, 0],
  //   [-1, 1],
  // ];

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
    if (minoNumber === 1) {
      board[0][3] = 1;
      board[0][4] = 1;
      board[0][5] = 1;
      board[0][6] = 1;
    }
    if (minoNumber === 2) {
      board[0][4] = 2;
      board[0][5] = 2;
      board[1][4] = 2;
      board[1][5] = 2;
    }
    if (minoNumber === 3) {
      board[0][4] = 3;
      board[0][5] = 3;
      board[1][3] = 3;
      board[1][4] = 3;
    }
    if (minoNumber === 4) {
      board[0][3] = 4;
      board[0][4] = 4;
      board[1][4] = 4;
      board[1][5] = 4;
    }
    if (minoNumber === 5) {
      board[0][5] = 5;
      board[1][3] = 5;
      board[1][4] = 5;
      board[1][5] = 5;
    }
    if (minoNumber === 6) {
      board[0][3] = 6;
      board[1][3] = 6;
      board[1][4] = 6;
      board[1][5] = 6;
    }
    if (minoNumber === 7) {
      board[0][4] = 7;
      board[1][3] = 7;
      board[1][4] = 7;
      board[1][5] = 7;
    }
    return board;
  };

  //揃ったLINE消す
  const delateLine = (board: number[][]) => {
    for (let a = 0; a < 20; a++) {
      let deletePossibiltty = 0;
      for (let row = 0; row < 10; row++) {
        if (board[a][row] >= 10) {
          deletePossibiltty++;
        }
      }
      if (deletePossibiltty === 10) {
        board.splice(a, 1);
        board.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      }
    }
    return board;
  };

  //回転後どうなるか
  // const RotatePlace = (board: number[][], minoNumber: number, rotateNumber: number) => {
  //   const minoPlace = [];
  //   for (let a = 0; a <= 10; a++) {
  //     for (let b = 0; b <= 20; b++) {
  //       for (const direction of directions) {
  //         if (board[b][a] === minoNumber) {
  //           minoPlace.push([a, b]);
  //           if (rotateNumber === 0) {
  //           }
  //           if (rotateNumber === 1) {
  //           }
  //           if (rotateNumber === 2) {
  //           }
  //           if (rotateNumber === 3) {
  //           }
  //         }
  //       }
  //     }
  //   }
  // };

  return {
    minoOpt,
    minoAppear,
    delateLine,
    // RotatePlace,
  };
};
export default appearDelite;
