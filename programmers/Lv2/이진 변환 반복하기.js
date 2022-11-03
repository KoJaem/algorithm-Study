const s = "110010101001";

function solution(s) {
  let zeroCount = 0;
  let count = 0;

  while (s !== "1") {
    // x 의 모든 0을 제거 후 길이를 2진수로 변환
    const originLen = s.length;
    s = s.replace(/0/g, "");
    zeroCount += originLen - s.length;
    s = s.length.toString(2);
    count++;
  }


  return [count, zeroCount];
}

solution(s);
