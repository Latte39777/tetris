const minoLack = () => {
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
    if (minoNumber === 1) {
      board[0][4] = 1;
      board[0][5] = 1;
      board[0][6] = 1;
      board[0][7] = 1;
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
      board[0][5] = 6;
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

  const minoMovement = (board: number[][], minoNunber: number) => {
    for (let a = 0; a <= 10; a++) {
      for (let b = 0; b <= 20; b++) {
        //右に動かす
        if (board[b][a] === minoNunber && board[b][a + 1] !== undefined) {
          board[b][a + 1] = minoNunber;
        }
        //左に動かす
        if (board[b][a] === minoNunber && board[b][a - 1] !== undefined) {
          board[b][a - 1] = minoNunber;
        }
        //下に動かす
        if (board[b][a] === minoNunber && board[b - 1][a] !== undefined) {
          board[b - 1][a] = minoNunber;
        }
      }
    }
    return board;
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

  //ミノ止める(ミノナンバー * 10)
  const minoStay = (board: number[][], minoNunber: number) => {
    for (let a = 0; a <= 10; a++) {
      for (let b = 0; b <= 20; b++) {
        if ((board[b][a] === minoNunber && board[b + 1][a] !== undefined) || board[b + 1][a] < 10) {
          board[b][a + 1] = minoNunber * 10;
        }
      }
    }
    return board;
  };

  return {
    minoOpt,
    minoAppear,
    minoMovement,
    delateLine,
    minoStay,
  };
};

export default minoLack;
