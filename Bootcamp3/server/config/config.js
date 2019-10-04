//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

//I had to indicate the database in the string

module.exports = {
    db: {
        uri: 'mongodb+srv://AccessBoi:Sylvie123@cluster0-rhvf7.mongodb.net/test?retryWrites=true&w=majority', //place the URI of your mongo database here.
    },
    openCage: {
        key: '9b79ece289534a1daaaacf0e85a0e88d'
    },
    port: 8080
};