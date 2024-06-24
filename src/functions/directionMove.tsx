const gameMove = () => {
  //左に動かす
  const minoStayLeft = (board: number[][], minoNunber: number) => {
    let exist = false;
    const minoPlace = [];
    for (let ax = 0; ax < 10; ax++) {
      for (let b = 0; b < 20; b++) {
        if (board[b][ax] === minoNunber) {
          minoPlace.push([ax, b]);
          if (board[b][ax - 1] >= 10 || ax - 1 === -1) {
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
          if (b === 19 || board[b + 1][a] > 10) {
            exist = true;
          }
        }
      }
    }
    if (exist === true) {
      for (const [ax, by] of minoPlace) {
        board[by][ax] = 0;
      }
      for (const [ax, by] of minoPlace) {
        board[by][ax] = minoNunber * 10 + minoNunber;
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
  //     for (let b = 0; b <= 20; b++) {}
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
    minoStayLeft,
    minoStayBottom,
    minoStayRight,
    hardDrop,
  };
};

export default gameMove;
