// // khai báo đối tượng
// let sv1={
//     ten:"nguyen van a",// thuộc tính
//     Tuoi :19,
//     maSV:"ph12345",
//     gioitinh:"nam",
//     di: function(){// đây là phương thức và là hàm
//         swal("đi bằng 2 chân")
//     },
//     hiemthi:function () {
//         return this.ten+" " +this.Tuoi
//     }

// }
// // đối tượng bao gồm 2 phần :
// // đặc điểm (thuộc tính là những gì hình thành và nhận dạng đối tượng)
// // hành động hay còn gọi là phướng thức là những gì đối tượng đó có thể thục hiện

// console.log(sv1.ten);
// // gọi phương thức trong đối tượng
// // sv1.di();
// function btn(){
//     let a=sv1.hiemthi();
// alert(a)
// }
// // tạo 1 nút hình chữ nhật với sự kiện onlick
let hcn={
    chieuDai:20,
    chieuRong:10,
chuVi: function(){
     return(this.chieuDai+this.chieuDai)*2
},
dienTich:function(){
    return this.chieuDai*this.chieuRong
}
}
function ChuVi1(){
    let cv=hcn.chuVi();
    alert(cv);
}
function dienTich1(){
    let s=hcn.dienTich();
    alert(s);
}
// tạo 3 đối tượng giảng viên gồm 3 thuộc tính và 2 phương thức
let gv1={
    ten:"nguyen van a",
    tuoi:20,
    maGV:"ph33212",
    tenla:function(){
        return this.ten
    },
    tuoila:function(){
        return (this.tuoi)
    }
}

