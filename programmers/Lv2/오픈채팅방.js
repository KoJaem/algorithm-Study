const record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

function solution(record) {
  let answer = [];
  const nicknames = {};
  record.forEach(data => {
    const [action, id, name] = data.split(" ");
    if (action !== "Leave") nicknames[id] = name;
  });

  record.forEach(data => {
    const [action, id] = data.split(" ");
    switch (action) {
      case "Enter":
        answer.push(`${nicknames[id]}님이 들어왔습니다.`);
        break;
      case "Leave":
        answer.push(`${nicknames[id]}님이 나갔습니다.`);
        break;
    }
  });


  return answer;
}

solution(record);
