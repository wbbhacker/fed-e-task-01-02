// var hello = function (name) {
//     console.log("Hello, " + name);
// };
// hello('');


// console.log('*******')
// var a = [];
// for(let i=0; i<10; i++){
//   a[i] = function () {
//       console.log(i)
//   }
// }
// a[6]()

// var tmp = 123;
// if(true){
//   console.log(tmp)
//   let tmp
// }

// var arr =[12,34,32,89,4]



// console.log(arr.sort((a, b) => a > b))
// console.log(arr)
// console.log(Math.min(...arr))

var a = 10;
var obj = {
  a:20,
  fn(){
    setTimeout(() => {
      console.log(this.a) 
    });
  }
}
obj.fn()