const s = "aabbaccc";
function solution(s) {
  let answer = Infinity;
  let array;
  let string;

  for (let i = 0; i < s.length; ++i) {
    let start = 0;
    let count = i + 1;
    let j = i + 1;
    array = [];
    string = "";

    while (j < s.length + count) {
      array.push(s.slice(start, j));
      j += count;
      start += count;
    }

    count = 1;

    for (j = 0; j < array.length; ++j) {
      if (array[j] === array[j + 1]) {
        count++;
      } else {
        if (count === 1) {
          string += array[j];
        } else {
          string += count + array[j];
        }
        count = 1;
      }
    }
    if (answer > string.length) answer = string.length;
  }

  return answer;
}

solution(s);
