const mysql = require('mysql2/promise')

//https://railway.app/project/74350e82-8aef-43dc-abaa-65187069475d/service/dc7c911a-fb53-4e44-a96a-744f560c3e83/variables
async function connectDB(){
    const connection = await mysql.createConnection({
        host: 'monorail.proxy.rlwy.net',
        user: 'root',
        password: '24eg-FBc346a4b3ccHCGc4FdA1eChg1H',
        database: 'railway', 
        ssl: {
            rejectUnauthorized: false
        }
    })
    
    const result = await connection.query('SELECT 1 + 1 AS Result')
    console.log(result)
}

module.exports = connectDB