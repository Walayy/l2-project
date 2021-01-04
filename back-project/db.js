const { Client } = require('pg');
var client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: 'Dofus72dofus',
    database: 'users',
});


async function enregistrer(username, mail, password){
    const res = await client.query('INSERT INTO utilisateur VALUES (DEFAULT,' + username + ',' + mail + ',' + password + ')')
    return 1;
}




exports.client = client;
exports.enregistrer = enregistrer;