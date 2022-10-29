ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];

function solution(ingredient) {
  let answer = 0;
  for (let i = 0; i <= ingredient.length - 4; ++i) {
    if (ingredient.slice(i, i + 4).join("") === "1231") {
      answer++;
      ingredient.splice(i, 4);
      i -= 3;
    }
  }
  return answer;
}

solution(ingredient);

// // 시간초과
// function solution(ingredient) {
//   let answer = 0;
//   let str = ingredient.join("");

//   while (true) {
//     const index = str.indexOf("1231");
//     if (index !== -1) {
//       str = str.slice(0, index) + str.slice(index + 4);
//       answer++;
//     } else return answer;
//   }
// }
