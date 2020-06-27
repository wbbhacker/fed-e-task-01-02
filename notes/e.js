// var elements = [{},{},{}]
// for(let i=0; i< elements.length; i++){
//   elements[i].onclick=function(){
//     console.log(i)
//   }
// }
// elements[0].onclick()


// if(true){
//   var foo = 'zce'
// }
// console.log(foo)

// for(let i=0; i<3; i++){
//   let i = 'foo'
//   console.log(i)
// }

// const arr = [100,200,300]
// const [,,bar] = arr
// const [foo, ...rest] = arr
// const [f1,b1,b2=123, more='default value']  = arr

// console.log(bar)
// console.log(foo)
// console.log(rest)
// console.log(f1, b1, b2, more)
// const obj = {name:'zce', age:18}
// const {name } = obj
// const age = 20
// const {age:ageNew = 19} = obj
// console.log(ageNew, age)

// const str = `hello es2015, 

// this is a string`
// const {log} = console
// log(str)

// const name = 'tom'
// // const msg = `hey, ${name}`
// const msg = `hey, ${1+1}`
// log(msg)

// const name = 'tom'
// const gender = true
// function myTagFunc(strings, name , gender){
//   console.log(strings)
//   gender = gender ? 'man' : 'woman'
//   return strings[0] + name + strings[1] + gender + strings[2]
// }
// const result = myTagFunc`hey, ${name} is a ${gender}.`
// console.log(result)



// const message = 'Error: foo is not defined'
// console.log(
//   message.startsWith('Error'),
//   message.endsWith('defined'),
//   message.includes('foo')
// )


// function foo (bar,enable=true){
//   console.log('foo invoked - enable:')
//   console.log(enable)
// }
// foo()

// function foo(first,...args11){
//   console.log(args11)
//   console.log(first)
// }
// foo(1,2,3,4)

// const arr = ['foo','bar','baz']

// console.log(...arr)

// const inc = n => n +1
// console.log(inc(10))

// const person  = {
//   name: 'tom',
//   sayHi:function(){
//     console.log(`hi , my name is ${this.name}`)
//   },
//   sayHiAsync:function(){
//     setTimeout(function(){
//       console.log(this.name);
//     }, 1000);
//   },
//   sayHiAsyncArrow: function () {
//     setTimeout( () => {
//       console.log(this.name);
//     }, 1000);
//   },
// }

// person.sayHi()
// person.sayHiAsync()
// person.sayHiAsyncArrow()

// const bar = '345'

// const obj = {
//   foo:123,
//   bar,
//   method1(){
//     console.log('method 11')
//     console.log(this)
//   },
//   [1+1]:123
// }
// console.log(obj)

// const source1 = {
//   a:123,
//   b:123
// }
// const target = {
//   a: 456,
//   c: 456
// }
// const result = Object.assign(target, source1)
// console.log(target)
// console.log(target === result)


// console.log(
//   // 0 == false,
//   // 0 === false ,
//   // +0 === -0, // true
//   // -1 === +1
//   // NaN === NaN, // false
//   Object.is(+0, -0), // false
//   Object.is(NaN, NaN) //true
// )

// const person = {
//   name : 'zce',
//   age : 20
// }
// const personProxy = new Proxy(person,{
//   get(target, property){ // 接受两个参数
//     // target 代理对象， property 访问的属性
//     return property in target ? target[property] : 'default'
//     // console.log(target, property)
//     // return 
//   },
//   set(target, property, value ){
//     // target 代理对象    property 写入的属性 value 属性值
//     if(property === 'age'){
//       if(!Number.isInteger(value)){
//         throw new TypeError(`${value} is not an int` )
//       }
//     }
//     target[property] = value 
//     // console.log(target, property, value)
//   }
// })
// personProxy.gender = true
// personProxy.age = 18
// console.log(personProxy.name)
// console.log(personProxy.xxx)
// console.log(personProxy)

// const person = {
//   name : 'zce',
//   age: 20
// }
// const personProxy = new Proxy(person, {
//   deleteProperty(target, property){
//     console.log('delete', property)
//     delete target[property]
//   }
// })

// delete personProxy.age
// console.log(person)

// const list = []

// const listProxy = new Proxy(list, {
//   set(target, property, value){
//     console.log(`set ${property} ${value}`)
//     target[property] = value
//     return true
//   }
// })

// listProxy.push(100)

// const obj = {
//   foo : '123',
//   bar : '456'
// }
// const proxy = new Proxy(obj,{
//   get(target, property){
//     console.log('watch logic~')
//     return Reflect.get(target, property)
//   }
// })
// console.log(proxy.foo)


// const obj = {
//   name:'zce',
//   age: 18
// }

// // console.log('name' in obj)
// // console.log(delete obj['age'])
// // console.log(Object.keys(obj))
// console.log(Reflect.has(obj, 'name'))
// console.log(Reflect.deleteProperty(obj, 'age'))
// console.log(Reflect.ownKeys(obj))

// class Person{
//   static of(name){
//     return new Person(name)
//   }
//   constructor(name){
//     this.name = name
//   }
//   say(){
//     console.log(`hi, ${this.name}`)
//   }
// }
// class Student extends Person{
//   constructor(name, number){
//     super(name)
//     this.number = number
//   }
//   hello(){
//     super.say()
//   }
// }

