const A = [1, 4, 2];
const B = [5, 4, 4];

function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);
  
  while(A.length > 0) {
    answer += A.pop() * B.pop();
  }

  return answer;
}

solution(A, B);
