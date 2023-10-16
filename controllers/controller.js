const dbConnection = require('../config/dbConnection');
const { getCandidatos, insertVotantes, selectEmailVotante, votarCandidato, maisVotado } = require('../models/models');

module.exports.homeCandidatosSelect = (app, req, res) => {
    dbConn = dbConnection();

    getCandidatos(dbConn, (error, result) => {
        if (error) {
            console.log(error);
            console.log("erro no banco de dados!")
        }
        else {
            console.log(result);
            res.render('home.ejs', { candidatos: result });
        }

    });

},

    module.exports.cadastrarVotante = (app, req, res) => {
        dbConn = dbConnection();
        const emailVotante = req.body.emailLocal;

        insertVotantes(dbConn, emailVotante, (error,) => {
            if (error) {
                console.log(error);
                console.log("Erro no banco de dados!");
            }
            else {
                console.log('Votante votou com sucesso!!');
                //res.redirect('/api/candidatos');
            }
        });

    },

    module.exports.selectVotante = (emailVotante, callBack) => {

        dbConn = dbConnection();
        selectEmailVotante(dbConn, emailVotante, callBack);
    },

    module.exports.adicionarVoto = (app, req, res) => {
        dbConn = dbConnection();
        const idCandidato = req.body.idcandidato;
        console.log(idCandidato);

        votarCandidato(dbConn, idCandidato, (error,) => {
            if (error) {
                console.log(error);
                console.log("Erro no banco de dados!");
            }
            else {
                console.log('Voto registrado com sucesso!!');
            }
        });

    },

    module.exports.getMaisVotado = (app, req, res) => {
        dbConn = dbConnection();
    
        maisVotado(dbConn, (error, result) => {
            if (error) {
                console.log(error);
                console.log("erro no banco de dados!")
            }
            else {
                console.log(result);
                res.render('maisvotado.ejs', { candidato: result });
            }
    
        });
    }