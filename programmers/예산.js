const d = [2, 2, 3, 3];
const budget = 10;

function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; ++i) {
    if (budget < d[i]) break;
    budget -= d[i];
    answer++;
  }
  return answer;
}

solution(d, budget);
