const { homeCandidatosSelect, cadastrarVotante, selectVotante, adicionarVoto, getMaisVotado} = require('../controllers/controller')

module.exports = {

    home: (app) => {
        app.get('/api/candidatos', function (req, res) {
            homeCandidatosSelect(app, req, res)
        });
    },
    votar: (app) => {
        app.post('/api/votar/', function (req, res) {
            const emailVotante = req.body.emailLocal;
            selectVotante(emailVotante, (error, result) => {
                if (error) {
                    console.log(error);
                    console.log("Erro no banco de dados!");


                } else {
                    if (result.length > 0) {
                        console.log('Voto já registrado pelo eleitor');
                        res.status(400).send('Eleitor já votou!');
                    }
                    else {
                        console.log('Eleitor não localizado. Realizar cadastro eleitor');
                        cadastrarVotante(app, req, res);
                        adicionarVoto(app, req, res);
                        res.redirect('/api/candidatos');
                    }
                }

                console.log(result);


            })
        })
    },
    exibirMaisVotado: (app) => {
        app.get('/api/maisvotado', function (req,res){
            getMaisVotado(app, req, res)
        });
    }

}