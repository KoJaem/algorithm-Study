const new_id = "...!@BaT#*..y.abcdefghijklm";
function solution(new_id) {
  const answer = new_id
    .toLowerCase() // 1. 소문자로 치환
    .replace(/[^\w\.\-]/g, "") // 2. 소문자, 숫자, -, _, . 를 제외하고 제거 (w : 알파벳, 숫자, _ 를 의미함.
    .replace(/[\.]{2,}/g, ".") // 3. 연속되는 마침표는 마침표 하나로 변경
    .replace(/^\.|\.$/, "") // 4. 처음이나 끝에 마침표가 있으면 제거
    .replace(/^$/, "a") // 5. 빈 문자열이면 "a" 대입
    .slice(0, 15) // 6. 15글자로 자르기
    .replace(/\.$/, ""); // 7. slice 이후 마지막에 . 이 있으면 제거

  const length = answer.length;
  return length > 2 ? answer : answer + answer.charAt(length - 1).repeat(3 - length);
}

solution(new_id);
