// Trac Nghiem:
/*
    1. D đúng
    2. C đúng
    3. B đúng
    4. A đúng
    5. A đúng
    6. C đúng
    7. D đúng
    8. B đúng
*/

// const ex9 = () => {
//   let m = [1, 2, 3, 4, 5, 6, "hh", "9", 80, 100];
//   m = m.filter((v) => typeof v == "number");
//   console.log(m)
//   const mSquared = m.map((v) => Math.pow(v, 2));
//   alert("Kiểm tra console để kiểm tra value");
//   console.log("m: ", m);
//   console.log("mSquared: ", mSquared);
//   return {
//     m,
//     mSquared,
//   };
// };




// const ex10 = () => {
//   const str = "High knowledge, high return";
//   let arr = [...str];
//   arr = arr.filter((v) => v != " ").map((v) => v.toLowerCase());
//   alert("Hãy mở console để kiểm tra đầu ra");
//   console.log("arr: ", arr);
//   return arr;
// };



// const ex11 = () => {
// class People {
//   constructor(name, age, address) {
//     this._name = name;
//     this._age = age;
//     this._address = address;
//   }

//   set(key, value) {
//     this[key] = value;
//     return this[key];
//   }

//   get(key) {
//     return this[key];
//   }

//   getAll() {
//     return this;
//   }
// }

//   class Students extends People {
//     constructor(name, age, address, id, math, physical, chemistry) {
//       super(name, age, address);
//       this.set("_id", id);
//       this.set("_physical", physical);
//       this.set("_chemistry", chemistry);
//       this.set("_math", math);
//     }

//     GPA() {
//       const math = this.get("a_math");
//       const physical = this.get("_physical");
//       const chemistry = this.get("_chemistry");

//       return (math + physical + chemistry) / 3;
//     }
//   }

//   // return {
//   //   People,
//   //   Students,
//   // };
// // };

// let Hieu = new Students("Hiếu", 24, "Hà Nội", "0123456789", 8, 9, 10);
// console.log("Hieu: ", Hieu);





const ex14 = () => {
  const opt = prompt("C - Thêm thí sinh, R - Tìm thí sinh, E - Thoát chương trình");
  if (!["c", "r", "e"].includes(opt.toLowerCase())) {
    alert("K hợp lệ");
    return ex14();
  }

  class Students {
    constructor(id, name, address, priority) {
      this._id = id;
      this._name = name;
      this._address = address;
      this._priority = priority;
    }

    set(key, value) {
      this[key] = value;
      return this[key];
    }

    get(key) {
      return this[key];
    }

    getAll() {
      return this;
    }
  }

  class SA extends Students {
    constructor(id, name, address, priority, math, physical, chemistry) {
      super(id, name, address, priority);
      this.set("_math", math);
      this.set("_physical", physical);
      this.set("_chemistry", chemistry);
      this.set("_kt", "A");
    }
  }

  class SB extends Students {
    constructor(id, name, address, priority, math, biology, chemistry) {
      super(id, name, address, priority);
      this.set("_math", math);
      this.set("_biology", biology);
      this.set("_chemistry", chemistry);
      this.set("_kt", "B");
    }
  }

  class SC extends Students {
    constructor(id, name, address, priority, literature, history, geography) {
      super(id, name, address, priority);
      this.set("_literature", literature);
      this.set("_history", history);
      this.set("_geography", geography);
      this.set("_kt", "C");
    }
  }

  class TuyenSinh {
    constructor() {
      this.registeredStudents = [];
    }

    add(id, name, address, priority, kt) {
      const params = [id, name, address, priority];
      const registeredStudents = this.registeredStudents;
      if (kt == "A") {
        const student = new SA(...params);
        registeredStudents.push(student);
      } else if (kt == "B") {
        const student = new SB(...params);
        registeredStudents.push(student);
      } else if (kt == "C") {
        const student = new SC(...params);
        registeredStudents.push(student);
      } else {
        alert("KT không hợp lệ: A, B hoặc C");
        return false;
      }
      return true;
    }

    getInfo(id) {
      return this.registeredStudents.find((v) => v._id == id);
    }

    find(id) {
      if (!this.registeredStudents.find((v) => v._id == id)) {
        alert("Không tìm thấy thí sinh");
        return null;
      } else return getInfo(id);
    }
  }

  const ts = new TuyenSinh()

  if (opt.toLowerCase() == 'c') {
    const id = prompt("ID?");
    const name = prompt("Họ và tên?");
    const address = prompt("Dia chi?");
    const priority = prompt("Muc uu tien?");
    const kt = prompt("Khoi thi?")

    const success = ts.add(id, name, address, priority, kt);

    if (success) alert("Thanh cong");
  } else if (opt.toLowerCase() == 'r') {
    const id = prompt("ID?");
    const value = ts.find(id);
    if (value) {
      alert("Kiểm tra console để biết thêm thông tin về thí sinh");
      console.log(value)
    }
  } else if (opt.toLowerCase() == 'e') {
    return;
  }

  ex14();
};

