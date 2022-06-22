const absolutes = [4, 7, 12];
const signs = [true, false, true];

function solution(absolutes, signs) {
  signs.forEach((sign, i) => {
    if(!sign) {
      absolutes[i] = -1*absolutes[i];
    }
  })
  const answer = absolutes.reduce((acc, cur) => acc + cur, 0);
  return answer;
}

solution(absolutes, signs);