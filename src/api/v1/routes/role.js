const express = require('express');
const router = express.Router();
// const { check } = require('express-validator');

const { getAll, create} = require('../controllers/role');

router.post('/', create);
router.get('/', getAll);

module.exports = router;
