const {query} = require("../connection");
const express = require("express");
const router = express.Router();

router.get('/', async function (req, res) {
    const videos = await query("SELECT id as mid, slug, canal as field_canal," +
        "url_youtube as field_media_oembed_video, miniatura as user_picture," +
        "descricao as field_descricao, duracao as field_duracao, categoria as field_categoria," +
        "data_publicacao as created" +
        " FROM video");
    for (let video of videos) {
        try{
            const tag = await query("SELECT tag from video_tag where video=?",[video.mid]);
            //perguntar ao professor;
            video.field_tags = tag[0].tag;
        }catch (e) {
        }
    }
    res.send(videos);
});



module.exports = router;