const survey = ["AN", "CF", "MJ", "RT", "NA"];
const choices = [5, 3, 2, 7, 5];

function solution(survey, choices) {
  let answer = "";
  const obj = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  

  for (let i = 0; i < survey.length; ++i) {
    const score = choices[i] - 4;
    if (score === 0) continue;

    if (score > 0) {
      obj[survey[i].slice(1)] += score;
    } else {
      obj[survey[i].slice(0, 1)] += -score;
    }
  }
  console.log(obj)
  // const sortObj = Object.entries(obj).sort((a, b) => b[1] - a[1]);



  return answer;
}

solution(survey, choices);
