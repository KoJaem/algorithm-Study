const n = 3;
const m = 12;

function solution(n, m) {
  let maxFactor = 1;
  let minMultiple;

  // 최대 공약수
  for (let i = 1; i <= Math.min(n, m); ++i) {
    if (n % i === 0 && m % i === 0) {
      maxFactor = i;
    }
  }

  // 최소 공배수
  // for(let i = n*m; i >= Math.min(n,m); --i) {
  //   if(i % n === 0 && i % m ===0) {
  //     minMultiple = i;
  //   }
  // }

  // 유클리드 호제법 (A,B의 최소공배수) = A * B / (A,B의 최대공약수)
  minMultiple = n*m / maxFactor;

  return [maxFactor, minMultiple];
}

solution(n, m);
