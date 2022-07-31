const n = 3;
const m = 12;

function solution(n, m) {
  let maxFactor = 1;
  let minMultiple = 0;
  
  for(let i = 1; i <= Math.min(n,m); ++i) {
    if(n % i === 0 && m % i === 0) {
      maxFactor = i;
    }
  }
  for(let i = n*m; i >= Math.min(n,m); --i) {
    if(i % n === 0 && i % m ===0) {
      minMultiple = i;
    }
  }

  return [maxFactor, minMultiple];
}

solution(n, m);
