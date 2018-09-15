class Sorter {
    constructor() {
        this.storage = [];
        this.sortItems = [];
    }

    add(element) {
        this.storage.push(element);
    }

    at(index) {
        return this.storage[index];
    }

    get length() {
        return this.storage.length;
    }

    toArray() {
        return this.storage;
    }

    sort(indices) {
        let sort_item = this.sortItems;
        let storage = this.storage;

        indices.forEach(function(index){
            sort_item.push(storage[index]);
            storage.splice(index, 1, true);
        });

        sort_item.sort(function(a,b){
            return a - b;
        });

        for(let i = 0; i < storage.length; i++){
            if(storage[i] === true){
                storage[i] = sort_item[0];
                sort_item.splice(0, 1);
            }
        }
        return storage;
    }

    setComparator(compareFunction) {
        // your implementation
    }
}

module.exports = Sorter;