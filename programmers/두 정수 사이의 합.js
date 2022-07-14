const a = 3;
const b = 10;

function solution(a, b) {
  let answer = 0;
  if(a === b) return a; // 같은 숫자인경우

  const diff = Math.abs(a-b);
  const middle = (a+b) / 2;
  // a-b 가 짝수인경우
  if (diff % 2 === 0) {
    answer = (diff / 2) * (a + b) + middle;
  }

  // a-b 가 홀수인경우
  else {
    answer = (Math.ceil(diff / 2)) * (a+b);
  }
  return answer;
}

solution(a, b);