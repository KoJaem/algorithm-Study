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

  
  for(let i = 0; i < survey.length; ++i) {
    const first = survey[i].slice(0, 1) // 첫번째 문자
    const second = survey[i].slice(1); // 두번째 문자

    const score = choices[i] - 4;

    if (score === 0) continue;
    
    if (score > 0) {
      obj[second] += score;
    } else {
      obj[first] += -score;
    }
  }

  answer += obj.R >= obj.T ? 'R' : 'T';
  answer += obj.C >= obj.F ? 'C' : 'F';
  answer += obj.J >= obj.M ? 'J' : 'M';
  answer += obj.A >= obj.N ? "A" : "N";
  

  return answer;
}

solution(survey, choices);