// let sd = new Student('wbb',20)
// console.log(sd)
// sd.hello()

// const s = new Set()

// s.add(1).add(2).add(2)
// console.log(s)
// console.log(s.size)
// console.log(s.has(100))
// console.log(s.delete(2))
// console.log(s)
// console.log(s.clear())
// console.log(s)
// // 数组去重

// const arr = [1,2,1,3,4,1]

// // const result = Array.from(new Set(arr))
// const result = [...new Set(arr)]

// console.log(result)

// const obj = {}

// obj[true] = 'value'
// obj[123] = 'value'
// obj[{a:1}] = 'value'

// console.log(Object.keys(obj))
// // [ '123', 'true', '[object Object]' ]

// const m = new Map()
// const tom = {name:'tom'}
// m.set(tom, 90)
// console.log(m)
// console.log(m.get(tom))
// // m.has()
// // m.delete()
// // m.clear()
// m.forEach((value, key)=>{
//   console.log(value, key)
// })

// // share.js
// const cache= {}

// // a.js
// cache['foo'] = Math.random()

// // b.js

// cache['foo'] = '123'

// console.log(cache)

// const s = Symbol()
// console.log( s)
// console.log(typeof s)

// const obj = {}
// let a = Symbol()
// obj[Symbol()] = '123'
// obj[Symbol()] = '456'
// console.log(obj)

// a.js
// const name = Symbol()
// const person = {
//   [name]:'zce',
//   say(){
//     console.log(this[name])
//   }
// }
// person.say()

// b.js
// person[Symbol()]

// const s1 = Symbol.for('foo')
// const s2 = Symbol.for('foo')
// console.log(s1 === s2)




// console.log(Symbol.for(true) === Symbol.for('true'))


// const obj = {
//   [Symbol.toStringTag]:'XObject'  // 重写toString 方法
// }
// console.log(obj.toString())


// // 拿不到 Symbol 的值
// for(var key in  obj){
//   console.log(key)
// }
// console.log(Object.keys(obj))
// console.log(JSON.stringify(obj))

// console.log(Object.getOwnPropertySymbols(obj))


// const arr = [100, 200, 300 ,400]

// // for of 能用 break 跳出循环
// for(const item of arr){
//   console.log(item)
//   if(item > 100){
//     break;
//   }
// }
// // arr.forEach() // 不能跳出循环
// // arr.some()  // 返回 ture 跳出循环
// // arr.every()  //返回false 跳出循环
// const s = new Set(['foo','bar'])
// for(const item of s)[
//   console.log(item)
// ]

// const m = new Map()
// m.set('foo','123')
// m.set('bar','345')
// for(const item of m){
//   console.log(item)
// }

// for (const [key, value] of m) {
//   console.log(key, value)
// }


// // 无法遍历普通的obj 对象，为什么呢，看下节
// const obj = {foo:123, bar:456}
// for(const item of obj){
//   console.log(item)
// }
// console.log('sss')


// const set = new Set(['foo','bar','baz'])

// const iterator = set[Symbol.iterator]()

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())



// const obj = {
//   store:['foo','bar','baz'],
//   [Symbol.iterator]:function () {
//     let index=0
//     const self = this
//     return {
//       next:function () {

//           let result =  {
//             value: self.store[index],
//             done: index >= self.store.length
//           }
//           index++
//           return result
//       }
//     }
//   }
// }

// for(const item of obj){
//   console.log(item)
// }

// 迭代器设计模式

// 场景：你我协同开发一个任务清单应用

// 我的代码*******

// const todos = {
//   life:['吃饭', '睡觉', '打豆豆'],
//   learn:['语文', '数学', '外语'],
//   work:['喝茶'],
//   each:function(callback){
//     const all = [].concat(this.life, this.learn, this.work)
//     for(const item of all){
//       callback(item)
//     }
//   },
//   [Symbol.iterator]:function(){
//     const all = [...this.life, ...this.learn, ...this.work]
//     let index = 0
//     return {
//       next:function (){
//         return {
//           value:all[index],
//           done:index++ >= all.length
//         }
//       }
//     }
//   }
// }

// // 你的代码*******


// todos.each((item)=>{
//   console.log(item)
// })

// function * foo(){
//   console.log('zce')
//   return 100
// }

// const result = foo()
// console.log(result.next())

// function * bar(){
//   console.log('1111')
//   yield 100
//   console.log('2222')
//   yield 200
//   console.log('3333')
//   yield 300
// }

// const generator = bar()

// console.log(generator.next())





// // Generator 应用
// // 案例1： 发号器
// function * createIdMaker(){
//   let id = 1
//   while(true){
//     yield id++
//   }
// }
// const idMaker = createIdMaker()
// console.log(idMaker.next().value)
// console.log(idMaker.next().value)
// console.log(idMaker.next().value)

// // 使用generator 函数实现 iterator 方法


