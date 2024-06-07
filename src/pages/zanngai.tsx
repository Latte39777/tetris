// function number1() {
//   const iMino = [[1], [1], [1], [1]];
//   return iMino;
// }
// function number2() {
//   const oMino = [
//     [2, 2],
//     [2, 2],
//   ];
//   return oMino;
// }

// function number3() {
//   const sMino = [
//     [0, 3, 3],
//     [3, 3, 0],
//   ];
//   return sMino;
// }

// function number4() {
//   const zMino = [
//     [4, 4, 0],
//     [0, 4, 4],
//   ];
//   return zMino;
// }

// function number5() {
//   const lMino = [
//     [0, 0, 5],
//     [5, 5, 5],
//   ];
//   return lMino;
// }

// function number6() {
//   const jMino = [
//     [6, 0, 0],
//     [6, 6, 6],
//   ];
//   return jMino;
// }

// function number7() {
//   const tMino = [
//     [0, 7, 0],
//     [7, 7, 7],
//   ];
//   return tMino;
// }

const minoMovement = (board: number[][], minoNunber: number, direction: number) => {
  const movedBoard = structuredClone(board);
  for (let a = 0; a <= 10; a++) {
    for (let b = 0; b <= 20; b++) {
      //左に動かす
      if (direction === 1) {
        if (board[b][a] === minoNunber && board[b][a - 1] !== undefined) {
          board[b][a - 1] = minoNunber;
        }
      }
      //下に動かす
      if (direction === 2) {
        if (board[b][a] === minoNunber && board[b - 1][a] !== undefined) {
          board[b - 1][a] = minoNunber;
        }
      }
      //右に動かす
      if (direction === 0) {
        if (board[b][a] === minoNunber && board[b][a + 1] !== undefined) {
          board[b][a + 1] = minoNunber;
        }
      }
    }
  }
  return board;
};
