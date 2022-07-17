const arr = [5, 9, 7, 10];
const divisor = 5;
function solution(arr, divisor) {
  const answer = arr.filter(data => data % divisor === 0).sort((a,b) => a-b)
  return answer.length === 0 ? [-1] : answer;
}

solution(arr, divisor);
