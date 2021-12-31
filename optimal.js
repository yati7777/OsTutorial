let number = 3;
let refStr = [2, 3, 4, 2, 6, 1, 2, 5, 7];
let totalPages = refStr.length;
let faults = 0;
let hits = 0;
let frame = [];

for (let i = 0; i < totalPages; i++) {
  if (frame.indexOf(refStr[i]) === -1) {
    faults++;
    if (frame.length < number) {
      frame.push(refStr[i]);
      console.log("   ");
      console.log("[ " + frame.join(" , ") + "]  *");
    } else {
      let farArray = [];
      for (let j = 0; j < number; j++) {
        let pos = refStr.slice(i + 1, totalPages).indexOf(frame[j]);
        farArray.push(pos);
      }
      if (farArray.indexOf(-1) === -1) {
        let max = Math.max(...farArray);
        let index = farArray.indexOf(max);
        frame[index] = refStr[i];
        console.log("   ");
        console.log("[ " + frame.join(" , ") + "]  *");
      } else {
        let minusCount = 0;
        let minusIndex = [];
        for (let j = 0; j < farArray.length; j++) {
          if (farArray[j] === -1) {
            minusCount++;
            minusIndex.push(j);
          }
        }
        if (minusCount === 1) {
          frame[minusIndex[0]] = refStr[i];
          console.log("   ");
          console.log(console.log("[ " + frame.join(" , ") + "]  *"));
        } else {
          let prevStr = refStr.slice(0, i);

          let revPos = i;
          let replaceIndex = -1;
          for (let j = 0; j < minusIndex.length; j++) {
            if (revPos > prevStr.lastIndexOf(frame[minusIndex[j]])) {
              revPos = prevStr.lastIndexOf(frame[minusIndex[j]]);
              replaceIndex = minusIndex[j];
            }
          }
          frame[replaceIndex] = refStr[i];
          console.log("   ");
          console.log("[ " + frame.join(" , ") + "]  *");
        }
      }
    }
  } else {
    hits++;
    console.log("   ");
    console.log("[ " + frame.join(" , ") + "]  <---");
  }
}
console.log("   ");
let faultRatio = (faults / (faults + hits)) * 100;

let hitRatio = (hits / (faults + hits)) * 100;
console.log("Fault percentage : " + faultRatio.toFixed(2) + " %");
console.log("   ");
console.log("hit percentage : " + hitRatio.toFixed(2) + " %");
