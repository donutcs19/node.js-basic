console.log("Hello Node.js 2024")

var x = 10; //global variable can change value
let y = 9; // local can change value
const z = 0; //local can't change value

x = 22;//เปลี่ยนค่าได้
console.log("x : ", x);

y = 67; //เปลี่ยนค่าได้
console.log("y : ", y);

//z = 1000 ==> error เปลี่ยนค่าไม่ได้
console.log("z : ", z);