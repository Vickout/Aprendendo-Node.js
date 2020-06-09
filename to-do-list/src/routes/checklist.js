const express = require('express');

const router = express.Router();

router. get('/', (req, res) => {
    console.log('Check');
    res.send();
})

module.exports = router;