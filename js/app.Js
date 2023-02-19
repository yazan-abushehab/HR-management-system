"use strict"
function employee(fullName, department, level, image) {
    this.employeeID = 0;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image = image;

}
employee.prototype.getemployeeID = function (){
    this.employeeID = getRandomInt();
} 
 function getRandomInt(){   
   return Math.floor(Math.random() * 9000 + 1000);
}
employee.prototype.render = function (){
    const container = document.getElementById('employ');
    
    
    const divEl = document.createElement('div');
    container.appendChild(divEl);
    
    const nameEl = document.createElement('h4');
    divEl.appendChild(nameEl);
    nameEl.textContent = this.fullName;
    
    const idEl =document.createElement('h4');
    divEl.appendChild(idEl);
    idEl.textContent = this.employeeID;

    const depEl = document.createElement ('h4');
    divEl.appendChild(depEl);
    depEl.textContent = this.department;

    const levEl = document.createElement ('h4');
    divEl.appendChild(levEl);
    levEl.textContent = this.level;

    const imgEl = document.createElement ('img');
    divEl.appendChild(imgEl);
    imgEl.setAttribute ('src',this.image);
}
let employeeForm = document.getElementById("employeeform");
employeeForm.addEventListener('submit',newEmployee);

function newEmployee(event){
    event.preventDefault();
    let employeeName = event.target.name.value;
    let depar = event.target.Department.value;
    let lev = event.target.level.value;
    let imge = event.target.imgUrl.value;

    let newEmployee = new employee (employeeName,depar,lev,imge);
    newEmployee.getemployeeID();
    newEmployee.render();

}




// console.log( Math.floor(Math.random() * 9000 + 1000));
// employee.prototype.salary = function (min, max) {
//     let baseSalary = Math.random() * (max - min) + min;
//     let Tax = baseSalary * 0.075;
//     let netSalary = baseSalary - Tax;
//     return netSalary;
// }
// employee.prototype.render =function(){
//     document.write (this.employeeID)
// }

// employee.prototype.render = function (min, max) {
//     document.write(`${this.fullName+"     "}`);
//     document.write(`${this.salary(min, max)+"<br>"}`);
 
// }

//let Ghazi = new employee("ghaziSamer", "Administration", "Senior", "path");
// let Lana = new employee(1001, "lanaAli", "Finance", "Senior", "img/d2.png");
// let Tamara = new employee(1002, "tamaraAyoub", "Marketing", "Senior", "img/d3.png");
// let Saif = new employee(1003, "saifWalid", "Administration", "Mid-Senior", "img/d4.jpg");
// let Omer = new employee(1004, "omerZaid", "Development", "Senior", "img/d5.jpg");
// let Rana = new employee(1005, "ranaSaleh", "Development", "Junior", "img/d6.jpg");
// let Hadi = new employee(1006, "hadiAhmad", "Finance", "Mid-Senior", "img/d7.jpg");
// Ghazi.getemployeeID();
 // Ghazi.render();
// Lana.render(1500,2000);
// Tamara.render(1500,2000);
// Saif.render(1000,1500);
// Omer.render(1500,2000);
// Rana.render(500,1000);
// Hadi.render(1000,1500);