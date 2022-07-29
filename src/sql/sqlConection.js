// Conecting to DataBase

const mysql = require('mysql');

// Features of DataBase

const conector = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Diego@008**$',
        database: 'user',
    }
)

// Function Conect to DataBase

const connect = () => {
    conector.connect(err => {
        if (err) throw err
        console.log('Conected to the Database')
    })
}

// Send Data to the DataBase

const addSQL = (names, age, email) => {
    const sql = `INSERT INTO contact (id, name, old, direction) VALUE (${null}, '${names}', '${age}', '${email}')`
    conector.query(sql, (err, result, field) => {
        if (err) throw err
        console.log(result)
    })
}

// Exports

module.exports = {
    conector,
    addSQL,
    connect,

}