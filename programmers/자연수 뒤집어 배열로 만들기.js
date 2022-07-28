const n = 12345;
function solution(n) {
  let answer = [];
  const str = n.toString();
  for(let i = 0; i <str.length; ++i) {
    answer.push(Number(str[i]))
  }
  answer.reverse();
  return answer;
}

solution(n);