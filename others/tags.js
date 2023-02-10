const {query} = require("../connection");
const express = require("express");
const router = express.Router();

router.get('/', async function (req, res) {
    const tags = await query("SELECT * FROM tag");
    res.json(tags);
});

router.get('/:tag', async function (req, res) {
    const tag = await query(
        "SELECT * FROM video_tag WHERE tag = ?",[req.params.tag]);
    res.json(tag);

});

module.exports = router;
