// TASK 1:

class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    // Getter and Setter for width
    get width() {
        return this._width;
    }
    set width(width) {
        if (!Number.isInteger(width)) {
            throw new Error("Width must be an integer value");
        } else if (width <= 0) {
            throw new Error("Width must be a positive value");
        } else {
            this._width = width;
        }
    }

    // Getter and Setter for height
    get height() {
        return this._height;
    }
    set height(height) {
        if (!Number.isInteger(height)) {
            throw new Error("Height must be an integer value");
        } else if (height <= 0) {
            throw new Error("Height must be a positive value");
        } else {
            this._height = height;
        }
    }

    // Method to calculate Area
    getArea() {
        return this._width * this._height;
    }

    // Method to calculate Perimeter
    getPerimeter() {
        return 2 * (this._width + this._height);
    }

    // Method to draw rectangle using input symbol
    draw(symbol) {
        let rect = "";
        for (let i = 0; i < this._height; i++) {
            for (let j = 0; j < this._width; j++) {
                rect += symbol;
            }
            rect += "\n";
        }
        console.log(rect);
    }
}


let rec = new Rectangle(3, 5);
console.log(rec.width); 
console.log(rec.height);
console.log(rec.getArea()); 
console.log(rec.getPerimeter()); 
rec.draw("0");




// TASK 2:

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }
}


let sqr = new Square(4);
console.log(sqr.width); 
console.log(sqr.height); 
console.log(sqr.getArea()); 
console.log(sqr.getPerimeter()); 
sqr.draw("*");