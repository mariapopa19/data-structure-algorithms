let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    spell: '',
    scream: function(): void {
        console.log('ahhhhhh!');
    }
};

console.log(user.age);
user.spell = 'abra kadabra';
console.log(user.spell);
user.scream();

const a = new Map()
const b = new Set()