/**
 * mảng là nơi lưu trữ nhiều giá trị cùng kiểu
 * khai báo mảng 
 * let mang=[6,7,9,8,10];
 * let mangc2= new Array(6,7,8,9,10);
 */
let mang = [6, 7, 9, 8, 12, 13, 10];
// let mangc2= new Array(6,7,8,9,10);
// // cách 1 
// console.log(mang[3]);
// hàm tính độ dài của mảng
// console.log(mang.length);
// luôn luôn lấy số
// console.log(mang[mang.length-1]);
// thêm 1 phần tử vào cuối mảng
mang.push(12);
console.log(mang);
// khai báo 1 một mảng có kiểu string gồm 5 phần tử
// lấy phần tử cuối cùng

// hàm splice(x,y,z,z1,z2,z3...);
// xóa y phần tử sau x và thêm 
// xóa 3 phần từ sau thứ 2
mang.splice(2,3,4,5,6);// xóa
console.log(mang)
let ten = ["huy1", "huy2", "huy3", "huy4"];
console.log(ten)
console.log(ten[ten.length - 1]);
ten.push("huy5");
console.log(ten);
ten.splice(4,2,"huy6","huy7","huy8");
console.log(ten);
let mang1=[3,5,7];
 let mang2=mang.concat(mang1);
 console.log(mang2)
// xóa phần tử cuối cùng của mảng
mang1.pop();
console.log(mang1)
// trả về vị trí của phần tử
let fintIndex=mang1.indexOf(5);
//vị trí của phần tử trong mảng
console.log(fintIndex);
// chuyển chuỗi thành mảng 
let str="hôm|nay|là|thứ|7";
let arr_str=str.split("|");
console.log(arr_str);
// chuyển mảng thành chuỗi 
let arr=["a","b","c"];
let arr_arr=arr.join();
console.log(arr_arr);