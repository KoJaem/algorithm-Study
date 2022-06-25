const n = 5;
const lost = [2, 4];
const reserve = [1, 3, 6, 5];

function solution(n, lost, reserve) {
  lost.sort((a,b) => a-b);
  reserve.sort((a,b) => a-b);
  let answer = n - lost.length;
  let includeIdx;
  for(let i = 0; i < lost.length; ++i) {
    includeIdx = reserve.indexOf(lost[i]);
    if (includeIdx !== -1) {
      answer++;
      reserve[includeIdx] = null;
      continue;
    }
    for(let j = 0; j < reserve.length; ++j) {
      if(Math.abs(lost[i] - reserve[j]) <= 1) {
        answer++;
        reserve[j] = null;
        break;
      }
    }
  }
  return answer;
}

solution(n, lost, reserve);
