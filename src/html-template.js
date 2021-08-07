

const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="./styles.css" />
    <title></title>
  </head>
  <body>
    <header>
      <h1 id="header">My Team</h1>
    </header>
    <!-- manager card  -->
    <div class="card-group">
      <h2 id="title">${answers.managerName}</h2>
      <h4 id="title">Manager</h4>
      <div class="card-body">
        <div class="card">
          <ul class="list-group list-group-flush">
            <li id="li" class="list-group-item">ID: ${answers.managerId}</li>
            <li id="li" class="list-group-item">Email: ${answers.managerEmail}</li>
            <li id="li" class="list-group-item">Office number: ${answers.managerOfficeNumber}</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- engineer card  -->
    <div class="card-group">
      <h2 id="title">${answers.engineerName}</h2>
      <h4 id="title">Engineer</h4>
      <div class="card-body">
        <div class="card">
          <ul class="list-group list-group-flush">
            <li id="li" class="list-group-item">ID: ${answers.engineerId}</li>
            <li id="li" class="list-group-item">Email: ${answers.engineerEmail}</li>
            <li id="li" class="list-group-item">GitHub: ${answers.engineerGitHub} </li>
          </ul>
        </div>
      </div>
    </div>
    <!--  employee card 1 -->
    <div class="card-group">
      <h2 id="title">${answers.employee1Name}</h2>
      <h4 id="title">Employee(Team Lead)</h4>
      <div class="card-body">
        <div class="card">
          <ul class="list-group list-group-flush">
            <li id="li" class="list-group-item">ID: ${answers.employee1Id}</li>
            <li id="li" class="list-group-item">Email: ${answers.employee1Email}</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- employee card 2 -->
    <div class="card-group">
        <h2 id="title">${answers.employee2Name}</h2>
      <h4 id="title">Employee</h4>
      <div class="card-body">
        <div class="card">
          <ul class="list-group list-group-flush">
            <li id="li" class="list-group-item">ID: ${answers.employee2Id}</li>
            <li id="li" class="list-group-item">Email: ${answers.employee2Email}</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- intern card -->
    <div class="card-group">
      <h2 id="title">${answers.internName}</h2>
      <h4 id="title">Intern</h4>
      <div class="card-body">
        <div class="card">
          <ul class="list-group list-group-flush">
            <li id="li" class="list-group-item">ID: ${answers.internId}</li>
            <li id="li" class="list-group-item">Email: ${answers.internEmail}</li>
            <li id="li" class="list-group-item">GitHub: ${answers.internSchool} </li>
          </ul>
        </div>
      </div>
    </div>
  </body>
</html>`;

module.exports = generateHTML;