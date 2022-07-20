// String.prototype.repeat() : 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환
const n = 3;

function solution(n) {
  return "수박".repeat(n / 2 + 1).slice(0, n);
}

solution(n);

/////////////////////////////////////////////////////
// 원래코드
// const n = 3;

// function solution(n) {
//   let answer = "";
//   for(let i = 0; i < n; ++i) {
//     i % 2 === 0 ? answer += "수" : answer+= "박"
//   }
//   return answer;
// }

// solution(n);
