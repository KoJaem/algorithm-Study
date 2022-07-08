const n = 6;
const arr1 = [46, 33, 33, 22, 31, 50];
const arr2 = [27, 56, 19, 14, 14, 10];

const parseNum2 = (num, n) => {
  let count = [];
  while (num !== 0) {
    count.push(num % 2);
    num = parseInt(num / 2);
  }
  count.reverse();
  while (count.length !== n) {
    count.unshift(0);
  }
  return count;
};

function solution(n, arr1, arr2) {
  let answer = Array(n).fill("");

  const map1 = arr1.map(data => parseNum2(data, n));

  const map2 = arr2.map(data => parseNum2(data, n));

  console.log(map1);
  console.log(map2);


  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      map1[i][j] === 1 || map2[i][j] === 1 ? (answer[i] += "#") : (answer[i] += " ");
    }
  }

  return answer;
}

solution(n, arr1, arr2);
