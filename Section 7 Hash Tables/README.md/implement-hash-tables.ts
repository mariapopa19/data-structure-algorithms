class HashTable {
    public data: any;
    constructor(size: number) {
        this.data = new Array(size);
    }
    
    private _hash(key: string) {
        let hash = 0;
        for (let i = 0; i< key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) %
            this.data.length
        }

        return hash;
    }

    set(key: string, value: number) {
        let address = this._hash(key);
        if(!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key: string): any {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        console.log(currentBucket);
        if(currentBucket) {
            for(let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        } //O(1)

        return undefined;
    }

    keys(): any {
        if(!this.data.length) {
            return undefined;
        }
        const keysArray: any[] = [];
        for(let i = 0; i < this.data.length; i++) {
            if(this.data[i]) {
                keysArray.push(this.data[i][0][0]);
            }
        }
    }

}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
myHashTable.set('oranges', 2);
myHashTable.get('grapes');
console.log(myHashTable.keys());
// console.log(myHashTable.get('grapes'));