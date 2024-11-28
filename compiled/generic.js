"use strict";
//generic
//exercise 1
function exercise1(arg) {
    const data = {
        status: "success",
        data: arg
    };
    return data;
}
console.log(exercise1(34));
// exercise 2
function exercise2(array1, array2) {
    return array1.filter((element) => array2.includes(element));
}
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
console.log(exercise2(arr1, arr2));
const arr3 = ["apple", "banana", "cherry"];
const arr4 = ["banana", "cherry", "date"];
console.log(exercise2(arr3, arr4));
// exercise 3
class MyStorage {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
    getItems() {
        return [...this.items];
    }
}
const stringStorage = new MyStorage();
stringStorage.addItem("apple");
stringStorage.addItem("banana");
stringStorage.removeItem("apple");
console.log(stringStorage.getItems());
