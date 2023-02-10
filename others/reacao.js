const {query} = require("../connection");
const express = require("express");
const router = express.Router();


router.get('/:id_video', async function (req, res){
    let likes  = await query("SELECT COUNT (*) FROM reacao WHERE video = ? AND tipo ='like' as Contador_de_likes,"
        , [req.params.id_video]);
    res.send(likes);
});

router.get('/:id_video', async function (req, res){
    let dislikes  = await query("SELECT COUNT (*) FROM reacao WHERE video = ? AND tipo ='dislike' as count"
        , [req.params.id_video]);
    res.send(dislikes);
});

module.exports = router;


/*router.get('/', async function (req, res) {
    let reagir = await query("SELECT r.nome, r.tipo, r.data, r.video " +
        "FROM reacao r INNER JOIN video v ON r.video = v.id WHERE v.id =?", [req.params.id_video]);
    res.json(reagir);
});*/



/*Apenas para listagem de reações
router.get('/', async function (req, res) {
    let reacoes = await query(
        "SELECT id , " +
        "video as entity_id, " +
        "tipo, " +
        "data " +
        "FROM `reacao`;"
    );
    res.send(reacoes);
});


router.post('/:tipo/:id_video', async function (req, res) {
    let reacao = await query(
        "INSERT INTO `reacao` (`id`, `video`, `tipo`, `data`) VALUES (NULL, ?, ?, current_timestamp());"
    );
    res.send(reacao);
});*/


