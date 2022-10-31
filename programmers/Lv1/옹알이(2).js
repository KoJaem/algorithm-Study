const babbling = ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"];

function solution(babbling) {
  let answer = 0;
  const all = ['aya', 'ye', 'woo', 'ma'];
  let prev;
  for(let i = 0; i < babbling.length; ++i) {
      prev = "";
    for(let j = 0; j < all.length; ++j) {
      if(babbling[i].slice(0, all[j].length) === all[j] && prev !== all[j]) {
        babbling[i] = babbling[i] = babbling[i].slice(all[j].length);
        prev = all[j];
        j = -1;
      }
    }
    babbling[i].length === 0 && answer++;
  }

  return answer;
}

solution(babbling);
