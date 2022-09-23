// Nơi code JS

//////// Biến: dùng để  làm gì?: Nơi lưu trữ dữ liệu
/// Khai báo biến: let, var, const (let/var: dùng để khai báo biến thường, const: khai báo hằng số)


/*
Kiểu dữ liệu:
1. Number: Số: 1,2,3,4
2. String: Chữ< "", '', ``
3. Boolean: true/false: 1<2, 1>2
4. Object: Đối tượng: {name: "Huy Bình", age: 14}
5. null: Rỗng
6. undefined: Không xác định (khi khai báo biến nhưng không gán giá trị)
*/


/*
Toán tử:
1. Toán tử gán: =
VD: let i = 10;


2. Toán tử số học: +, - , *, /, %
VD: let a = 1+1;


3. Toán tử so sánh: <, >, <=, >=, ==, ===

4. Toán tử 3 ngôi: (điều kiện)? lệnh 1: lệnh 2
VD:
console.log(
  (1 > 2) ? "Đúng" : "Sai"
); // => Sai
*/


/*
Mô tả về phép toán: /, %
/: Chia bình thường
%: Chia lấy số dư
*/
// console.log(4 / 3); // 1.33 // 1
// console.log(3 / 4); // 0.75 // 0.75

////// Chia lấy số dư
// console.log(4 % 3); // 1 
// console.log(3 % 4); // 3




////// VD về toán tử so sánh: 
// let a = 1;
// let b = "1";
// console.log(a == b);// true // true
// console.log(a === b);// false // false
/*
==: So sánh tương đối - hiểu là chỉ so sánh về giá trị
===: So sánh tuyệt đối - hiểu là so sánh cả về Giá trị & Kiểu dữ liệu
*/


/*
if(điều kiện){
  Câu lệnh 1
}
else{
  Câu lệnh 2
}


if(điều kiện){
  Câu lệnh 1
}
else if(điều kiện 2){
....
}
else if(điều kiện 3){

}
else{
  Câu lệnh 2
}


*/
// if (1 > 2) {
//   console.log("In ra if");
// }
// else {
//   console.log("In ra else");
// }

// let num = 7;
// if (num < 7) {
//   console.log("Số này nhỏ hơn 7");
// }
// else if (num === 7) {
//   console.log("Số này bằng 7");
// }

// else {
//   console.log("Số này lớn hơn 7");
// }


/*
Có mấy vòng lặp cơ bản: 3
1. while
2. do while
3. For

*/

// Đề bài: In ra số từ 1 -> 10
let i = 1;
while (i <= 10) {
  console.log(i);// 1,2,3,4, ...9,10
  i = i + 1;//2, 3,4,....10,11
}
console.log(i, "giá trị của i sau vòng lặp while là");// 11

/*
while(điều kiện){
  ....
  *lưu ý: sau mỗi lần lặp => nên có ít nhất 1 giá trị nào đó thay đổi
}
*/

