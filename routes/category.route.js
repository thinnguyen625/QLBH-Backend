const express = require('express');
const categoryModel = require('../models/category.model');

const router = express.Router();

router.get('/', async (req, res) => {
    const list = await categoryModel.all();
    res.json(list);

})

module.exports = router;

//routes: khai bao cac duong dan tai nguyen