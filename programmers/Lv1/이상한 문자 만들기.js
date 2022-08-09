const s = "try hello world";
function solution(s) {
  let start = true;
  let count = 0;
  const answer = [...s].map((data) => {
    if (data === " ") {
      start = true;
      count = 0;
      return ' ';
    }
    start = false;
    // 짝수번째
    if (count % 2 === 0) {
      count++;
      return data.toUpperCase();
    }
    // 홀수번째
    count++;
    return data.toLowerCase();
  }).join('')
  console.log(answer);
  return answer;
}

solution(s);