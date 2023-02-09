const {query} = require("../connection");
const express = require("express");
const router = express.Router();

router.get('/', async function (req, res) {
    const tematica_sugerida = await query("SELECT * FROM tematica ORDER BY RAND () LIMIT 1 ");
    res.json(tematica_sugerida);
});

module.exports = router;
