function boooo(n): void {
  for (let i = 0; i < n.length; i++) {
    console.log("booo!");
  }
}

// boooo([1,2,3,4,5]); //O(1)

function arrayOfHiNTimes(n: number) {
  let hiArray: string[] = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
}

var t = arrayOfHiNTimes(6);
console.log(t);
// O(n)