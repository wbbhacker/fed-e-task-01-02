// const aaa = (name: string) =>{ 
//   console.log(`Hello, ${name}`)
  
// }

// aaa('TypeScrit')


// const a:string = 'foo'
// const b:number = 100
// const c:boolean = true
// const e:void = undefined
// const f:null =null
// const g:undefined = undefined
// const h: symbol = Symbol()



// const foo:object = function(){}
// const obj:{foo:number, bar:string} = {foo:123,bar:'1'}

// const arr1:Array<number> = [1,2,3]
// const arr2:number[] = [1,2,3]

// function sum(...args:number[]){
//   return args.reduce((prev, current) => prev + current,0)
// }
// console.log(sum(1, 2, 3))

// const tuple:[number,string] = [18,'111']

// enum PostStatus {
//   Draft=0,
//   Unpublised=1,
//   Published=2
// }

// function fun1(a:number,b:number=10, ...rest:number[]): string {
//   return 'fun1'
// }


// fun1(100,20,2000)

// const func2: (a: number, b: number) => string = function(a:number, b:number):string{
//   return 'func2'
// }

// function stringify(value:any){
//   return JSON.stringify(value)
// }

// stringify('string')
// stringify(100)


// const nums = [110,120,119,112]
// const res = nums.find(i=>i>0)
// // const square =res*res
// const num1 = res as number
// const num2 = <number>res // JSX下不能使用 加括号会发生冲突
// interface Post{
//   title:string
//   content:string
//   subtitle?: string //可选成员
//   readonly summary: string // 只读成员
// }

// function printPost(post: Post) {
//   console.log(post.title);
//   console.log(post.content);
// }

// interface Cache1 {
//   [Key:string]:string
// }

// const cache: Cache1  = {}
// cache.key = '1'

// class Person{
//   public name:string // 默认为public
//   private age:number //  不可以被实例化
//   protected readonly gender :boolean // 只能在子类中访问的成员
//   constructor(name:string, age:number){
//     this.name = 'wbb'
//     this.age = 19
//     this.gender = true
//   }
//   sayHi(msg: string):void{
//     console.log(`I am ${name}`)
//     console.log(this.age)
//   }
// }

// const tom = new Person('tom',18)
// // tom.gender = false
// // Cannot assign to 'gender' because it is a read-only property.
// class Student extends Person{
//   private constructor(name: string, age:number){
//     super(name, age)
//     console.log(this.gender)
//   }
//   static create(name: string, age:number){
//     return new Student(name, age)
//   }
// }
// console.log(tom.name)
// // console.log(tom.age)
// // Property 'age' is private and only accessible within class 'Person'
// // console.log(tom.gender)
// //Property 'gender' is protected and only accessible within class 'Person' and its subclasses.
// const jack = Student.create('wbb',10)

// interface EatAndRun{
//   eat(food:string):void
//   run(distance:number):void
// }
// interface Eat{
//   eat(food:string):void
// }
// interface Run{
//   run(distance:number):void
// }

// class Person implements Eat,Run{
//   eat(food:string):void{
//     console.log(`优雅的进餐: ${food}`);
//   }
//   run(distance:number):void{
//     console.log(`直立行走: ${distance}`)
//   }
// }
// class Animal{
//   eat(food: string): void {
//     console.log(`呼噜呼噜的吃: ${food}`);
//   }
//   run(distance: number): void {
//     console.log(`爬行: ${distance}`)
//   }
// }

// abstract class Animal{
//   eat(food:string):void{
//     console.log(`呼噜呼噜的吃: ${food}`)
//   }
//   abstract run(distance:number) : void
// }

// class Dog extends Animal{
//   run(distance : number):void{
//     console.log(`四脚爬行 ${distance}`)
//   }
// }
// const d = new Dog()
// d.eat('饺子')
// d.run(10)

// function createNumberArray(length: number, value: number): number[] {
//   const arr = Array<number>(length).fill(value)
//   return arr
// }
// const res = createNumberArray(3,100)


// function createArray<T>(length: number, value:T): T[]{
//   const arr = Array<T>(length).fill(value)
//   return arr
// }

import {camelCase} from 'lodash'

declare function camelCase(input:string) : string
const res = camelCase('hello')












