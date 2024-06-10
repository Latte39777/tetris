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

  //左に動かす
  const minoStayLeft = (board: number[][], minoNunber: number) => {
    let exist = false;
    const minoPlace = [];
    for (let a = 0; a < 10; a++) {
      for (let b = 0; b < 20; b++) {
        if (board[b][a] === minoNunber) {
          minoPlace.push([a, b]);
          if (board[b][a - 1] >= 10 || a - 1 === -1) {
            exist = true;
          }
        }
      }
    }
    if (exist === false) {
      for (const [ax, by] of minoPlace) {
        board[by][ax] = 0;
      }
      for (const [ax, by] of minoPlace) {
        board[by][ax - 1] = minoNunber;
      }
    }
    return board;
  };

  //ミノ止める(ミノナンバー * 10)
  //下に動かす
  const minoStayBottom = (board: number[][], minoNunber: number) => {
    let exist = false;
    const minoPlace = [];
    for (let a = 0; a < 10; a++) {
      for (let b = 0; b < 20; b++) {
        if (board[b][a] === minoNunber) {
          minoPlace.push([a, b]);
          // if (b === 18 || board[b + 2][a] >= 10) {
          //   exist = true;
          // }
          if (b === 19 || board[b + 1][a] > 10) {
            exist = true;
          }
        }
      }
    }
    // if (exist === true) {
    //   for (const [ax, by] of minoPlace) {
    //     board[by][ax] = 0;
    //   }
    //   for (const [ax, by] of minoPlace) {
    //     board[by + 1][ax] = minoNunber * 10 + minoNunber;
    //   }
    // }
    if (exist === true) {
      for (const [ax, by] of minoPlace) {
        board[by][ax] = 0;
      }
      for (const [ax, by] of minoPlace) {
        board[by][ax] = minoNunber * 10 + minoNunber;
        // minoAppear(board, minoNunber);
      }
    }
    if (exist === false) {
      for (const [ax, by] of minoPlace) {
        board[by][ax] = 0;
      }
      for (const [ax, by] of minoPlace) {
        board[by + 1][ax] = minoNunber;
      }
    }
    console.log(board);
    return board;
  };

  //右に動かす
  const minoStayRight = (board: number[][], minoNunber: number) => {
    let exist = false;
    const minoPlace = [];
    for (let a = 0; a < 10; a++) {
      for (let b = 0; b < 20; b++) {
        if (board[b][a] === minoNunber) {
          minoPlace.push([a, b]);
          if (board[b][a + 1] >= 10 || a + 1 === 10) {
            exist = true;
          }
        }
      }
    }
    if (exist === false) {
      for (const [ax, by] of minoPlace) {
        board[by][ax] = 0;
      }
      for (const [ax, by] of minoPlace) {
        board[by][ax + 1] = minoNunber;
      }
    }
    return board;
  };

  //ミノ回転(上ボタン)
  // const minoRotate = (board: number[][], minoNunber: number) => {
  //   for (let a = 0; a <= 10; a++) {
  //     for (let b = 0; b <= 20; b++) {
  //       if (minoNunber === 1) {
  //       }
  //     }
  //   }
  // };

  //ミノ スペースのやつ
  const hardDrop = (board: number[][], minoNunber: number) => {
    const minoPlace = [];
    const minList = [];
    for (let a = 0; a < 10; a++) {
      for (let b = 0; b < 20; b++) {
        if (board[b][a] === minoNunber) {
          minoPlace.push([a, b]);
          for (let blankNumber = 0; blankNumber < 20; blankNumber++) {
            if (b + blankNumber === 19 || board[b + blankNumber + 1][a] > 10) {
              minList.push(blankNumber);
              break;
            }
          }
        }
      }
    }
    const countedBlank = Math.min(...minList);
    console.log(countedBlank);
    for (const [ax, by] of minoPlace) {
      board[by][ax] = 0;
    }
    for (const [ax, by] of minoPlace) {
      board[by + countedBlank][ax] = minoNunber * 10 + minoNunber;
    }
    return board;
  };

  return {
    minoOpt,
    minoAppear,
    delateLine,
    minoStayLeft,
    minoStayBottom,
    minoStayRight,
    hardDrop,
  };
};

export default minoLack;
