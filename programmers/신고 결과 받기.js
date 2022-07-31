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
  const reportCount = Array(id_list.length).fill(0);
  const answer = Array(id_list.length).fill(0);

  // 2. 신고당한 횟수 계산 (id_list 순서대로 정리)
  for (let i = 0; i < uniqueReport.length; ++i) {
    const index = id_list.indexOf(uniqueReport[i].split(" ")[1]);
    reportCount[index]++;
  }

  // 3. 처리메일 보내주기
  reportCount.map((data, i) => {
    if(data >= k) { // k 이상 신고 당한 유저
      for(let j = 0; j < uniqueReport.length; ++j) {
        if(uniqueReport[j].split(" ")[1] === id_list[i]) {
          answer[id_list.indexOf(uniqueReport[j].split(" ")[0])] ++;
        }
      }
    }
  })
  return answer;
  
}

solution(id_list, report, k);
