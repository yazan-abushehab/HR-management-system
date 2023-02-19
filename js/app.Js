"use strict"
function employee(fullName, department, level, image) {
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image = image;
    this.setemployeeID();
    if (level==="Junior"){
        this.salary=this.getsalary(500,1000)
    }else if (level==="Mid-senior"){
        this.salary=this.getsalary(1000,1500)
    }else {
        this.salary=this.getsalary(1500,2000) 
    }

}
employee.prototype.setemployeeID = function (){
    this.employeeID = getRandomInt();
}
const ids = []; 
function getRandomInt(){   
   const randomId =  Math.floor(Math.random() * 9000 + 1000);
   if (!ids.includes(randomId)){
    ids.push(randomId)
    return randomId;
   }
   return getRandomInt();
 }
employee.prototype.render = function (){
    let elName;
if (dep === 'admin') elName = 'admin'
else if (dep === 'dev') elNeme = 'dev'


    const container = document.getElementById("employ");
    container.classList.add("container")
    
    const divEl = document.createElement('div');
    container.appendChild(divEl);
    divEl.classList.add("divElc")

    const imgEl = document.createElement ('img');
    const El = document.createElement ('div');
    El.appendChild(imgEl);
    divEl.appendChild(El);
    imgEl.setAttribute ('src',this.image);
    imgEl.classList.add("image")
    El.classList.add("imageDiv")

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

    const salaryEl = document.createElement ('h4');
    divEl.appendChild(salaryEl);
    salaryEl.textContent = this.salary;  
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
    newEmployee.render();


}
employee.prototype.getsalary = function (min, max) {
    let baseSalary = Math.random() * (max - min) + min;
    let Tax = baseSalary * 0.075;
    let netSalary = baseSalary - Tax;
    let netSalary2 = Math.ceil(netSalary)
    return netSalary2;
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
