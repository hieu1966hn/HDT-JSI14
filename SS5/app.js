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
*/
let m = [1, 2, 3, 4, 5, 6, "hh", "9", 80, 100]

/// Xóa 1 phần tử không phải dạng number 
let n = m.filter(item => typeof (item) == "number");
let mSquared = n.map(item => item * item)
console.log("mSquared: ", mSquared);



