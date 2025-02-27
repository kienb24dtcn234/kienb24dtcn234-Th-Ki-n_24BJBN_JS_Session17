let user = prompt("Nhập một số bất kỳ:");  
let number = parseFloat(user);  
if (!isNaN(number) && number >= 0) {    
    let squareRoot = Math.sqrt(number);   
    alert("Căn bậc hai của " + number + " là: " + squareRoot.toFixed(2));  
} else {  
    alert("Vui lòng nhập một số dương hợp lệ.");  
}  