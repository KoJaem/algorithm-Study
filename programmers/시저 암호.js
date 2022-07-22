const s = "AaZz";
const n = 25;

// charCodeAt : string 의 아스키코드 반환
// String.fromCharCode(n) : 해당값을 아스키코드에 해당하는 값으로 반환
function solution(s, n) {
  const answer = [...s].map(data => {
    while (n > 26) n -= 26;
    if(data === ' ') return ' '
    const ASCII = data.charCodeAt();
    // 대문자
    if (ASCII >= 65 && ASCII <= 90) {
      if (ASCII + n > 90) return String.fromCharCode(ASCII - 26 + n);
      return String.fromCharCode(ASCII + n);
    }
    // 소문자
    if (ASCII >= 97 && ASCII <= 122) {
      if (ASCII + n > 122) return String.fromCharCode(ASCII - 26 + n);
      return String.fromCharCode(ASCII + n);
    }
  }).join('');
  return answer;
}

solution(s, n);
