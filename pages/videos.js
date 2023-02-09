const {query} = require("../connection");
const express = require("express");
const router = express.Router();

router.get('/', async function (req, res) {
    videos = await query("SELECT * FROM video");
    res.send(videos);
});

/*
{
        "name": "BBB23: ANALISANDO OS PARTICIPANTES feat. Modi | Foquinha FBI",
        "field_canal": "10",
        "field_categorias": "<a href=\"/taxonomy/term/38\" hreflang=\"en\">Informação</a>",
        "field_descricao": "Finalmente a alienação vem ai, mores! Eu e o André fizemos uma analise e demos nossas apostas do que vai rolar no BBB23. Curtiu? Então dá um like aí, meu anjo! ",
        "field_duracao": "Médio",
        "thumbnail__target_id": "/sites/default/files/oembed_thumbnails/2023-01/V6tf8lCC2sPPtOo-LFoMuDfLYdTDzjouZ8Go7ZakSs8.jpg",
        "field_media_oembed_video": "https://www.youtube.com/watch?v=gcgzZIJQ5Gs",
        "field_tags": "fofoca, informação, famosos",
        "mid": "108",
        "created": "1 week 5 days ago",
        "user_picture": "/sites/default/files/pictures/2022-12/Foquinha.jpg"
    }
 */

module.exports = router;