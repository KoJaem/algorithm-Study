const numbers = [3, 30, 34, 5, 9];
function solution(numbers) {
  let answer = numbers
    .map(c => c + "") // 숫자들을 문자로 변환
    .sort((a, b) => b + a - (a + b)) // 문자로 변환된 숫자를 연결하여 비교 정렬
    .join(""); // 문자열 합치기

  return answer[0] === "0" ? "0" : answer; // answer 가 0일 경우 0 출력, 아닐경우 answer 출력
}

solution(numbers);
