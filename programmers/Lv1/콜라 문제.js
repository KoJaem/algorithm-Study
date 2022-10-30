const a = 2;
const b = 1;
const n = 20;

function solution(a, b, n) {
  let answer = 0; // 바꿔먹은 콜라갯수
  let current = 0; // 현재 교환한 콜라 갯수
  let remain = n; // 남은 빈병갯수


  while (parseInt(remain / a) >= 1) {
    current = parseInt(remain / a) * b;
    answer += current;

    remain += current - parseInt(remain / a) * a;
  }

  return answer;
}

solution(a, b, n);