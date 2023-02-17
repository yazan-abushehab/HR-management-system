"use strict"
function employee(employeeID, fullName, department, level, image) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageL = image;

}
employee.prototype.salary = function (min, max) {
    let baseSalary = Math.random() * (max - min) + min;
    let Tax = baseSalary * 0.075;
    let netSalary = baseSalary - Tax;
    let netSalary2 = Math.ceil(netSalary)
    return netSalary2;
}

employee.prototype.render = function (min, max) {
    document.write(`${this.fullName + "     "}`);
    document.write(`${this.salary(min, max) + "<br>"}`);

}

let Ghazi = new employee(1000, "ghaziSamer", "Administration", "Senior", "img/d1.jpg");
let Lana = new employee(1001, "lanaAli", "Finance", "Senior", "img/d2.png");
let Tamara = new employee(1002, "tamaraAyoub", "Marketing", "Senior", "img/d3.png");
let Saif = new employee(1003, "saifWalid", "Administration", "Mid-Senior", "img/d4.jpg");
let Omer = new employee(1004, "omerZaid", "Development", "Senior", "img/d5.jpg");
let Rana = new employee(1005, "ranaSaleh", "Development", "Junior", "img/d6.jpg");
let Hadi = new employee(1006, "hadiAhmad", "Finance", "Mid-Senior", "img/d7.jpg");

Ghazi.render(1500, 2000);
Lana.render(1500, 2000);
Tamara.render(1500, 2000);
Saif.render(1000, 1500);
Omer.render(1500, 2000);
Rana.render(500, 1000);
Hadi.render(1000, 1500);