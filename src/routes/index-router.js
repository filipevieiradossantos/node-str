'use strict'

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Filipe API",
        version: "0.0.10"
    });
});

module.exports = router;