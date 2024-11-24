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
}