// Need class to define shape from user
class Shape {
    constructor(){
        this.color = "";
    }
    // that class then takes in the color from the user
    setColor(colorVar) {
        this.color = colorVar;
    }
}

// Classes for different shapes

// Triangle Class
class Triangle extends Shape {
    render() {
        return `<ploygon points="250, 60 100, 400 400, 400" fill="${this.color}" />`;
    }
};
// Circle Class
class Circle extends Shape {
    render() {
        return `<circle cx="50" cy="50" r="50" fill="${this.color}" />`;
    }
}
// Square Class
class Square extends Shape {
    render() {
        return `<rect x="50" y="50" width="50" height="50" fill="${this.color}" />`;
    }
}
// export those classes to index.js
module.exports = { Triangle, Circle, Square };