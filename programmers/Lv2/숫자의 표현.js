const n = 15;

function solution(n) {
  let answer = 0;
  let sum = 0;
  let start = 1;
  const end = Math.ceil(n/2);
  for (let i = start; i <= end; ++i) {
    sum += i;
    if (sum === n) {
      answer++;
      sum = 0;
      start += 1;
      i = start;
    }
    if (sum > n) {
      sum = 0;
      start += 1;
      i = start;
    }
  }

  return n === 1 ? answer : answer + 1;
}

solution(n);
