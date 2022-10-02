/// OOP là gì? Vai trò của OOP trong lập trình?
/*
OOP là gì?
- Phúc Anh: 
- Nhật Minh: Lập trình hướng đối tượng là pp lập trình dựa trên các khái niệm class và Object
- Bảo Lâm: 

Vai trò?
- Nhật Minh: Tăng khả năng tái sử dụng
- Bảo Lâm: 
*/


//////// Cú pháp OOP trong JS
//// Khởi tạo class trong JS
//// Khai báo Người
// class Person {

//   say() {
//     alert("Hello, How are you!!")
//   }
// }

// let MinhTien = new Person();
// MinhTien.say()

/// Ví dụ chưa có kiểu dữ liệu array
// class Array1{
//   filter(){
//     return []
//   }

//   map(){
//     return []
//   }


// }

/////////// Thuộc tính của Class
class Person {
  /// Khai báo thuộc tính 
  constructor(name, age, address, id) {
    // Gán giá trị  với class
    this._name = name;
    this._age = age;
    this._address = address;
    this._id = id;
  }
}


let Hieu = new Person('Hiếu', 25, "Hà Nội", "0123456789");
// console.log("Hieu: ", Hieu);
console.log(Hieu._address);

