const sizes = [[60, 50], [30, 70], [60, 30], [80, 40]]

const arraySwap = (array, i) => {
  let temp = array[i][0];
  array[i][0] = array[i][1];
  array[i][1] = temp;
}

function solution(sizes) {
  let width = 0;
  let heights = [];
  for (let i = 0; i < sizes.length; ++i) {
    const large = Math.max(...sizes[i]);
    if (large > width) width = large;
    if (sizes[i].indexOf(large) === 1) arraySwap(sizes, i);

    heights.push(sizes[i][1]);
  }

  const answer = width * Math.max(...heights);
  return answer;
}

solution(sizes);