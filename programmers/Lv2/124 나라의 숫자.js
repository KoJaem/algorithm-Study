const n = 20;

function solution(n) {
  let answer = "";
  let rest;

  while (n > 0) {
    rest = n % 3;
    n = Math.floor(n / 3);
    if (rest === 0) {
      n -= 1;
      rest = 4;
    }
    answer = rest + answer;
  }
  return answer;
}

solution(n);

/*
10진법    124 나라    3진법       4진법
1	        1           1           1
2	        2           2           2
3       	4           10          3
4	        11          11          10
5	        12          12          11
6	        14          20          12
7       	21          21          13
8	        22          22          20
9	        24          100         21
10	      41          101         22
11	      42          102         23
12	      44          110         30
13        111         111         31
14        112         112         32
15	      114         120         33
16	      121         121         100
17        122         122         101
18	      124         200         102
19	      141         201         103
20	      142         202         110
*/
