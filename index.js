const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require('chalk');
const html = require('./dist/generateHtml');

const Question = [
    "Enter name: ",
    "Enter id: ",
    "Enter email: ",
];

class teambuild {
  constructor(){
    this.returndiv = [];
  } 

    writeToFile() {
      const htmlContent = html.generateHtml(this.returndiv.toString().split(",").join(""));
      fs.writeFile('index.html', htmlContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
      );
  }

  start(){
    this.askManager();
  }

    askManager(){
      console.log(chalk.green('-----MANAGER-----'));
      inquirer
        .prompt([
          {
            type: "input",
            name: "name",
            message: Question[0],
          },
          {
            type: "input",
            name: "id",
            message: Question[1],
          },
          {
            type: "input",
            name: "email",
            message: Question[2],
          },
          {
            type: "input",
            name: "officenum",
            message: "Enter Office Number: ",
          },
        ])
        .then(data => {
          this.returndiv.push(html.getManager(data));
          this.asktypeofEmployee();
        });
    }

    asktypeofEmployee(){
      inquirer
        .prompt([
          {
            type: "list",
            name: "choice",
            message: "What type of employee would you like to add",
            choices: ["An Engineer", "An Intern"],
          },
        ])
        .then(val => {
            if(val.choice === "An Engineer"){
                this.askEngineer();
            }
            if(val.choice ==="An Intern"){
                this.askIntern();
            }
        });

    }

    askEngineer(){
      console.log(chalk.green('-----ENGINEER-----'));
      inquirer
        .prompt([
          {
            type: "input",
            name: "name",
            message: Question[0],
          },
          {
            type: "input",
            name: "id",
            message: Question[1],
          },
          {
            type: "input",
            name: "email",
            message: Question[2],
          },
          {
            type: "input",
            name: "github",
            message: "Enter Github username:",
          },
        ])
        .then(data => {
          this.returndiv.push(html.getEngineer(data));
          this.askMore();
        });

    }

    askIntern(){
      console.log(chalk.green('-----INTERN-----'));
        inquirer
        .prompt([
          {
            type: "input",
            name: "name",
            message: Question[0],
          },
          {
            type: "input",
            name: "id",
            message: Question[1],
          },
          {
            type: "input",
            name: "email",
            message: Question[2],
          },
          {
            type: "input",
            name: "school",
            message: "Enter name of School attended:",
          },
        ])
        .then(data => {
          this.returndiv.push(html.getIntern(data));
          this.askMore();
        });

    }

    askMore(){
      inquirer
        .prompt([
          {
            type: "confirm",
            name: "again",
            message: "Add more Employee?",
          },
        ])
        .then(val => {
            if(val.again){
                this.asktypeofEmployee();
            }else{
                this.finish();
            }
        });
    }

    finish(){
        this.writeToFile();
    }
}

const teambuilding = new teambuild();

teambuilding.start();
