const config        = require('./dbConfig'),
      sql           = require('mssql');

const getEmployees = async() => {
  try {
    let pool = await sql.connect(config);
    let employees = pool.request().query("SELECT * EmployeeDemoGraphics")
    console.log(employees);
    return employees;
  }
  catch(error) {
    console.log(error);
  }
};

module.exports = {
  getEmployees
}
