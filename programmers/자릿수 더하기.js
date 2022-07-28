const n = 123;

function solution(n)
{
  let answer = n % 10;
  const length = n.toString().length;
  for(let i = length-1; i > 0; --i) {
    const pow = Math.pow(10, i);
    answer += Math.floor((n / pow) % 10);
  }
  return answer;
}

solution(n);