const s = "1234";

function solution(s) {
  let answer = 0;
  if (!isNaN(s[0])) return Number(s);

  if (s[0] === "+") return Number(s.slice(1, s.length));
  if (s[0] === "-") return -1 * Number(s.slice(1, s.length));

  return answer;
}

solution(s);
