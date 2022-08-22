const rows = 6;
const columns = 6;
const queries = [
  [2, 2, 5, 4],
  [3, 3, 6, 6],
  [5, 1, 6, 3],
];

function solution(rows, columns, queries) {
  let answer = [];
  let arr = Array.from(Array(rows), () => new Array(columns));

  // 배열 값 넣기
  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < columns; ++j) {
      arr[i][j] = i * columns + j + 1;
    }
  }

  for (let i = 0; i < queries.length; ++i) {
    const rStart = queries[i][0] - 1;
    const cStart = queries[i][1] - 1;
    const rEnd = queries[i][2] - 1;
    const cEnd = queries[i][3] - 1;
    let prev = arr[rStart][cStart];


    let min = prev;
    // 위쪽 테두리
    for (let i = cStart + 1; i <= cEnd; ++i) {
      // arr[rStart][i]
      // [arr[rStart][i], prev] = [prev, arr[rStart][i]];
      const cur = arr[rStart][i];
      if (min > cur) min = cur;
      arr[rStart][i] = prev;
      prev = cur;
    }

    // 오른쪽 테두리
    for (let i = rStart + 1; i <= rEnd; ++i) {
      // arr[i][cEnd]
      // [arr[i][cEnd], prev] = [prev, arr[i][cEnd]];
      const cur = arr[i][cEnd];
      if (min > cur) min = cur;
      arr[i][cEnd] = prev;
      prev = cur;
    }
    // 아래쪽 테두리)
    for (let i = cEnd - 1; i >= cStart; --i) {
      // arr[rEnd][i];
      const cur = arr[rEnd][i];
      if (min > cur) min = cur;
      arr[rEnd][i] = prev;
      prev = cur;
    }
    // 왼쪽 테두리
    for (let i = rEnd - 1; i >= rStart; --i) {
      // arr[i][cStart]
      const cur = arr[i][cStart];
      if (min > cur) min = cur;
      arr[i][cStart] = prev;
      prev = cur;
    }
    answer.push(min);
  }

  return answer;
}

solution(rows, columns, queries);
