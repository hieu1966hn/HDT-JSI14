////// Chữa BTVN



/*
Buổi trước: Ôn tập về Javascript
1. KDL
2. Toán tử
3. Câu điều kiện
4. Loop
5. Array
*/


//// Object: 
// let VietDuc = {
//   name: "Việt Đức",
//   age: 17,
//   address: "RC"
// }

// console.log(VietDuc);

/// Khai báo 1 đối tượng máy tính
// let Laptop = {
//   cpu: "m1",
//   ram: "16gb",
//   monitor: "13inch",
//   price: "30tr",
// }


/////// Thay đổi giá trị trong Object
// Laptop.cpu = "i9 9750h"
// Laptop.card = "RTX 3080ti"


/// C,R,U,D: 


//// Update: gán lại giá trị cho khóa

/// Delete: Xóa khóa monitor trong đối tượng

// delete Laptop.monitor

// let BaoLam = {
//   name: "Bảo Lâm",
//   address: ['Hà Nội', "HCM", "Đà Nẵng"],
//   dog: {
//     name: "bon",
//     age: 1
//   }
// }





/////// Spread Syntax

// let obj = {
//   name: "john",
//   age: 24,
//   address: "22 jump Street",
//   job: "Dev"
// }

// let obj2 = {
//   name: "Hiếu",
//   age: 24,
//   address: "Hà Nội"
// }

// ///// Gộp Đối tượng 1 và đối tượng 2 => obj3
// let obj3 = Object.assign(obj, obj2);

// console.log("obj3: ", obj3);
// ====> Object mới sinh ra sẽ có tất cả các thuộc tính từ đối tượng khác




///// Spread Syntax sử dụng với hàm
// function sum(){

// }

// let sum = (x, y, z) => {
//   return x + y + z;
// }

// // console.log(
// //   sum(1, 2, 3, 4)
// // ); // => NHẬN 3 BIẾN tổng bằng: 6

// let number = [1, 2, 3, 4]
// console.log(
//   sum(...number)
// );// Lấy toàn bộ từng phần tử của mảng và gán vào tham số trong hàm



//////// Copy mảng
// let arr1 = [1, 2, 3, 4];
// ///// Copy mảng 1 vào biến arr2
// let arr2 = [...arr1];
// console.log("arr2: ", arr2);



/////// copy Đối tượng
let Nguoi = {
  name: "John",
  age: 25
}

let copy_Nguoi = { ...Nguoi }
console.log("copy_Nguoi: ", copy_Nguoi);


