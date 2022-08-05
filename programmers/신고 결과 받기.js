const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
const k = 2;

function solution(id_list, report, k) {
  // 1. report 중복제거
  const uniqueReport = report.filter((data, i) => report.indexOf(data) === i);

  // const answer = Array(id_list.length).fill(0);
  const answer = [];
  
  // 2. 유저가 신고한 ID 와 신고당한 count 정리
  let user = {};
  id_list.forEach(id => {
    user[id] = {};
    user[id].report = [];
    user[id].count = 0;
    user[id].message = 0;
    uniqueReport.forEach(data => {
      if (data.split(" ")[0] === id) {
        user[id].report.push(data.split(" ")[1]);
      }
      if (data.split(" ")[1] === id) {
        user[id].count++;
      }
    });
  });

  // 3. 처리메일 몇갠지 갯수 세기
  for(id in user) { // 객체 반복문
    if(user[id].count >= k) {
      for(id2 in user) {
        if(user[id2].report.includes(id)) {
          user[id2].message ++;
        }
      }
    }
  }

  // 4. 처리메일 배열로 변환
  for(id in user) {
    answer.push(user[id].message);
  }

  return answer;
}

solution(id_list, report, k);

// const id_list = ["muzi", "frodo", "apeach", "neo"];
// const report = [
//   "muzi frodo",
//   "apeach frodo",
//   "frodo neo",
//   "muzi neo",
//   "apeach muzi",
// ];
// const k = 2;

// function solution(id_list, report, k) {
//   // 1. report 중복제거
//   const uniqueReport = report.filter((data, i) => report.indexOf(data) === i);
//   const reportCount = Array(id_list.length).fill(0);
//   const answer = Array(id_list.length).fill(0);
//   const reporter = [];
//   const reported = [];

//   // 2. 신고당한 횟수 계산 (id_list 순서대로 정리)
//   uniqueReport.forEach((data, i) => {
//     reporter.push(data.split(" ")[0]);
//     reported.push(data.split(" ")[1]);
//     reportCount[id_list.indexOf(reported[i])]++;
//   });

//   // 3. 처리메일 보내주기
//   let count;
//   reportCount.forEach((data, i) => {
//     count = 0;
//     if (data >= k) {
//       // k 이상 신고 당한 유저
//       for (let j = 0; j < uniqueReport.length; ++j) {
//         if (reported[j] === id_list[i]) {
//           answer[id_list.indexOf(uniqueReport[j].split(" ")[0])]++;
//         }
//       }
//     }
//     return count;
//   });

//   return answer;
// }

// solution(id_list, report, k);
