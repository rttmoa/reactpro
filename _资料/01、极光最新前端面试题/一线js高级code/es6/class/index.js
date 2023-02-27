function MathHandle(x, y) {
    this.x = x
    this.y = y
}

MathHandle.prototype.add = function () {
    return this.x + this.y
}

var m = new MathHandle(1, 2)
// console.log(m.add())

typeof MathHandle  // 'function' ~ 基础数据类型 / 复杂数据类型
MathHandle.prototype.constructor === MathHandle  // true
m.__proto__ === MathHandle.prototype  // true
console.log("================MathHandle==================================")


// 动物
function Animal() {
    this.eat = function () {
        console.log("Animal eat")
    }
}

// 狗
function Dog() {
    this.bark = function () {
        console.log("Dog bark")
    }
}

// 绑定原型，实现继承
Dog.prototype = new Animal() // 这里可以优化继承方式  Dog.prototype = Animal.prototype | Dog.prototype = Create.Obect(Animal.prototype)

var hashiqi = new Dog()
hashiqi.bark()
hashiqi.eat()
console.log("================Animal==================================")



function fn() {
    console.log('real', this)  // real {a: 100}

    var arr = [1, 2, 3]
    arr.map(function (item) {
        console.log(this)  // window
    })
}
fn.call({a: 100})

// Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
// Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
// Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
















