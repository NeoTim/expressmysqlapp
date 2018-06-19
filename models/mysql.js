const Sequelize = require('sequelize');

class Connection{
    constructor(){
        this.sequelize = new Sequelize('Pomelo', 'root', '123456',{
            host: '172.19.0.1',
            port: 3306,
            dialect: 'mysql',
            operatorsAliases: false,
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        });
        this.sequelize.authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
            return this.sequelize.query('show tables;').then(info => {
                console.log('select info ', info);
                return Promise.resolve();
            });
        })
        .then(() => {
            console.log('Connection has been established successfully.');
            return this.sequelize.query('select * from User;').then(info => {
                console.log('select info ', info);
                return Promise.resolve();
            });
        })
        .catch(e => {
            console.error('Unable to connect to the database:', e);
        });
    }
}

module.exports = new Connection();