const s = "1234";

// 알고있는 내용인데 문제를 보고 바로 생각이 안나는 경우가 많은거같음.
function solution(s) {
  return s/1;
}

solution(s);

///////////////////////////////
// 원래코드

// const s = "1234";

// function solution(s) {
//   let answer = 0;
//   if (!isNaN(s[0])) return Number(s);

//   if (s[0] === "+") return Number(s.slice(1, s.length));
//   if (s[0] === "-") return -1 * Number(s.slice(1, s.length));

//   return answer;
// }

// solution(s);
