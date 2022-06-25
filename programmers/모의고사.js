// 다른분의 코드 (배울점이 많아보여서 가져옴)
function solution(answers) {
  let answer = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
  let a1 = [1, 2, 3, 4, 5];
  let a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // 코드해석 : a1[i % a1.length] 는 answer 의 index 를 a1 의 length 로 나머지연산을 하면서
  // 순회하도록 만들어주는것이고 (예를들어 i = 5 일때 0으로 순회하게끔)
  // 맨뒤에 .length 는 필터로 나온 배열의 length 를 계산함으로써 a1c 에 몇개가 맞았는지 들어가기 때문.
  let a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  let a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  let a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  let max = Math.max(a1c, a2c, a3c);

  if (a1c === max) {
    answer.push(1);
  }
  if (a2c === max) {
    answer.push(2);
  }
  if (a3c === max) {
    answer.push(3);
  }

  return answer;
}

// 아래코드는 내 코드

// const answers = [1, 2, 3, 4, 5];
// function solution(answers) {
//   let student1 = 0;
//   let student2 = 0;
//   let student3 = 0;

//   // 1번 학생
//   for (let i = 0; i < answers.length; ++i) {
//     if (i % 5 === 0) if (answers[i] === 1) student1++;
//     if (i % 5 === 1) if (answers[i] === 2) student1++;
//     if (i % 5 === 2) if (answers[i] === 3) student1++;

//     if (i % 5 === 3) if (answers[i] === 4) student1++;

//     if (i % 5 === 4) if (answers[i] === 5) student1++;

//     // 2번 학생

//     // 짝수일때
//     if (i % 2 === 0) if (answers[i] === 2) student2++;

//     // 짝수가 아닐때
//     if (i % 8 === 1) if (answers[i] === 1) student2++;

//     if (i % 8 === 3) if (answers[i] === 3) student2++;

//     if (i % 8 === 5) if (answers[i] === 4) student2++;

//     if (i % 8 === 7) if (answers[i] === 5) student2++;

//     // 3번 학생
//     if (i % 10 === 0 || i % 10 === 1) if (answers[i] === 3) student3++;

//     if (i % 10 === 2 || i % 10 === 3) if (answers[i] === 1) student3++;

//     if (i % 10 === 4 || i % 10 === 5) if (answers[i] === 2) student3++;

//     if (i % 10 === 6 || i % 10 === 7) if (answers[i] === 4) student3++;

//     if (i % 10 === 8 || i % 10 === 9) if (answers[i] === 5) student3++;
//   }

//   let arr = [student1, student2, student3];
//   const answer = [];

//   const max = Math.max(...arr);
//   if (student1 === max) answer.push(1);
//   if (student2 === max) answer.push(2);
//   if (student3 === max) answer.push(3);

//   return answer;
// }

// solution(answers);
