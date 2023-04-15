//  ---------------Task1---------------

arr = [5, 8, 4, 2, 9, 7, 1];

Array.prototype.min = function () {
    min = this[0];

    this.forEach(value => {
        if (value < min) {
            min = value;
        }
    })
    return min;
}

console.log(arr.min());


//  ---------------Task2---------------
// add customFilter function to the prototype of array

Array.prototype.customFilter = function (callback) {
    const filtered = [];
    this.forEach(value => {
        if (callback(value)) {
            filtered.push(value);
        }
    })
    return filtered;

}

console.log(arr.customFilter(function (value) {
    return value % 2 === 0;
}));

console.log(arr);




//  ---------------Task3---------------
// add customarrayFill function to the prototype of array 



Array.prototype.customArrayFill = function(value) {
    const newArray = []; 
    this.forEach(() => newArray.push(value));
    return newArray; 
  };

const filledArray = arr.customArrayFill(10);
console.log(filledArray); 

console.log(arr);


