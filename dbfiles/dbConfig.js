const config = {
  user: 'BlueHeartPressUser ',
  password: 'hit',
  server: 'DESKTOP-SLHKHB3',
  database: "BlueHeartdb",
  options: {
    trustServerCertificate: true,
    trustedConnection: false,
    enableArithAbort: true,
    instancename: "SQLEXPRESS"
  },
  port: 1433
}

module.exports = config;