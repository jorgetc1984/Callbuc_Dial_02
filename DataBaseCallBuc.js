const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'Callbuc_Dial',
    user: 'root',
    password: '91355936',
    database: 'CallCenter'
});

db.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
    } else {
        console.log('Conexión exitosa a la base de datos MySQL');
    }
});

module.exports = db;
