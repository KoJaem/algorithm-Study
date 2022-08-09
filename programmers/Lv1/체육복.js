// 테스트 케이스를 내가 만들어서 실행해보는것이 도움이 됐음.

const n = 10;
const lost = [1, 2, 3, 4, 5, 6, 9, 10];
const reserve = [1, 2, 3, 4, 5, 6, 7, 10];

function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  let answer = n - lost.length;
  let includeIdx;

  for (let i = 0; i < lost.length; ++i) {
    includeIdx = reserve.indexOf(lost[i]);
    if (includeIdx !== -1) {
      answer++;
      lost[i] = null;
      reserve[includeIdx] = null;
      continue;
    }
  }
  for (let i = 0; i < lost.length; ++i) {
    for (let j = 0; j < reserve.length; ++j) {
      if (reserve[j] !== null && Math.abs(lost[i] - reserve[j]) <= 1) {
        answer++;
        reserve[j] = null;
        break;
      }
    }
  }
  return answer;
}

solution(n, lost, reserve);
