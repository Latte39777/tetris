const minoShape = () => {
  const minoRotateShape = (minoNumber: number, x: number, y: number, board: number[][]) => {
    if (minoNumber === 1) {
      //ミノ1 0回転
      if (
        board[y]?.[x + 3] === minoNumber &&
        board[y]?.[x + 2] === minoNumber &&
        board[y]?.[x + 1] === minoNumber &&
        board[y]?.[x] === minoNumber
      ) {
        board[y][x] = 0;
        board[y][x + 1] = 0;
        board[y][x + 2] = 0;
        board[y][x + 3] = 0;
        //中心
        board[y][x + 1] = minoNumber;

        board[y - 1][x + 1] = minoNumber;
        board[y + 1][x + 1] = minoNumber;
        board[y + 2][x + 1] = minoNumber;
      }
      //ミノ1 1回転
      if (
        board[y][x] === minoNumber &&
        board[y + 1][x] === minoNumber &&
        board[y + 2][x] === minoNumber &&
        board[y + 3][x] === minoNumber
      ) {
        board[y][x] = 0;
        board[y + 1][x] = 0;
        board[y + 2][x] = 0;
        board[y + 3][x] = 0;
        //中心
        board[y + 1][x] = minoNumber;

        board[y + 1][x - 1] = minoNumber;
        board[y + 1][x + 1] = minoNumber;
        board[y + 1][x + 2] = minoNumber;
      }
    }

    if (minoNumber === 3) {
      //ミノ3 0回転
      if (
        board[y][x] === minoNumber &&
        board[y][x + 1] === minoNumber &&
        board[y - 1][x - 1] === minoNumber &&
        board[y - 1][x] === minoNumber
      ) {
        board[y][x] = 0;
        board[y][x + 1] = 0;
        board[y - 1][x - 1] = 0;
        board[y - 1][x] = 0;
        //中心
        board[y][x] = minoNumber;

        board[y - 1][x - 1] = 0;
        board[y][x - 1] = 0;
        board[y + 1][x] = 0;
      }
      //ミノ3 1回転
      if (
        board[y][x] === minoNumber &&
        board[y - 1][x] === minoNumber &&
        board[y - 1][x + 1] === minoNumber &&
        board[y - 2][x + 1] === minoNumber
      ) {
        board[y][x] = 0;
        board[y - 1][x] = 0;
        board[y - 1][x + 1] = 0;
        board[y - 2][x + 1] = 0;
        //中心
        board[y - 1][x + 1] = minoNumber;

        board[y - 1][x + 2] = minoNumber;
        board[y][x + 1] = minoNumber;
        board[y][x] = minoNumber;
      }
    }

    if (minoNumber === 4) {
      //ミノ4 0回転
      if (
        board[y][x] === minoNumber &&
        board[y][x + 1] === minoNumber &&
        board[y - 1][x + 1] === minoNumber &&
        board[y - 2][x + 2] === minoNumber
      ) {
        board[y][x] = 0;
        board[y][x + 1] = 0;
        board[y - 1][x + 1] = 0;
        board[y - 2][x + 2] = 0;
        //中心
        board[y][x + 1] = minoNumber;

        board[y - 1][x + 1] = minoNumber;
        board[y][x] = minoNumber;
        board[y + 1][x] = minoNumber;
      }
      //ミノ4 1回転
      if (
        board[y][x] === minoNumber &&
        board[y - 1][x - 1] === minoNumber &&
        board[y - 1][x] === minoNumber &&
        board[y - 2][x - 1] === minoNumber
      ) {
        board[y][x] = 0;
        board[y - 1][x - 1] = 0;
        board[y - 1][x] = 0;
        board[y - 2][x - 1] = 0;
        //中心
        board[y + 1][x] = minoNumber;

        board[y + 1][x - 1] = minoNumber;
        board[y + 2][x] = minoNumber;
        board[y + 2][x + 1] = minoNumber;
      }
    }

    if (minoNumber === 5) {
      //ミノ5 0回転
      if (
        board[y][x] === minoNumber &&
        board[y - 1][x - 2] === minoNumber &&
        board[y - 1][x - 1] === minoNumber &&
        board[y - 1][x] === minoNumber
      ) {
        board[y][x] = 0;
        board[y - 1][x - 2] = 0;
        board[y - 1][x - 1] = 0;
        board[y - 1][x] = 0;
        //中心
        board[y + 1][x - 1] = minoNumber;

        board[y][x - 1] = minoNumber;
        board[y - 1][x - 1] = minoNumber;
        board[y - 1][x] = minoNumber;
      }
      //ミノ5 1回転
      if (
        board[y][x] === minoNumber &&
        board[y - 1][x - 2] === minoNumber &&
        board[y - 1][x - 1] === minoNumber &&
        board[y - 1][x] === minoNumber
      ) {
        board[y][x] = 0;
        board[y - 1][x - 2] = 0;
        board[y - 1][x - 1] = 0;
        board[y - 1][x] = 0;
        //中心
        board[y + 1][x] = minoNumber;

        board[y + 1][x - 1] = minoNumber;
        board[y + 1][x + 1] = minoNumber;
        board[y + 2][x - 1] = minoNumber;
      }
      //ミノ5 2回転
      if (
        board[y][x] === minoNumber &&
        board[y - 1][x] === minoNumber &&
        board[y - 2][x] === minoNumber &&
        board[y - 2][x + 1] === minoNumber
      ) {
        board[y][x] = 0;
        board[y - 1][x] = 0;
        board[y - 2][x] = 0;
        board[y - 2][x + 1] = 0;
        //中心
        board[y][x + 1] = minoNumber;

        board[y - 1][x] = minoNumber;
        board[y - 1][x + 1] = minoNumber;
        board[y + 1][x + 1] = minoNumber;
      }
      //ミノ5 3回転
      if (
        board[y][x] === minoNumber &&
        board[y][x + 1] === minoNumber &&
        board[y][x + 2] === minoNumber &&
        board[y - 1][x] === minoNumber
      ) {
        board[y][x] = 0;
        board[y][x + 1] = 0;
        board[y][x + 2] = 0;
        board[y - 1][x] = 0;
        //中心
        board[y + 1][x + 1] = minoNumber;

        board[y][x + 2] = minoNumber;
        board[y + 1][x + 2] = minoNumber;
        board[y + 1][x] = minoNumber;
      }
    }

    if (minoNumber === 6) {
      //ミノ6 0回転
      if (
        board[y][x] === minoNumber &&
        board[y - 1][x] === minoNumber &&
        board[y - 1][x + 1] === minoNumber &&
        board[y - 1][x + 2] === minoNumber
      ) {
        board[y][x] = 0;
        board[y - 1][x] = 0;
        board[y - 1][x + 1] = 0;
        board[y - 1][x + 2] = 0;
        //中心
        board[y + 1][x + 1] = minoNumber;

        board[y][x + 1] = minoNumber;
        board[y][x + 2] = minoNumber;
        board[y + 2][x + 1] = minoNumber;
      }
      //ミノ6 1回転
      if (
        board[y][x] === minoNumber &&
        board[y][x + 1] === minoNumber &&
        board[y - 1][x] === minoNumber &&
        board[y - 2][x] === minoNumber
      ) {
        board[y][x] = 0;
        board[y][x + 1] = 0;
        board[y - 1][x] = 0;
        board[y - 2][x] = 0;
        //中心
        board[y + 1][x] = minoNumber;

        board[y + 1][x - 1] = minoNumber;
        board[y + 1][x + 1] = minoNumber;
        board[y + 2][x + 1] = minoNumber;
      }
      //ミノ6 2回転
      if (
        board[y][x] === minoNumber &&
        board[y][x + 1] === minoNumber &&
        board[y][x + 2] === minoNumber &&
        board[y - 1][x + 2] === minoNumber
      ) {
        board[y][x] = 0;
        board[y][x + 1] = 0;
        board[y][x + 2] = 0;
        board[y - 1][x + 2] = 0;
        //中心
        board[y][x + 1] = minoNumber;

        board[y - 1][x + 1] = minoNumber;
        board[y + 1][x + 1] = minoNumber;
        board[y + 1][x] = minoNumber;
      }
      //ミノ6 3回転
      if (
        board[y][x] === minoNumber &&
        board[y - 1][x] === minoNumber &&
        board[y - 2][x] === minoNumber &&
        board[y - 2][x - 1] === minoNumber
      ) {
        board[y][x] = 0;
        board[y - 1][x] = 0;
        board[y - 2][x] = 0;
        board[y - 2][x - 1] = 0;
        //中心
        board[y + 1][x] = minoNumber;

        board[y][x - 1] = minoNumber;
        board[y + 1][x - 1] = minoNumber;
        board[y + 1][x + 1] = minoNumber;
      }
    }

    if (minoNumber === 7) {
      //ミノ7 0回転
      if (
        board[y][x] === minoNumber &&
        board[y][x - 1] === minoNumber &&
        board[y + 1][x] === minoNumber &&
        board[y + 1][x + 1] === minoNumber
      ) {
        board[y][x] = 0;
        board[y][x - 1] = 0;
        board[y + 1][x] = 0;
        board[y + 1][x + 1] = 0;
        //中心
        board[y + 1][x] = minoNumber;

        board[y][x] = minoNumber;
        board[y + 1][x + 1] = minoNumber;
        board[y + 2][x] = minoNumber;
      }
      //ミノ7 1回転
      if (
        board[y][x] === minoNumber &&
        board[y - 1][x] === minoNumber &&
        board[y - 1][x + 1] === minoNumber &&
        board[y - 2][x] === minoNumber
      ) {
        board[y][x] = 0;
        board[y - 1][x] = 0;
        board[y - 1][x + 1] = 0;
        board[y - 2][x] = 0;
        //中心
        board[y + 1][x] = minoNumber;

        board[y + 1][x - 1] = minoNumber;
        board[y + 1][x + 1] = minoNumber;
        board[y + 2][x] = minoNumber;
      }
      //ミノ7 2回転
      if (
        board[y][x] === minoNumber &&
        board[y][x + 1] === minoNumber &&
        board[y][x + 2] === minoNumber &&
        board[y - 1][x + 1] === minoNumber
      ) {
        board[y][x] = 0;
        board[y][x + 1] = 0;
        board[y][x + 2] = 0;
        board[y - 1][x + 1] = 0;
        //中心
        board[y][x + 1] = minoNumber;

        board[y - 1][x + 1] = minoNumber;
        board[y][x] = minoNumber;
        board[y + 1][x + 1] = minoNumber;
      }
      //ミノ7 3回転
      if (
        board[y][x] === minoNumber &&
        board[y - 1][x - 1] === minoNumber &&
        board[y - 1][x] === minoNumber &&
        board[y - 2][x] === minoNumber
      ) {
        board[y][x] = 0;
        board[y - 1][x - 1] = 0;
        board[y - 1][x] = 0;
        board[y - 2][x] = 0;
        //中心
        board[y + 1][x] = minoNumber;

        board[y][x] = minoNumber;
        board[y + 1][x - 1] = minoNumber;
        board[y + 1][x + 1] = minoNumber;
      }
    }

    return board;
  };

  return { minoRotateShape };
};

export default minoShape;
