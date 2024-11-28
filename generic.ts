//generic
//exercise 1

function exercise1(arg:any):object {
    const data:object = {
        status:"success",
        data:arg
    }
    return data
}

console.log(exercise1(34));

// exercise 2


function exercise2<T>(array1: T[], array2: T[]): T[] {
    return array1.filter((element) => array2.includes(element));
  }
  
  const arr1 = [1, 2, 3, 4];
  const arr2 = [3, 4, 5, 6];
  console.log(exercise2(arr1, arr2));
  
  const arr3 = ["apple", "banana", "cherry"];
  const arr4 = ["banana", "cherry", "date"];
  console.log(exercise2(arr3, arr4));


// exercise 3

class MyStorage<T> {
    private items: T[] = [];
  
    addItem(item: T): void {
      this.items.push(item);
    }
  
    removeItem(item: T): void {
      const index = this.items.indexOf(item);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    }
  
    getItems(): T[] {
      return [...this.items];
    }
  }
  
  const stringStorage = new MyStorage<string>();
  stringStorage.addItem("apple");
  stringStorage.addItem("banana");
  stringStorage.removeItem("apple");
  console.log(stringStorage.getItems());
  
  