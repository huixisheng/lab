"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isDone = false;
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
var name = "bob";
name = "smith";
var name1 = "Gene";
var age = 37;
var sentence = "Hello, my name is " + name + ".\n\nI'll be " + (age + 1) + " years old next month.";
var sentence1 = "Hello, my name is " + name + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
var list = [1, 2, 3];
var list1 = [1, 2, 3];
// 元组 Tuple
// Declare a tuple type
var x;
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
// x = [10, 'hello']; // Error
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
// void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void
function warnUser() {
    console.log("This is my warning message");
}
var unusable = undefined;
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
// 类型断言
var someValue = "this is a string";
var strLength = someValue.length;
var strLength1 = someValue.length;
