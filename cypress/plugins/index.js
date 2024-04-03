const mysql = require("mysql");

function queryTestDb(query, config){
    let connection;
    connection = mysql.createConnection(config.env.db);
    connection.connect();
    return new Promise((resolve, reject) =>{
        connection.query(query, (error, result)=>{
            if (error) {
                reject(error);
            } else {
                connection.end();
                return resolve(result);
            }
        })
    })
}

module.exports = (on, config) => {

    on("task", {
        queryDb: (query) => {
            return queryTestDb(query, config);
        }
    });
    return config;
};