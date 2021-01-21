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
            } else if (data.position === "Intern") {
                return internInfo()
            } else {
                console.log("please select one")
            } ///refactor this 
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
            console.log(employeeArr)
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
            console.log(newEngineer)
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
            console.log(newIntern)
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
            if (data.choice){
                this.employeeInfo()
            } else {
                console.log("Success")
            }
    })
}

employeeInfo()



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.


