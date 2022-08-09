const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

const moves = [1, 5, 3, 5, 1, 2, 1, 4];
// result = 4;
function solution(board, moves) {
  let answer = 0;
  let stack = [];


  moves.forEach(move => {
    for (let i = 0; i < board.length; ++i) {
      if (board[i][move - 1] !== 0) {
        stack.push(board[i][move - 1]);
        board[i][move - 1] = 0;
        break;
      }
    }
  });
  
  let i = 0;
  while(i<stack.length-1) {
    if(stack[i] === stack[i+1]) {
      stack.splice(i, 2);
      answer += 2;
      i = -1;
    }
    i++;
  }
  return answer;
}

solution(board, moves);
