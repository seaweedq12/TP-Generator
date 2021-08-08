const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
//<a href="mailto: aldurq99@gmail.com">Email: aldurq99@gmail.com</a>
function getManager(data){
    const manager = new Manager(data.name,data.id,data.email,data.officenum);
    return `<div class="col-12 col-md-6 col-xl-4 mb-3">
            <div class="shadow-lg card">
              <div class="card-header bg-primary text-white">
                <h4>${manager.getName()}</h4>
                <h5><i class="fas fa-mug-hot"></i> ${manager.getRole()}</h5>
              </div>
              <div class="card-body bg-light my-3">
                <div class="card">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${manager.officenum}</li>
                  </ul>
                </div>
              </div> 
            </div>
          </div>`
};

function getEngineer(data){
  const engineer = new Engineer(data.name,data.id,data.email,data.github);
  return `\n          <div class="col-12 col-md-6 col-xl-4 mb-3">
            <div class="shadow-lg card">
              <div class="card-header bg-primary text-white">
                <h4>${engineer.getName()}</h4>
                <h5><i class="fas fa-glasses"></i> ${engineer.getRole()}</h5>
              </div>
              <div class="card-body bg-light my-3">
                <div class="card">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
                  </ul>
                </div>
              </div> 
            </div>
          </div>`
};

function getIntern(data){
  const intern = new Intern(data.name,data.id,data.email,data.school);
  return `\n          <div class="col-12 col-md-6 col-xl-4 mb-3">
            <div class="shadow-lg card">
              <div class="card-header bg-primary text-white">
                <h4>${intern.getName()}</h4>
                <h5><i class="fas fa-user-graduate"></i> ${intern.getRole()}</h5>
              </div>
              <div class="card-body bg-light my-3">
                <div class="card">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto: ${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                  </ul>
                </div>
              </div> 
            </div>
          </div>`
};

function generateHtml(div) {
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="./dist/style.css">
    <title>Team Info</title>
  </head>
  <body>
    <header class="bg-danger">
      <h3 class="text-white text-center py-5 ">My Team</h3>
    </header>
    <div class="d-flex justify-content-center mt-5">
      <div class="col-md-12 col-lg-10">
        <section class="row justify-content-around">
          ${div}
        </section>
      </div>
    </div>
  </body>
    
  <script src="https://kit.fontawesome.com/37a9bea56d.js" crossorigin="anonymous"></script>
</html>`
};


module.exports = {
    generateHtml,
    getManager,
    getEngineer,
    getIntern,   
};

