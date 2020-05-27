---
title: JS继承 （一）
date: 2020-05-26 15:00:48
tags: 前端
---
`本文较适用于有一定专业基础的朋友阅读沟通交流`
JS继承前半篇，分两篇来看，这样在充分理解之后才可以充分吸收

## 一、原型链继承
```
function SuperType () {
	this.property = true;
}
SuperType.prototype.getSuperProperty = function () {
	return this.property;
}
function SubType () {
	this.subProperty = true;
}
SubType.prototype = new SuperType();
SubType.prototype.getSubProperty = function () {
	return this.subProperty;
}
var subInstance = new SubType();
console.log(subInstance.getSuperProperty()); // true
console.log(subInstance.getSubProperty()); // false
```

缺点：
1. 所有的实例都会共享一份引用类型的属性, 所以在实际情况下不会使用原型链继承;
2. 不能向超类型中传递参数。【个人理解，如果有传参，就意味着定制化，那么对于所有的实例这份定制化都是一样的了，也就不存在参数的意义了】

缺点1的示例demo:
```
function SuperType() {
	this.colors = ['red', 'yellow', 'green'];
}
SuperType.prototype.getSubColors = function () {
	return this.colors;
}
function SubType() {
}
SubType.prototype = new SuperType();
var subInstance1 = new SubType();
subInstance1.colors.push('black');
console.log(subInstance1.colors); // ["red", "yellow", "green", "black"]
var subInstance2 = new SubType();
console.log(subInstance2.colors); // ["red", "yellow", "green", "black"]
```

## 二、借用构造函数（constructor stealing）
借用构造函数也称做是：伪造对象或者是经典继承.
*思想*：函数只不过是在特定环境中执行代码的对象，因此通过使用call()和apply()的方式也可以在新创建的对象上执行构造函数;
*优点*: 借用构造参数可以传参；
*缺点*：必须在构造函数内部定义所有方法和属性，函数复用无从谈起；

```
function SuperType() {
	this.colors = ['red', 'yellow', 'green'];
}
function SubType(name) {
	SuperType.call(this);
	this.name = name;
}
SubType.prototype.sayColors = function () {
	console.log(this.colors);
}

var subInstance1 = new SubType('I');
subInstance1.colors.push('black');
subInstance1.sayColors();
var subInstance2 = new SubType('you');
subInstance2.sayColors();
```

## 三、组合继承(combination inheritence)
*思想*：第一，使用原型链来完成对原型方法和属性的继承；第二，通过构造函数来实现对实例属性的继承。
*优点*：融合了 原型继承 和 组合继承的优点，成为最常用的继承模式。

```
function SuperType(name) {
	this.name = name;
	this.colors = ['red', 'yellow', 'green'];
}
SuperType.prototype.sayName = function () {
	console.log(this.name);
}
function SubType(name, age) {
	SuperType.call(this, name);
	this.age = age;
}

// 非常关键的两行代码
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;

SubType.prototype.sayAge = function () {
	console.log(this.age);
}

var subInstance1 = new SubType('I', 27);
var subInstance2 = new SubType('you', 30);

subInstance1.colors.push('black');
console.log(subInstance1.colors);
subInstance1.sayName();
subInstance1.sayAge();
console.log(subInstance2.colors);
subInstance2.sayName();
subInstance2.sayAge();
```
缺点：组合式继承的问题是无论在什么情况下，都有两次调用超类型函数两次，而这时非必要的，在接下来的二篇会有更好的继承方式出现。

## 四、例子
demo: 人有名字和年龄，教师从其继承而来增加了一个职业。
1. 原型链继承反面样例，即不合适的样例；nonono!

```
function Person (name, age) {
    this.name = name
    this.age = age
}
Person.prototype.getName = function () {
	console.log(this.name)
}
function Teacher (subject) {
	this.hasWork = subject;
}
Teacher.prototype = new Person('su', 27); // Teacher只限制在这个年龄段了

let jim = new Teacher('math');
jim.getName();

```

2. 借用构造函数，比较单一的场景下可以使用这种，继承方法必须在构造函数内定义, 否则会报错方法未定义【getName is not a function】
```
function Person(name, age) {
    this.name = name
    this.age = age
    this.getName = function () {
      console.log(this.name, 1111);
    }
}
// 必须在构造函数内部定义才有效；
Person.prototype.getName = function () {
	console.log(this.name, 2222)
}
function Teacher(name, age, subject) {
	Person.call(this, name, age);
	this.subject = subject;
}
Teacher.prototype.getSubject = function () {
	console.log(this.subject);
}
let jim = new Teacher('su', 27, 'maths');
jim.getName();
jim.getSubject();
```

3. 组合继承，比较常用的继承模式
必须在继承关系搭建完成后，才可以生命子类型自身的方法，否则会不生效
```
function Person (name, age) {
    this.name = name
    this.age = age
}
Person.prototype.getName = function () {
	console.log(this.name)
}
function Teacher(name, age, subject) {
	Person.call(this, name, age);
	this.subject = subject;
}
// getSubject放在此处会不生效
Teacher.prototype = new Person();
// getSubject放在此处会生效
Teacher.prototype.constructor = Teacher;
Teacher.prototype.getSubject = function () {
	console.log(this.subject);
}
let jim = new Teacher('su', 27, 'maths');
jim.getName();
jim.getSubject();
```
