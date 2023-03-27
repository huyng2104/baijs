//  tạo class giảng vien
// function GiangVien(ten, tuoi,magv){
//     this.ten=ten;
//     this.tuoi=tuoi;
//     this.magv=magv;
//     this.hienthi= function(){
//         return this.ten;
//     }
// }
// // tạo ra đối tượng giảng viên từ class
// // let gv1=new GiangVien("nguyen van a",18,"GV001");
// // let gv2=new GiangVien("nguyen van a",18,"GV001");
// let gv=[]
// gv[0]=new GiangVien("nguyen van a",18,"GV001");
// gv[1]=new GiangVien("nguyen van b",18,"GV002");
// gv[2]=new GiangVien("nguyen van c",18,"GV003");
// console.log(gv[2].ten);
// tạo class hình chữ nhật
// gồm thuộc tính chiều dài, chiều rộng
// tạo 1 mảng đối tượng gồm 5 hình chữ nhật
// và hiển thị chu vi điện tích thứ 4
// function Hcn(chieuDai, chieuRong) {
//     this.chieuDai = chieuDai;
//     this.chieuRong = chieuRong;

//     this.chuVi() = function () {
//         return (this.chieuDai + this.chieuRong) * 2
//     }
//     this.DienTich() = function () {
//         return (this.chieuDai * this.chieuRong);
//     }

// }
// let hinhChuNhat = [];
// hinhChuNhat[0] = new Hcn(3, 4);
// hinhChuNhat[1] = new Hcn(3, 4);
// hinhChuNhat[2] = new Hcn(3, 4);
// hinhChuNhat[3] = new Hcn(3, 4);
// hinhChuNhat[4] = new Hcn(3, 4);

// for (let i = 0, i < hinhChuNhat.length, i++) {

// }
// tạo 1 class nhân viên gồm 
// thuộc tính tên, nam sinh , lương cơ bản ,số ngày công
// tạo phương thức tính tuổi
// tao phương thức = lương cơ bản * số ngày công
// tạo 1 mảng đối tượng gồm 5 nhân viên 
// hiển thị nhân viên có tuổi >30
// tính trung bình lương của đối tượng có tuổi> 30
// class NhanVien {
//     constructor(ten, namSinh, luongCoBan, soNgayCong) {
//       this.ten = ten;
//       this.namSinh = namSinh;
//       this.luongCoBan = luongCoBan;
//       this.soNgayCong = soNgayCong;
//     }
  
//     tinhTuoi() {
//       const namHienTai = new Date().getFullYear();
//       return namHienTai - this.namSinh;
//     }
  
//     tinhLuong() {
//       return this.luongCoBan * this.soNgayCong;
//     }
//   }
  
//   const danhSachNhanVien = [
//     new NhanVien("Nguyen Van A", 1985, 100000, 25),
//     new NhanVien("Tran Thi B", 1990, 150000, 30),
//     new NhanVien("Hoang Van C", 1980, 120000, 28),
//     new NhanVien("Le Thi D", 1995, 110000, 26),
//     new NhanVien("Do Van E", 1978, 200000, 31)
//   ];
  
//   const nhanVienLonHon30 = danhSachNhanVien.filter(nv => nv.tinhTuoi() > 30);
  
//   console.log("Nhân viên có tuổi > 30:");
//   console.log(nhanVienLonHon30);
  
//   const tinhTongLuong = nv => nv.tinhLuong();
//   const luongTuoiLonHon30 = nhanVienLonHon30.map(tinhTongLuong);
//   const trungBinhLuong = luongTuoiLonHon30.reduce((tong, luong) => tong + luong, 0) / luongTuoiLonHon30.length;
  
//   console.log(`Trung bình lương của nhân viên có tuổi > 30 là ${trungBinhLuong}.`);

// tạo 1 class nhân viên gồm 
// thuộc tính tên, nam sinh , lương cơ bản ,số ngày công
// tạo phương thức tính tuổi
// tao phương thức = lương cơ bản * số ngày công
// tạo 1 mảng đối tượng gồm 5 nhân viên 
// hiển thị nhân viên có tuổi >30
// tính trung bình lương của đối tượng có tuổi> 30
function NhanVien(ten,namSinh,luongCb,soNc){
    this.nen=ten;
    this.namSinh=namSinh;
    this.luongCb=luongCb;
    this.soNc=soNc;


    this.tinhTuoi= function(){
        let namHienTai=new Date().getFullYear();
        return namHienTai - this.namSinh;
        

    }
    this.tinhLuong= function(){
        return this.luongCb * this.soNc;
    }  
}
let danhSachNhanVien=[
     new NhanVien("Nguyen Van A", 1985, 100000, 25),
     new NhanVien("Tran Thi B", 1995, 150000, 30),
     new NhanVien("Hoang Van C", 1980, 120000, 28),
     new NhanVien("Le Thi D", 1993, 110000, 26),
     new NhanVien("Do Van E", 1978, 200000, 31)
]
for(let i=0;i<danhSachNhanVien.length;i++)
{
    if(danhSachNhanVien[i].tinhTuoi()>30){
        console.log(danhSachNhanVien[i])
    }
}
for(let i=0;i<danhSachNhanVien.length;i++){
    if(danhSachNhanVien[i].tinhTuoi()>30){

    }
}


