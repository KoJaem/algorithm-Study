const a = [1, 2, 3, 4];
const b = [-3, -1, 0, 2];

function solution(a, b) {
  const answer = a.reduce((acc, cur, i) => acc + cur*b[i] ,0);
  return answer;
}

solution(a, b);
