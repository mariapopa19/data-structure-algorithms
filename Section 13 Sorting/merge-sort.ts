const numMerge: number[] = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const mergeSort = (array: number[]): number[] => {
    if (array.length === 1) {
        return array;
    }

    // split array in into right and left 
    const length = array.length;
    const middle = Math.floor(length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(
        mergeSort(left),
        mergeSort(right)
    );
}

const merge = (left:number[], right:number[]) => {
    const result: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex < left.length && 
        rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
} 