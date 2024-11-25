"use strict";

// Синтаксис классов

class Rectangle {
    constructor(height, width) {
        this.height = height; // Устанавливаем высоту прямоугольника
        this.width = width; // Устанавливаем ширину прямоугольника
    }
    // Метод для вычисления площади прямоугольника
    calcArea() {
        return this.height * this.width; // Площадь = высота * ширина
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width); // Вызов конструктора родительского класса (Rectangle)
        this.text = text; // Устанавливаем текст для элемента
        this.bgColor = bgColor; // Устанавливаем цвет фона
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет ${this.bgColor}`); // Выводим свойства объекта
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');
// Создаем объект с высотой, шириной, текстом и цветом

div.showMyProps(); // Вывод: Текст: Hello World, цвет red
console.log(div.calcArea()); // Площадь прямоугольника: 25 * 10 = 250


/* const square = new Rectangle(10, 10); // Создаем квадрат 10x10
const long = new Rectangle(20, 100); // Создаем прямоугольник 20x100

console.log(long.calcArea()); // Вывод площади прямоугольника: 20 * 100 = 2000
console.log(square.calcArea()); // Вывод площади квадрата: 10 * 10 = 100 */
