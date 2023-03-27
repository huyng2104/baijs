/**
 * viết 1 hàm 
 * tính giai thừa với tham số đầu vào là x
 * output là kết quả của giai thừa 
 */
function tinhGiaiThua(x){
    let result=1
    for(let i=1;i<=x;i++){
         result*=i;
    }
    return result;
}
 let tinhGT=tinhGiaiThua(5);
alert(tinhGiaiThua(5))

// hiển thị ra 10 lần
// for (let i ; i<10 ;i++){
//}
