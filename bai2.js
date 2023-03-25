// let a=5;
// if(a>15||a<6){
//     alert("1")

// }
// else if(a>10){
//     alert("2")
// }
// else if(a>8){
//     alert("3");

// }
// else{
//     alert("4")
// }
// let name=prompt("nhap ten");
// let MaSV=prompt("ma sinh vien");
// if (MaSV=='CNTT'){
//     alert("SV phai hoc 7 ki")
// }
// else if(MaSV=='UDPM'){
//     alert("SV hoc 6 ki")
// }
// else{
//     alert("Ma nganh ko hop le")
// }
let a=prompt("nhap a:");
let b=prompt("nhap b:");
let c=prompt("nhap c")
let deta=b*b-4*a*c;
let x1,x2;
if(deta<0){
    alert("pt vo nhiem");
}
else if(deta==0){
    x1=x2=-b/2*a;
    alert("co 2 ngiem kep:"+x1);
}
else if(deta>0){
    x1=((-b+Math.sqrt(deta))/2*a);
    x2=((-b-Math.sqrt(deta))/2*a);
    alert("x1"+x1);
    alert("x2"+x2);
}