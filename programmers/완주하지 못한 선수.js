/////////////////////////////////////////////////////////
// // 아래방법에서 동명이인을 걸러낸다해도 효율성테스트 통과 X

// const participant = ["leo", "kiki", "eden"];
// const completion = ["eden", "kiki"];

// function solution(participant, completion) {
//   let answer = "";
//   participant.filter(data => {
//     if (!completion.includes(data)) answer += data;
//     else completion.splice(completion.indexOf(data), 1);
//   });
//   return answer;
// }

// solution(participant, completion);

/////////////////////////////////////////////////////////

// // 이 방법은 동명이인을 걸러내지 못함

// const participant = ["leo", "kiki", "eden"];
// const completion = ["eden", "kiki"];

// function solution(participant, completion) {
// const answer = String(participant.filter((data) => !completion.includes(data)));
//   return answer;
// }

// solution(participant, completion);

/////////////////////////////////////////////////////////

// // 효율성테스트 통과 X
// const participant = ["leo", "kiki", "eden"];
// const completion = ["eden", "kiki"];

// function solution(participant, completion) {
//   const answer = [...participant];
//   completion.forEach((data) => {
//     answer.splice(answer.indexOf(data), 1);
//   })
//   return String(answer);
// }

// solution(participant, completion);
