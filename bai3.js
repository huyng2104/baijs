//mot so ham su li string

// dem xem trong chuoi co bao nhieu ki tu// chiều dài chuỗi
console.log(str.length);
//cat chuoi
console.log(str.substring(0,3));
console.log(str.substring(4,6));
// noi chuoi

let str2=str.concat(" ",str1);
console.log(str2);
// cat chuoi 
let str3=(str.substring(str.length-3,str.length));
let str4=(str1.substring(str.length-6,str1.length));
let str5=str3.concat(" ",str4);
console.log(str5);
//hàm viết hoa
let str="toi la huy";
let str1="dep trai";
let srtH=str.toUpperCase();//Viết hoa
console.log(strH);
let strT=strH.toLowerCase();//Viết Thường
console.log(strT);
//kiểm tra có phải là số hay khônng
let x=3;
let check= isNaN(x);// biến check false là số
// biến check là trul ko phải số
if(check==false){
    alert("la so");
}else{
    alert("ko phai so");
}

//kiểm tra số nguyên
let k=3;
let k1="hihi";
console.log(Number.isInteger(k));//số sẽ hiển thị ra trul
console.log(Number.isInteger(k1));//la chuoi sẽ hiển thị ra false
// làm tròn số
let num=1.654;
let numa=num.toFixed();//lam tròn 
let numb=num.toFixed(2);// làm tròn tùy theo
console.log(numa);
console.log(numb);
str.length;//đếm chuỗi 
str.substring();//cắt chuỗi
str.concat()//nối chuỗi
str.toUpperCase()//viết hoa
str.toLowerCase();//viết thường
Number.isInteger();//kiểm tra số nguyên

