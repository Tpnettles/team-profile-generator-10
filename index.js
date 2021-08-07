const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const Output_DIR = path.resolve(__dirname,'output');
const outputPath = path.join(Output_DIR, 'createdTeamPage.html');

const generateHTML = require('./src/html-template');
const Manager = require('./lib/Manager');
const Engineer = require("./lib/Engineer");
const Employee1 = require("./lib/Employee");
const Employee2 = require("./lib/Employee");
const Intern = require("./lib/Intern");

const teamMembers = [];

inquirer
  .prompt([
    //managers info------------------------------------------------------------------

    {
      type: "input",
      name: "managerName",
      message: "What is your lead manager's name?",
    },

    {
      type: "input",
      name: "managerId",
      message: "What is your lead manager's id number?",
    },

    {
      type: "input",
      name: "managerEmail",
      message: "What is your lead manager's email address?",
    },

    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is the contact number to your lead manager's office?",
    },

    //engineer info--------------------------------------------------------------------

    {
      type: "input",
      name: "engineerName",
      message: "Enter your engineer's name.",
    },

    {
      type: "input",
      name: "engineerId",
      message: "Enter your engineer's id number.",
    },

    {
      type: "input",
      name: "engineerEmail",
      message: "Enter your engineer's email address.",
    },

    {
      type: "input",
      name: "engineerGitHub",
      message: "Enter your engineer's GitHub link.",
    },

    //employee 1 info-------------------------------------------------------------------------

    {
      type: "input",
      name: "employee1Name",
      message: "What is your team lead's name?",
    },

    {
      type: "input",
      name: "employee1Id",
      message: "What is your team lead's id number?",
    },

    {
      type: "input",
      name: "employee1Email",
      message: "What is your team lead's email address?",
    },

    //employee 2 info-------------------------------------------------------------------------

    {
      type: "input",
      name: "employee2Name",
      message: "Enter your second employee's name.",
    },

    {
      type: "input",
      name: "employee2Id",
      message: "Enter your second employee's id number.",
    },

    {
      type: "input",
      name: "employee2Email",
      message: "Enter your second employee's email address.",
    },
    //intern info------------------------------------------------------------------------------

    {
      type: "input",
      name: "internName",
      message: "What is your intern's name?",
    },

    {
      type: "input",
      name: "internId",
      message: "What is your intern's id number.",
    },

    {
      type: "input",
      name: "internEmail",
      message: "What is your intern's email address?",
    },

    {
      type: "input",
      name: "internSchool",
      message: "What school does your intern attend?",
    },
  ])
  .then((answers) => {
    // create an manager object
    const manager = new Manager(
      answers.managerName,
      answers.managerId,
      answers.managerEmail,
      answers.managerOfficeNumber
    );
     const engineer = new Engineer(
       answers.engineerName,
       answers.engineerId,
       answers.engineerEmail,
       answers.engineerGitHub
    );
    const employee1 = new Employee1(
      answers.employee1Name,
      answers.employee1Id,
      answers.employee1Email

    );const employee2= new Employee2(
      answers.employee2Name,
      answers.employee2Id,
      answers.employee2Email

    );const intern = new Intern(
      answers.internName,
      answers.internId,
      answers.internEmail,
      answers.internSchool
    );
    console.log(manager, engineer, employee1, employee2, intern);
    teamMembers.push(manager, engineer, employee1, employee2, intern);
    const htmlPageContent = generateHTML(answers);
    createFile(htmlPageContent);
  });



function createFile(htmlCode) {
  if (!fs.existsSync(Output_DIR)) {
    fs.mkdirSync(Output_DIR);
  }

  fs.writeFileSync(outputPath, htmlCode, 'utf-8');
}
