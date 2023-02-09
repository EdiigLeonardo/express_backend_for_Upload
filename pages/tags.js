const {query} = require("../connection");
const express = require("express");
const router = express.Router();
const moment = require('moment');

router.get('/videos', async function (req, res) {
    const videos_tags = await query("SELECT v.id as mid, v.slug, v.canal as field_canal," +
        "vt.tag as tag, v.miniatura as thumbnail__target_id, v.titulo as name," +
        "v.descricao as field_descricao, v.duracao as field_duracao, v.categoria as field_categoria," +
        "v.data_publicacao as created" +
        " FROM video v INNER JOIN video_tag vt " +
        "ON v.id = vt.video;");

    for (let video of videos_tags) {
        try{
            const tag = await query("SELECT tag from video_tag where video=?",[video.mid]);
            //perguntar ao professor;
            video.field_tags = tag[0].tag;
        }catch (e) {
        }
        video.created = moment(video.created).fromNow();
    }
    res.json(videos_tags);
});
module.exports = router;