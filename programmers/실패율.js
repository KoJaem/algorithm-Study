const N = 3;
const stages = [1,2,2];

function solution(N, stages) {
  let fail = Array(N).fill(0);
  let challenger = Array(N).fill(0);
  let failRate = [];
  stages.forEach((stage) => {
    for (let i = 0; i < stage; ++i) challenger[i]++; // 클리어한 사람이 있으면 마지막 인덱스는 NaN
    if (stage > N) return;
    fail[stage - 1]++;
  })
  
  for(let i = 0; i < N; ++i) {
    if(challenger[i] === 0) {
      failRate.push(0)
      continue;
    }
    failRate.push(fail[i] / challenger[i]);
  }
  let answer = [];
  
  for(let i = 0; i < N; ++i) {
    const maxIndex = failRate.indexOf(Math.max(...failRate));
    answer.push(maxIndex + 1);
    failRate[maxIndex] = null;
  }
  return answer;

}

solution(N, stages);