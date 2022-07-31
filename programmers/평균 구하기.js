const arr = [1,2,3,4];

function solution(arr) {
  return arr.reduce((pre, cur) => pre + cur, 0) / arr.length;
}

solution(arr);