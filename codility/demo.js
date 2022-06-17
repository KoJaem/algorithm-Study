// N개의 정수 중 A배열이 주어지면 A에서 발생하지 않은 가장 작은 양의 정수를 리턴하세요.
// 예를 들어 A= [1,3,6,4,1,2]이면 함수는 5를 리턴해야 합니다.
// A = [1,2,3]이면 함수는 4를 리턴해야 합니다.
// A = [-1,-3]이면 함수는 1을 리턴해야 합니다.

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
const array = [1, 2, 3];
function solution(array) {
  let count = 1;
  for (count; count <= array.length; ++count) {
    if (!array.includes(count)) {
      return count;
    }
  }
  return count;
}

solution(array);
