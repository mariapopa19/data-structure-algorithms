const nemo: string[] = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];
const large: Array<string> = new Array(10000).fill('nemo');

function findNemo(array: string[]) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
}

findNemo(everyone); // O(n) -> Linear Time -> diagonal line 


// const boxes: number[] = [0, 1, 2, 3, 4, 5];
// function logFirstTwoBoxes(boxes: number[]){
//     console.log(boxes[0]);
//     console.log(boxes[1]);
// }

// logFirstTwoBoxes(boxes); // O(1) -> Constant Time -> straight line


function printFirstItemThenFirstHalfThenSayHi100Times(items: string[]){
  console.log(items[0]);

  var middleIndex: number = Math.floor(items.length / 2);
  var index: number = 0;

  while(index < middleIndex) {
    console.log(items[index]);
    index ++;
  }

  for(var i = 0; i < 100; i++) {
    console.log('hi');
  }
}
// O(n)
