const n = 45;
function solution(n) {
  let answer = 0;
  let num3Reverse = [];
  while(n !== 0) {
    num3Reverse.push(n % 3);
    n = parseInt(n / 3);
  }

  let count = 0;
  let value;
  while(num3Reverse.length !== 0) {
    value = num3Reverse.pop();
    if(count === 0) answer += value;
    else answer += value*Math.pow(3, count);
    count++;
  }
  return answer;
}

solution(n);