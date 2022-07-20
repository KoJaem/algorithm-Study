const n = 10;

function solution(n) {
  let answer = 0;
  out: 
  for (let i = 2; i <= n; ++i) {
    for (let j = 2; j <= Math.sqrt(i); ++j) {
      if (i % j === 0) continue out;
    }
    answer++;
  }
  return answer;
}

solution(n);
