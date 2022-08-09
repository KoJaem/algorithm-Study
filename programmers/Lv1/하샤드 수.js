const x = 12;
function solution(x) {
  let sum = 0;
  const str = x.toString();
  for (let i = 0; i < str.length; ++i) {
    sum += parseInt(str[i]);
  }
  return x % sum === 0 ? true : false;

}
solution(x);


