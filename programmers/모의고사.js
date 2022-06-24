const answers = [1, 2, 3, 4, 5];
function solution(answers) {
  let student1 = 0;
  let student2 = 0;
  let student3 = 0;

  // 1번 학생
  for (let i = 0; i < answers.length; ++i) {
    if (i % 5 === 0) {
      if (answers[i] === 1) student1++;
      continue;
    }
    if (i % 5 === 1) {
      if (answers[i] === 2) student1++;
      continue;
    }
    if (i % 5 === 2) {
      if (answers[i] === 3) student1++;
      continue;
    }
    if (i % 5 === 3) {
      if (answers[i] === 4) student1++;
      continue;
    }
    if (i % 5 === 4) {
      if (answers[i] === 5) student1++;
      continue;
    }
  }

  // 2번 학생
  for (let i = 0; i < answers.length; ++i) {
    if (i % 2 === 0) {
      // 짝수일때
      if (answers[i] === 2) student2++;
      continue;
    }
    // 짝수가 아닐때
    if (i % 8 === 1) {
      if (answers[i] === 1) student2++;
      continue;
    }
    if (i % 8 === 3) {
      if (answers[i] === 3) student2++;
      continue;
    }
    if (i % 8 === 5) {
      if (answers[i] === 4) student2++;
      continue;
    }
    if (i % 8 === 7) {
      if (answers[i] === 5) student2++;
      continue;
    }
  }

  // 3번 학생
  for (let i = 0; i < answers.length; ++i) {
    if (i % 10 === 0 || i % 10 === 1) {
      if (answers[i] === 3) student3++;
      continue;
    }
    if (i % 10 === 2 || i % 10 === 3) {
      if (answers[i] === 1) student3++;
      continue;
    }
    if (i % 10 === 4 || i % 10 === 5) {
      if (answers[i] === 2) student3++;
      continue;
    }
    if (i % 10 === 6 || i % 10 === 7) {
      if (answers[i] === 4) student3++;
      continue;
    }
    if (i % 10 === 8 || i % 10 === 9) {
      if (answers[i] === 5) student3++;
      continue;
    }
  }

  let arr = [student1, student2, student3];
  const answer = [];

  const max = Math.max(...arr);
  if (student1 === max) answer.push(1);
  if (student2 === max) answer.push(2);
  if (student3 === max) answer.push(3);


  return answer;
}

solution(answers);
