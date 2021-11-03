//Bai 21
function sumArray(mang){
    let sum = 0;
    for (let i = 0; i < mang.length; i++){
        sum += mang[i];
    }
     
    return sum;
}
 
let mang = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1];
document.write("Bài 21:" +"<br/>")
document.write(" Tổng các giá trị của mảng là " +sumArray(mang)+ "<br/>")
// console.log(sumArray(mang));

//Bai 22
var numbers = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1];
var maxInNumbers = Math.max.apply(Math, numbers); 
var minInNumbers = Math.min.apply(Math, numbers);
var sumTBC = 
document.write("Bài 22:" +"<br/>")
document.write("Giá trị lớn nhất là " +maxInNumbers+ "<br/>");
document.write("Giá trị nhỏ nhất là " +minInNumbers+ "<br/>");
