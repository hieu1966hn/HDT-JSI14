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
let VietDuc = {
  name: "Việt Đức",
  age: 17,
  address: "RC"
}

console.log(VietDuc);

/// Khai báo 1 đối tượng máy tính
let Laptop = {
  cpu: "m1",
  ram: "16gb",
  monitor: "13inch",
  price: "30tr",
}


/////// Thay đổi giá trị trong Object
Laptop.cpu = "i9 9750h"
Laptop.card = "RTX 3080ti"


/// C,R,U,D: 


//// Update: gán lại giá trị cho khóa

/// Delete: Xóa khóa monitor trong đối tượng

delete Laptop.monitor

let BaoLam = {
  name: "Bảo Lâm",
  address: ['Hà Nội', "HCM", "Đà Nẵng"],
  dog: {
    name: "bon",
    age: 1
  }
}