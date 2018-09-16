class Sorter {
    constructor() {
        this.storage = [];
        this.sorting = function(elem_a, elem_b){
            return elem_a - elem_b;
        }
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
        var sortItems = [];

        for(var i = 0; i < indices.length; i++){
            sortItems.push( this.storage[ indices[i] ] );
            this.storage[ indices[i] ] = true;
        }

        sortItems.sort(this.sorting); //[5, 10]

        for(var i = 0; i < this.storage.length; i++){
            if(this.storage[i] === true){
                this.storage[i] = sortItems[0];
                sortItems.splice(0, 1);
            }
        }

        return this.storage;

    }

    setComparator(compareFunction) {
        this.sorting = compareFunction;
    }
}

module.exports = Sorter;