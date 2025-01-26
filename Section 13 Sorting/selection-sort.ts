const numbersSelection: number[] = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const selectionSort = (array: number[]) => {
    const length: number = array.length;
    for(let i=0; i <length; i++) {
        // set current index as minimum 
        let min: number = i;
        let temp: number = array[i];
        for(let j=i+1; j<length; j++) {
            if(array[j] < array[min]) {
                // update minimum if current is lower that what we had previously
                min = j;
            }
        }
        array[i] = array[min];
        array[min] = temp;
    }
}

selectionSort(numbersSelection);
console.log(numbersSelection);
