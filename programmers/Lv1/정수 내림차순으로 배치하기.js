const n = 118372;

function solution(n) {
  let answer;
  const arr = [];
  const str = n.toString();
  for(let i = 0; i < str.length; ++i) {
    arr.push(Number(str[i]))
  }
  answer = arr.sort((a, b) => b-a).join('');
  return Number(answer);
}

solution(n);
