let input = [
  [1, 0, 8, 3],
  [2, 1, 2, 4],
  [3, 3, 4, 4],
  [4, 4, 1, 5],
  [5, 5, 6, 2],
  [6, 6, 5, 6],
  [7, 10, 1, 1],
];
let TotalCT = 0;
let completeArray = [];
let track = 0;
input = input.sort((a, b) => {
  if (a[1] != b[1]) return a[1] - b[1];
  if (a[3] != b[3]) return a[3] - b[3];
  return a[2] - b[2];
});
while (input.length != 0) {
  completeArray.push(input.shift());
  input = input.sort((a, b) => {
    if (a[1] != b[1]) return a[1] - b[1];
    if (a[3] != b[3]) return a[3] - b[3];
    return a[2] - b[2];
  });
  TotalCT += completeArray[track][2];
  completeArray[track].push(TotalCT);
  let i = 0;
  for (i = 0; i < input.length; i++) {
    if (input[i][1] > TotalCT) {
      break;
    }
  }
  let arrived = input.slice(0, i);
  let remaining = input.slice(i, input.length);
  arrived = arrived.sort((a, b) => {
    if (a[3] != b[3]) return a[3] - b[3];
    return a[2] - b[2];
  });

  input = [...arrived, ...remaining];
  track++;
}
completeArray = completeArray.map((ele) => {
  ele.push(ele[4] - ele[1]);
  ele.push(ele[5] - ele[2]);
  return ele;
});
completeArray = completeArray.sort((a, b) => a[0] - b[0]);
let avgCT = 0;
let avgTAT = 0;
let avgWT = 0;
for (let i = 0; i < completeArray.length; i++) {
  avgCT += completeArray[i][4];
  avgTAT += completeArray[i][5];
  avgWT += completeArray[i][6];
}
avgTAT = avgTAT / completeArray.length;
avgWT = avgWT / completeArray.length;
avgCT = avgCT / completeArray.length;
console.log("---------------------------------------");

console.log("PID|  AT |  BT |  PT |  CT | TAT |  WT");
console.log("---------------------------------------");
completeArray.map((ele) => {
  console.log(ele.join("  |  "));
  console.log("    ");
});

console.log("Average Completion Time : " + avgCT.toFixed(3) + "ms");
console.log("Average Turn Around Time : " + avgTAT.toFixed(3) + "ms");
console.log("Average Waiting Time : " + avgWT.toFixed(3) + "ms");
