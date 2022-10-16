/*
Buổi 5:
1. Chữa bài tập checkpoint: [CRUD, OOP]
2. Học về firebase authentication (Tạo tk firebase, cách nhúng firebase vào dự án)

Chữa bài checkpoint

I. Trắc nghiệm:
1.D
2.C
3.B
4.A
5.A
6.D
7.D
8.C


II. Thực hành

Câu 9: Cho array m = [1,2,3,4,5,6,”hh”, “9”,80,100].
1. Hãy thực hiện xóa những phần tử không phải dạng number.
2. Sau đó, tạo ra một array mới tên là mSquared thỏa mãn:
mSquared[i] = pow(m[i],2).

Câu 10: Thực hiện duyệt string sau đây: “ High knowledge, high return”.
Chuyển đổi string về dạng array, xóa bỏ các phần tử có giá trị là “ “;
và các phần tử có giá trị là chữ hoa chuyển thành chữ thường.


*/

////// chữa bài câu 9
// let m = [1, 2, 3, 4, 5, 6, "hh", "9", 80, 100]

// /// Xóa 1 phần tử không phải dạng number 
// let n = m.filter(item => typeof (item) == "number");
// let mSquared = n.map(item => item * item)
// console.log("mSquared: ", mSquared);


/////// Câu 10: chữa
// let str = " High knowledge, high return";
// let strToArray = str.toLowerCase();
// console.log("strToArray: ", strToArray);
// strToArray = strToArray.split(" ");
// console.log("strToArray: ", strToArray);
// strToArray = strToArray.filter(item => item != "")
// console.log("strToArray: ", strToArray);




/*
Bài 11:
Tạo class People gồm:
Thuộc tính: name, age,address để lưu lần lượt các giá trị tên, tuổi và địa chỉ.
Phương thức trong class People gồm: set(), get() là hàm nhập và xuất;
Tạo class Students kế thừa từ class People.
Class Students sẽ có thêm:
Thuộc tính id để lưu mã sinh viên, math lưu điểm môn toán, physical để lưu điểm môn vật lý, chemistry để lưu điểm môn hoá học.
Phương thức: set(), get(), GPA() để tính điểm trung bình 3 môn học  


*/


///// Chữa bài 11: 

class People {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address
  }

  set(prop, value) {
    this[prop] = value
    return this[prop]
  }

  get(prop) {
    return this[prop]
  }

}

let MinhTien = new People("Minh Tiến", 18, "Hà Nội");

MinhTien.set("name", "Trung Hiếu");
console.log("MinhTien: ", MinhTien);
console.log(
  MinhTien.get("age")
);


///// Tạo 1 class Student kế thừa từ class cha
class Student extends People {
  constructor(name, age, address, id, math, physical, chemistry) {
    super(name, age, address); /// Kế thừa từ cha nó 3 thuộc tính
    this.id = id;
    this.math = math;
    this.physical = physical;
    this.chemistry = chemistry;
  }

  // Get và set đều đã được kế thừa từ cha

  GPA() {
    /////// convert từ string => number
    if (typeof (this.math + this.physical + this.chemistry) !== "number") {
      return "Score must be number"
    }

    const arr = [this.math, this.physical, this.chemistry];
    const total = arr.reduce((a, current) => a + current); // tổng 3 cái
    const average = total / arr.length;
    return average;
  }

}

let student = new Student("John", 24, "Hà Nội", "0123456789", 10, 5, 10);
console.log(student);


