const progresses = [93, 30, 55];
const speeds = [1, 30, 5];

function solution(progresses, speeds) {
  let answer = [];
  let i = 0;
  while (true) {
    if (i >= progresses.length) break;

    for (let j = 0; j < progresses.length; ++j) {
      progresses[j] += speeds[j];
    }

    if (progresses[i] >= 100) {
      let count = 0;
      for (let j = i; j < progresses.length; ++j) {
        if (progresses[j] >= 100) {
          count++;
        } else break;
      }
      answer.push(count);
      i+=count;
    }
  }


  return answer;
}

solution(progresses, speeds);
