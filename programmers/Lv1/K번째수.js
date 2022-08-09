// 중요! sort 할때 그냥 sort() 를 하면
// [1,10,101,61,45].sort() 를 하는 경우에는 출력값이
// [ 1, 10, 101, 45, 61 ] 이런식으로 나옴. (앞에서부터 해석하기 때문)
// 그러므로 sort((a,b) => a-b) 이렇게 설정해줘야함.

const arr = [1, 5, 2, 6, 3, 7, 4];
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

function solution(array, commands) {
  let answer = [];
  for(let i = 0; i < commands.length; ++i) {
      answer.push(array.slice(commands[i][0]-1, commands[i][1]).sort((a,b) => a-b)[commands[i][2]-1]);
  }
  return answer;
}

solution(arr, commands);