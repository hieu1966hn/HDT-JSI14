/*
- Bất đồng bộ trong JS
- Làm bài kiểm tra checkpoint
- Lên ý tưởng dự án cuối khóa



- Vì sao JS được gọi là ngôn ngữ bất đồng bộ?
+ Ngôn ngữ thông dịch (code đến đây chạy đến đó) || JAVA biên dịch code từ đầu đến cuối sau khi viết xong

- Xử lý bất đồng bộ trong JS như thế nào?
*/


/// VD sau: 




///=> giải quyết thế nào?  (Không thay đổi time)
function task1(task2) {
  setInterval(() => {
    console.log("Task 1");
    task2();
  }, 3000);
}

function task2() {
  setInterval(() => {
    console.log("Task 2");
  }, 2000)
}

//// Callback 
task1(task2);

