const mergeSortedArrays = (array1:number[], array2:number[]): number[] => {
    const mergedArray: number[] = []
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i: number = 0;
    let j: number = 0;

    // check input
    if(array1.length === 0) return array2;
    if(array2.length === 0) return array1;

    while(array1Item || array2Item) {
        if(!array2Item || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item=array2[j];
            j++;
        }
    }

    return mergedArray;
}

// console.log(mergeSortedArrays([0,3,4,31], [4,6,30]));

// [0, 3, 4, 6, 30, 31]


function twoSum(nums: number[], target: number): number[] {
    // const result: number[] = [];
    for(let i=0; i<nums.length; i++){
        if(target - nums[i]=== nums[i+1]){
           return [i, i+1]
        } else {
            continue;
        }
    }
    return [];
};

// console.log(twoSum([3,2,3], 6));

