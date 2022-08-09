const s = 'abcde';

function solution(s) {
  let answer = "";
  const middleIdx = (s.length - 1) / 2;
  // Math.floor : 소수점 내림
  // math.ceil : 소수점 올림
  middleIdx % 1 === 0 ? answer = s[middleIdx] : answer = s[Math.floor(middleIdx)] + s[Math.ceil(middleIdx)] ;
  return answer;
}

solution(s);