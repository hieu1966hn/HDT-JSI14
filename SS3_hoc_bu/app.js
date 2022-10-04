/*
Buổi 2:
KDL nguyên thủy:
1. Number: Số
2. String: chuỗi
3. null: rỗng
4. undefined: Không xác định
5. boolean: true/false
6. Object: Đối tượng


Toán tử:
1. Gán: =
2. So sánh: <,>,<=,>=, ==, ===, !=, !==
3. logic: && (true && true), || (false || false)
4. số học: +,-,*,/,%
5. 3 ngôi:

*/

// let a;
// console.log(a);

// console.log(
//   3 % 5
// );// => 3 


//// VD về toán tử logic
// console.log(
//   2 > 2 && 3 > 2 && 4 > 2
// );/// => false


// console.log(
//   3 > 4 || 5 < 4 || 10 > 9
// ); // => true



/////// Cú pháp liên quan tới mảng: 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*
map: Thực hiện hành động với từng phần tử của mảng => 1 mảng mới đã thực hiện xong hành động với toàn mảng cũ
- map chỉ dành cho KDL mảng.
*/
//// Bài toán *2 toàn bộ phần tử mảng arr và in ra kết quả 
let arr1 = arr.map(item => item * 2) // [2,4,...20]
console.log(
);