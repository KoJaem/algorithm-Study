function solution(arr) {
  // 다른분의 코드임
  // arr[index + 1] 은 결국 마지막에 undefined 가 나오는데
  // 앞에서부터 뒤로 비교하는거니까, arr[index] 는 마지막에 어차피 와도 되므로
  // 가능함. 감명깊었음.
  return arr.filter((val, index) => val != arr[index + 1]);
}

// // 효율성 테스트 성공
// // 의외로  for 문이 효율성 테스트에서 통과했네..
// const arr = [1, 1, 3, 3, 0, 1, 1];

// function solution(arr) {
//   let pre = null;
//   let answer = [];
//   for (let i = 0; i < arr.length; ++i) {
//     if (pre !== arr[i]) {
//       pre = arr[i];
//       answer.push(arr[i]);
//     }
//   }
//   return answer;
// }

// solution(arr);

//////////////////////////
// 효율성 테스트 2 실패
// const arr = [1, 1, 3, 3, 0, 1, 1];

// function solution(arr) {
//   let pre = null;
//   const answer = arr
//     .map(data => {
//       if (data !== pre) {
//         pre = data;
//         return data;
//       }
//     })
//     .filter(data => data !== undefined);

//   return answer;
// }

// solution(arr);
