const dbConnection = require("../config/dbConnection");


module.exports = {
    getCandidatos : (dbConnection, callBack) => {
        const sql = 'select * from candidatos;';
        dbConnection.query(sql, callBack);
    },

    insertVotantes: (dbConnection, emailVotante, callBack ) => {
        const sql = `insert into votantes (email_votante) values ("${emailVotante}");`;
        dbConnection.query(sql, callBack);
    },

    selectEmailVotante: (dbConnection, emailVotante, callBack) => {
        const sql = `select * from votantes where (email_votante) like ("${emailVotante}");`;
        dbConnection.query(sql, callBack);
    },

    votarCandidato: (dbConnection, idCandidato, callBack) => {
        const sql = `update candidatos set votos_candidato = votos_candidato + 1 where id_candidato = "${idCandidato}";`;
        dbConnection.query(sql, callBack);
    },
    maisVotado : (dbConnection, callBack) => {
        const sql = 'select nome_candidato, votos_candidato from candidatos order by votos_candidato desc limit 1;';
        dbConnection.query(sql, callBack);
    },

}