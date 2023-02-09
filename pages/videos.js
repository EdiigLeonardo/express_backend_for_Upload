const {query} = require("../connection");
const express = require("express");
const router = express.Router();
const moment = require('moment');

router.get('/', async function (req, res) {
    const videos = await query("SELECT v.id as mid, v.slug, v.canal as field_canal," +
        "v.miniatura as thumbnail__target_id, v.titulo as name, c.imagem as user_picture," +
        "v.descricao as field_descricao, v.duracao as field_duracao, v.categoria as field_categoria," +
        "v.data_publicacao as created" +
        " FROM video v INNER JOIN canal c " +
        "ON v.canal = c.id;");
    for (let video of videos) {
        try{
            const tag = await query("SELECT tag from video_tag where video=?",[video.mid]);
            //perguntar ao professor;
            video.field_tags = tag[0].tag;
        }catch (e) {
        }
        video.created = moment(video.created).fromNow();
    }
    res.json(videos);
});


router.get('/home', async function (req, res) {
    const videos = await query("SELECT v.id as mid, v.slug, v.canal as field_canal," +
        "v.miniatura as thumbnail__target_id, v.titulo as name, c.imagem as user_picture," +
        "v.descricao as field_descricao, v.duracao as field_duracao, v.categoria as field_categoria," +
        "v.data_publicacao as created" +
        " FROM video v INNER JOIN canal c " +
        "ON v.canal = c.id ORDER BY v.id DESC LIMIT 6");
    for (let video of videos) {
        try{
            const tag = await query("SELECT tag from video_tag where video=?",[video.mid]);
            //perguntar ao professor;
            video.field_tags = tag[0].tag;
        }catch (e) {
        }
        video.created = moment(video.created).fromNow();
    }
    res.json(videos);
});

router.get('/:id_video', async function (req, res) {
    const videos = await query("SELECT id as mid, slug, canal as field_canal," +
        "url_youtube as field_media_oembed_video, miniatura as user_picture," +
        "descricao as field_descricao, duracao as field_duracao, categoria as field_categoria," +
        "data_publicacao as created" +
        " FROM video where id=?",[req.params.id_video]);
    for (let video of videos) {
        try{
            const tag = await query("SELECT tag from video_tag where video=?",[video.mid]);
            //perguntar ao professor;
            video.field_tags = tag[0].tag;
        }catch (e) {
        }
    }
    console.log(videos);
    res.json(videos);
});



module.exports = router;