const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

var employeeArr = []

function employeeInfo() {
     inquirer
        .prompt([
            {
                type: "list",
                message: "Identify the employee position",
                choices: ["Manager", "Engineer", "Intern"],
                name: "position"
            }
        ]).then(data => {
            if (data.position === "Manager") {
                 return managerInfo();
            } else if (data.position === "Engineer") {
                return engineerInfo();
            } else {
                return internInfo()
            } 
        })
        
}


function managerInfo() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Name of Manager",
                name: "name"
            },
            {
                type: "input",
                message: "ID of Manager",
                name: "id"
            },
            {
                type: "input",
                message: "Email of Manager",
                name: "email"
            },
            {
                type: "input",
                message: "Office number?",
                name: "officeNumber"
            },
            
        ])
        .then(data =>{ var newManager = new Manager(data.name, data.id, data.email, data.officeNumber);
            employeeArr.push(newManager);
            console.log(`Welcome ${data.name}!`)
            console.log(employeeArr)
            addNew()
        })
        
}

function engineerInfo() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Name of Engineer",
                name: "name"
            },
            {
                type: "input",
                message: "ID of Engineer",
                name: "id"
            },
            {
                type: "input",
                message: "Email of Engineer",
                name: "email"
            },
            {
                type: "input",
                message: "Github username?",
                name: "github"
            }
        ]).then(data =>{ var newEngineer = new Engineer(data.name, data.id, data.email, data.github);
            employeeArr.push(newEngineer);
            console.log(`Welcome ${data.name}!`)
            console.log(employeeArr)
            addNew()
        })
}

function internInfo() {
    inquirer
        .prompt([
             {
                type: "input",
                message: "Name of Intern",
                name: "name"
            },
            {
                type: "input",
                message: "ID of Intern",
                name: "id"
            },
            {
                type: "input",
                message: "Email of Intern",
                name: "email"
            },
            {
                type: "input",
                message: "Intern School",
                name: "school"
            }
        ]).then(data =>{ var newIntern = new Intern(data.name, data.id, data.email, data.school);
            employeeArr.push(newIntern);
            console.log(`Welcome ${data.name}!`)
            console.log(employeeArr)
            addNew()
        })
}

function addNew(){
    inquirer
    .prompt([
        {
            type: "confirm",
            name: "choice",
            message: "Add another employee?"
        } 
    ]).then(data =>{ 
            data.choice ? employeeInfo() : fs.writeFileSync(outputPath, render(employeeArr), "utf-8")
            }
    )
}

employeeInfo()