// const todos = {
//   life:['吃饭', '睡觉', '打豆豆'],
//   learn:['语文', '数学', '外语'],
//   work:['喝茶'],
//   each:function(callback){
//     const all = [].concat(this.life, this.learn, this.work)
//     for(const item of all){
//       callback(item)
//     }
//   },
//   [Symbol.iterator]:function * (){
//     const all = [...this.life, ...this.learn, ...this.work]
//     for(const item of all){
//       yield item
//     }
//   }
// }

// for(let item of todos){
//   console.log(item)
// }

// const arr = ['foo', 1, NaN, false]

// console.log(arr.indexOf('foo'))
// console.log(arr.indexOf('bar'))
// console.log(arr.indexOf(NaN))  //indexOf 方法不能查找数组中的NaN

// console.log(arr.includes(NaN))


// // z

// console.log(Math.pow(2,10))
// console.log(2 ** 10)


// values entries
// const obj = {
//   foo:'value1',
//   bar:'value2'
// }

// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// for(const [key, value] of Object.entries(obj)){
//   console.log(key, value)
// }

// console.log(new Map(Object.entries(obj)))


// // Object.getOwnPropertyDescriptors
// const p1 = {
//   firstName:'lei',
//   lastName: 'Wang',
//   get fullname(){
//     return this.firstName + ' ' + this.lastName
//   }
// }

// // 不能复制p2
// // const p2 = Object.assign({},p1)
// // p2.firstName = 'zce'
// // console.log(p2.fullname) //p2 拿到的时p1 的name

// const descriptors = Object.getOwnPropertyDescriptors(p1)
// console.log(descriptors)
// const p2 = Object.defineProperties({}, descriptors)
// p2.firstName = 'zce'
// console.log(p2.fullname) //p2 拿到的时p1 的name

// // String.prototype.padStart / String.prototype.padEnd
// const books = {
//   html:5,
//   css:16,
//   javascript:128
// }

// for (const [name, count] of Object.entries(books)){
//   console.log(name,count)
// }
// for (const [name, count] of Object.entries(books)) {
//  console.log(`${name.padEnd(16, '-')} | ${count.toString().padStart('3',0)}`)
// }

// // 在函数参数中添加尾逗号

// function foo(
//   bar,
//   baz,
// ){

// }

// const arr = [100, 200, 300,]

// function sum(a:number, b:number){
//   return a+b
// }

// sum(100,100)

// sum(100,'100')



// function square(n){
//   return n*n
// }

// square(100)

// let num:number =100 
// function foo():number{
//   return 10
// }

// const a:string = 'a'
// const b:number = NaN //Infinity 1\2
// const c:boolean = false
// const d:null = null
// const e:void = undefined
// const f:symbol = Symbol()


// const arr1:Array<number> = [1,2,4]

// const arr2:number[] = [1,2,3]
// const foo:[string, number] = ['1',2]
// const obj1:{foo:string, bar:number} = {foo:'1', bar:1}
// const obj3: {[string]:string} = {}
// obj3.key1 = '111'

// function foo(callback:(string, number) => void ){
//   callback('string',100)
// }

// const a:'foo' = 'foo'
// const type : 'success' | 'warning' | 'danger' = 'success'

// const b: string | number = 1

// type StiringOrNumber = string | number

// const d:StiringOrNumber = '1'


// const gender: ?number = undefined

// const gender1: number | null | void = undefined


// mixed 强任意类型
// string | number  | boolean | ...
// function passMixed(value: mixed){
//   if(typeof value === 'string'){
//     value.substr(1)
//   }
//   if(typeof value === 'number'){
//     value*value
//   }
  
// }

// // any 弱任意类型
// function passAny(value: any){

// }

// const element:HTMLElement | null = document.getElementById('app')

// // 申请
// let obj = {}

// // 使用
// obj.name = 'lg'


// // 释放
// obj = null

// let obj = {name:'xm'}

// let ali = obj

// obj = null


// function objGroup(obj1, obj2){
//   obj1.next = obj2
//   obj2.prev = obj1
//   return {
//     o1:obj1,
//     o2:obj2
//   }
// }
// let obj = objGroup({name:'obj1'},{name:'obj2'})

// console.log(obj)

// const user1 = {age:11}

// function fn(){
//   const obj1 = {}
//   const obj2 = {}
//   obj1.name = obj2
//   obj2.name = obj1
//   return 'a'
// }
// fn()

// var fn1 = function (arams) {
//   this.foo=function(){
//     console.log(11111)
//   }
// }
// let f1 = new fn1()

// var fn2 = function(){}

// fn2.prototype.foo = function(){
//   console.log(11111)
// }
// let f2 = new fn2()

// function Person(){
//   this.name = 'icoder'
//   this.age = 18
//   this.getAge = function(){
//     return this.age
//   }
// }

// const p1 = new Person()
// const a = p1.getAge()

// function Person1() {
//   this.name = 'icoder'
//   this.age = 18
// } 

// const p2 = new Person()
// const b = p2.age
var arrList = new Array(1,2,3,4,5)
arrList.forEach((item)=>{
  console.log(item)
})
for(var i=arrList.length;i;i--){
  console.log(arrList[i])
}
for(var i in arrList){
  console.log(arrList[i])
}















































