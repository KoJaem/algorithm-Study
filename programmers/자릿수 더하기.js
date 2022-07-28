const n = 123;

function solution(n)
{
  let answer = 0;
  const array = n.toString();
  for(let i = 0; i < array.length; ++i) {
    answer += Number(array[i]);
  }
  return answer;
}

solution(n);