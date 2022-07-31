const arr1 = [[1,2],[2,3]];
const arr2 = [[3,4],[5,6]];

function solution(arr1, arr2) {

  // 1번째 풀이

  // const answer = Array.from(Array(arr1.length), () => new Array(arr1[0].length));
  // for(let i = 0; i < arr1.length; ++i) {
  //   for(let j = 0; j < arr1[i].length; ++j) {
  //     answer[i][j] = arr1[i][j] + arr2[i][j];
  //   }
  // }

  // 2번째 풀이
  const answer = arr1.map((r, i) => (
    r.map((data, j) => (
      data + arr2[i][j]
    ))
  ))
  return answer;
}

solution(arr1, arr2);