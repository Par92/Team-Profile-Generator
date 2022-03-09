const {prompt} = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const managerPrompt = [
    {
        message: "What is the manager's name?",
        name: "managerName",
        type: "input"
    }, 
    {
        message: "What is the manager's id number?",
        name: "id",
        type: "input"
    },
    {
        message: "What is the manager's email?",
        name: "email",
        type: "input"
    },
    {
        message: "What is the manager's office number?",
        name: "officeNumber",
        type: "input"
    }
];

const employeePrompt = [
    {
        message: "What is the role of the employee you want to add?",
        name: "role",
        type: "list",
        choices: ["Engineer", "Intern"]
    }, 
    {
        message: (answers)=> `What is the name of the ${answers.role}?`,
        name: "name",
    }, {
        message: (answers)=> `What is the id of the ${answers.role}?`,
        name: "id",
    },
    {
        message: (answers)=> `What is the email of the ${answers.role}?`,
        name: "email",
    }, 
    {
        message: (answers)=> {
            if(answers.role === 'Engineer') return 'What is the github name of the engineer?'
            return 'What is the school this intern graduated from?'
        },
        name: "extra",
    }
]

const employees = []



function addEmployee(){
    prompt({
        message: "What do you want to do?",
        type: "list",
        name: "choice",
        choices: ["Add an employee", "Create roster"]
    }).then(data => {
        console.log("YOUR CHOICE --- ", data.choice);
        if(data.choice === "Add an employee"){
            prompt(employeePrompt)
            .then(data => {
                console.log("answers for employee --- ", data);
                if(data.role === "Engineer"){
                    const emp = new Engineer(data.name, data.id, data.email, data.extra);
                    employees.push(emp)
                }else{
                    const emp = new Intern(data.name, data.id, data.email, data.extra);
                    employees.push(emp)
                }

                console.log(`${data.role} added to team!`);
                setTimeout(addEmployee, 1500);
            })
        }else{
            createHTML()
        }
    })
}

function createHTML(){
    
    console.log("CREATING HTML!!!!!");
    console.log("ALL YOUR EMPLOYEES ---- ", employees);

    const html = `
    <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
                <link rel="stylesheet" href="./style.css">
                <title>Team Profile Generator</title>
            </head>
    
            <body>
                <div class="jumbotron jumbotron-fluid jumbotron-custom">
                <h1>MY TEAM</h1>
                </div>
                
                <div class="container container-custom">
                    ${employees.map(employee => employee.generateHTMLCard(employee.officeNumber || employee.github || employee.school)).join("\n")}
                </div>
            </body>
        </html>
    `

    
    fs.writeFileSync("./dist/output.html", html);
    console.log("ALL DONE, check the dist directory for the html created!")
    
}


function main(){
    
    prompt(managerPrompt).then(data => {
        console.log(data);

        const manager = new Manager(data.managerName, data.id, data.email, data.officeNumber);
        employees.push(manager);

        addEmployee();
    })
}

main();