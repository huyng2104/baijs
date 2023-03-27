// let str ="hihi haha hoho";
// console.log(str.substring(5,9));
// let str1="hom nnay la thu ba";

// str2=str.substring(str.length-4,str.length);
// str3=str1.substring(str1.length-3,str1.length);
// str4=str2.concat(" ",str3);
// console.log(str4);

// let a=5;
// let b=6;
// let c=7;


// // hàm dùng để đóng gói gọn vào 1 chỗ và mang tính tái sử dụng cao
// /*
//  * có trả về ---> return
//  * ko trả về ---> ko return
//  * hàm có tham số 
//  */
// //khai báo hàm ko trả về
// function tinhTong(a,b)/*biến tham số */{
//     // tất cả nhhung j được gọi là tham số
//     let c=a+b;
//     alert(c);
// }
// // gọi hàm 
// tinhTong(7,8);// có bao nhiêu tham số truyền bấy nhiêu giá trị tương ứng
// tinhTong(10,25);
// khai báo hàm có trả về
// function tinhTongReturn(a,b){
//     return a+b;
// }
//  let tong=tinhTongReturn(7,8);// trả về 1 giá trị cụ thể 
//  let tong2=tong-15;
//  alert(tong);
// nhập chiều dài chiều rộng 
// tính chu vi va diện tích hình chữ nhật
// function chuVi(a,b){
//     return (a+b)*2;
// }
// let chuVi1=chuVi(parseInt(prompt("moi nhap a:")),parseInt(prompt("moi nhap b:")));
// alert("chu vi"+chuVi1);
// function dienTich(a,b){
//     return a*b;
// }
// let dienTich1=dienTich(parseInt(prompt("moi nhap a:")),parseInt(prompt("moi nhap b:")));
// alert("dien tich"+dienTich1);
// function kiemTra(n){
//     if (n%2 == 0) {
//         return n + " la so chan";
//       } else {
//         return n + " la so le";
//     }
// }
// kiemTra1=kiemTra(parseInt(prompt("nhap n:")));
// alert(kiemTra1);
// mô phỏng lại hàm pow truyền vào tham số a và n output là a và n output là a^n
  function pow(a,n){
    if (n == 0) {
      return 1;
    }
    let result = a;
    for (let i = 1; i < n; i++) {
      result *= a;
    }
    return result;
}
pow1=pow(parseInt(prompt("nhap a")),parseInt(prompt("nhap n")));
alert(pow1);
console.log(result);