let width = parseFloat(prompt("Nhập vào bán kính hình trụ:"));  
let height = parseInt(prompt("Nhập vào chiều cao hình trụ:"));
let pi = 3.14;
let Sxungquanh = (2 * pi * width * height);
document.write("Diện tích xung quanh hình trụ là " + Sxungquanh + " <br>");
let Stoanphan = Math.round(2 * pi * width * (width + height));
document.write("Diện tích toàn phần hình trụ là " + Stoanphan + " <br>");
let Thetich = (pi * width ^ 2 * height);
document.write("Thể tích hình trụ là " + Thetich + " <br>");
let Chuviday = Math.round(2 * pi * width);
document.write("Chu vi đáy hình trụ là " + Chuviday + " ");

