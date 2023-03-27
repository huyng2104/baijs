// function soHoc(so) {
//     this.so = so;
//     this.chanLe= function(){
//         if (this.so % 2 === 0) {
//             console.log(`${this.so} la so chan`);
//         } else {
//             console.log(`${this.so} la so le`);
//         }
//     }

//     this.giaiThua = function () {
//         let giaiThua = 1;
//         for (let i = 1; i <= this.so; i++) {
//           giaiThua *= i;
//         }
//         console.log(`Giai thua cua ${this.so} la: ${giaiThua}`);
//     }
//     this.soNT = function () {
//         if (this.so < 2) {
//             console.log(`${this.so} khong phai la so nguyen to`);
//         } else {
//             let count = 0;
//             for (let i = 2; i <= Math.sqrt(this.so); i++) {
//                 if (this.so % i === 0) {
//                     count++;
//                 }
//             }
//             if (count == 0) {
//                 console.log(`${this.so} la so nguyen to`);
//             } else {
//                 console.log(`${this.so} khong phai la so nguyen to`);
//             }
//         }
//     }
//     this.soHH=function(){
//         let tongUoc = 0;
//         for (let i = 1; i < this.so; i++) {
//           if (this.so % i == 0) {
//             tongUoc += i;
//           }
//         }
//         if (tongUoc == this.so) {
//           console.log(`${this.so} la so hoan hao`);
//         } else {
//           console.log(`${this.so} khong phai la so hoan hao`);
//         }
//     }
// }

// let sohoc = new soHoc(3);
// sohoc.chanLe();
// sohoc.giaiThua();
// sohoc.soNT();
// sohoc.soHH();


class SinhVien {
    constructor(masv, tensv, namsinh, diemtoan, diemly, diemhoa) {
      this.masv = masv;
      this.tensv = tensv;
      this.namsinh = namsinh;
      this.diemtoan = diemtoan;
      this.diemly = diemly;
      this.diemhoa = diemhoa;
    }
  
    tinhTuoi() {
      let namHienTai = new Date().getFullYear();
      return namHienTai - this.namsinh;
    }
  
    tinhDiemTrungBinh() {
      return (this.diemtoan + this.diemly + this.diemhoa) / 3;
    }
  
    xepLoai() {
      if (this.tinhDiemTrungBinh() >= 6.5) {
        return "Đạt";
      } else {
        return "Không đạt";
      }
    }
  }
  
  let dsSinhVien = [
    new SinhVien("SV01", "Trần Văn A", 2000, 7.5, 8.0, 9.0),
    new SinhVien("SV02", "Nguyễn Thị B", 2001, 6.0, 7.5, 8.0),
    new SinhVien("SV03", "Lê Văn C", 2002, 5.0, 6.5, 7.0),
    new SinhVien("SV04", "Phạm Thị D", 2003, 8.0, 7.5, 9.0),
    new SinhVien("SV05", "Hoàng Văn E", 2004, 7.0, 6.5, 8.5),
  ];
  
  let tongDiemTrungBinh = 0;
  let soSinhVienDat = 0;
  for (let i = 0; i < dsSinhVien.length; i++) {
    let tuoi = dsSinhVien[i].tinhTuoi();
    if (tuoi > 15 && tuoi < 20) {
      console.log(dsSinhVien[i]);
    }
  
    if (dsSinhVien[i].xepLoai() == "Đạt") {
      soSinhVienDat++;
    }
  
    if (tuoi > 15) {
      tongDiemTrungBinh += dsSinhVien[i].tinhDiemTrungBinh();
    }
  }
  
  console.log("Số sinh viên đạt là: " + soSinhVienDat);
  console.log("Tổng điểm trung bình của sinh viên > 15 tuổi là: " + tongDiemTrungBinh);