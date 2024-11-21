// Create a function that reverses a string:
// 'Hi My name is Andrei' should be:
// 'ierdnA si eman yM iH'

function reverse_my_solution(str: string): void {
    if(!str || str.length < 2 || typeof str !== 'string' ) {
        console.log('hmm that is not good');
    }

    let string: string[] = str.split('');
    let reverseString: string = '';
    for(let i=string.length-1; i >= 0; i--) {
        reverseString = reverseString.concat(string[i])
    }
    console.log(reverseString);
}

function reverse_course_solution1(str: string): void {
    if(!str || str.length < 2 || typeof str !== 'string' ) {
        console.log('hmm that is not good');
    }

    const backwards = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i >=0; i--){
        backwards.push(str[i]);
    }
    console.log(backwards.join(''));
}

function reverse_course_solution2(str: string): string {
    return str.split('').reverse().join('');
}

const reverse_course_solution3 = (str: string) => [...str].reverse().join('');

reverse_my_solution('Hi My name is Andrei');
reverse_course_solution1('Hi My name is Andrei');