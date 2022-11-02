const n = 8;
const a = 1;
const b = 2;

const checkMeet = (large, small) => {
  if (large - small === 1) {
    if (large % 2 === 0 && small % 2 === 1) {
      return true;
    }
  }
  return false
}

function solution(n, a, b) {
  let answer = 1;
  let large = a > b ? a : b;
  let small = a > b ? b : a;
  
  // 처음에 성공하는 경우
  if(checkMeet(large, small)) return answer;

  while (true) {
    answer++;
    large = (large % 2 === 0 ? large : large + 1) / 2;
    small = (small % 2 === 0 ? small : small + 1) / 2;

    if (checkMeet(large, small)) return answer;
  }
}

// solution(n, a, b);
console.log(solution(n, a, b));