ex14();



// const ex12 = () => {
// const hcnDai = prompt("Chiều dài hình chữ nhật?");
// const hcnRong = prompt("Chiều rộng hình chữ nhật?");
// const htgDay = prompt("Đáy hình tam giác?");
// const htgCCao = prompt("Chiều cao hình tam giác?");


// if (
//   !parseInt(hcnDai) ||
//   !parseInt(hcnRong) ||
//   !parseInt(htgDay) ||
//   !parseInt(htgCCao)
// ) {
//   alert("Sai kiểu dữ liệu! Hãy đảm bảo được truyền vào một số hợp lệ");
//   // return null;
// }

// class Hinh {
//   constructor(dai, rong) {
//     this._dai = dai;
//     this._rong = rong;
//   }
// }

// class HTG extends Hinh {
//   constructor(dai, rong) {
//     super(dai, rong);
//   }

//   area() {
//     return (this._dai * this._rong) / 2;
//   }
// }

// class HCN extends Hinh {
//   constructor(dai, rong) {
//     super(dai, rong);
//   }

//   area() {
//     return this._dai * this._rong;
//   }
// }

// const hcn = new HCN(hcnDai, hcnRong);
// const htg = new HTG(htgCCao, htgDay);

// alert("Diện tích hình chữ nhật: " + hcn.area());
// alert("Diện tích hình tam giác: " + htg.area());
// };

// const ex13 = () => {
//   class Animal {
//     constructor(name, age) {
//       this._name = name;
//       this._age = age;
//     }

//     set_value(key, value) {
//       this[key] = value
//     }
//   }

//   class Zebra extends Animal {
//     constructor(name, age, origin) {
//       super(name, age);
//       this.set_value('_origin', origin)
//     }
//   }

//   class Dolphin extends Animal {
//     constructor(name, age, origin) {
//       super(name, age);
//       this.set_value('_origin', origin)
//     }
//   }

//   const zebraName = prompt("Tên ngựa vằn");
//   const zebraAge = prompt("Tuổi ngựa vằn");
//   const zebraOrigin = prompt("Nguồn gốc ngựa vằn");
//   const dolphinName = prompt("Tên cá heo");
//   const dolphinAge = prompt("Tuổi cá heo");
//   const dolphinOrigin = prompt("Nguồn gốc cá heo");

//   const zebra = new Zebra(zebraName, zebraAge, zebraOrigin);
//   const dolphin = new Dolphin(dolphinName, dolphinAge, dolphinOrigin);

//   alert(`Ngựa vằn có tên "${zebra._name}", tuổi là ${zebra._age} và có nguồn gốc từ ${zebra._origin}`)
//   alert(`Cá heo có tên "${dolphin._name}", tuổi là ${dolphin._age} và có nguồn gốc từ ${dolphin._origin}`)

// }

// ex13();