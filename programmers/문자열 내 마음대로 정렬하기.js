const strings = ["aaa", "aca", "aba", "aab", "ata"];
const n = 1;

function solution(strings, n) {
  const answer = strings.sort((a,b) => a > b ? -1 : 1).sort((a, b) => (a[n] > b[n] ? 1 : -1));
  return answer;
}

solution(strings, n);
