const w = 8;
const h = 12;

function solution(w, h) {
  let answer = 1;
  let maxFactor = 1;
  for(let i = 1; i <= Math.min(w,h); ++i) {
    if(w % i === 0 && h % i === 0) maxFactor = i;
  }
  answer = w*h - (w+h-maxFactor);
  return answer;
}

solution(w, h);