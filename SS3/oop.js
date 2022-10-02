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
// class Person {
//   /// Hàm khởi tạo: Khai báo thuộc tính 
//   constructor(name, age, address, id) {
//     // Gán giá trị  với class
//     this._name = name;
//     this._age = age;
//     this._address = address;
//     this._id = id;
//   }

//   say() {
//     alert("Tôi đang nói đấy")
//   }

//   coding() {
//     alert("Đang code đấy đừng động vào")
//   }
// }


// let Hieu = new Person('Hiếu', 25, "Hà Nội", "0123456789");
// // console.log("Hieu: ", Hieu);
// console.log(Hieu._address);
// Hieu.coding()



/*
Bốn tính chất của OOP:
1. Đóng gói
2. Đa hình
3. Kế thừa
4. Trừu tượng

*/

///// Tính kế thừa
class Person {
  constructor(_name, _age, _address) {
    this.name = _name;
    this.age = _age;
    this.address = _address;

  }

  say() {
    return `I'am Person and my name is ${this.name}`
  }
}

/////Khai báo class Student kế thừa từ class Person
class Student extends Person {
  constructor(_name, _age, _address, _class, _idStudent) {
    // Sử dụng cú pháp super() để kế thừa các thuộc tính cha đã có
    super(_name, _age, _address);
    this.class = _class;
    this.idStudent = _idStudent;
  }

  /// Có sẵn Phương thức say()
  say() {
    /// Kế thừa và ghi đè phương thức say()
    super.say(); // Kế thừa phương thức
    return super.say() + ` and I am learning code from MindX School`
  }
}


let TuanAnh = new Student("Tuấn Anh", 14, "Liễu Giai", "HDT-JSI14", 123);
console.log(
  TuanAnh.say()
);