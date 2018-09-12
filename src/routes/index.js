const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index');
});
//Ruta para la ventana de regsitro 
router.get('/sigup', (req, res, next) => {

});
//Ruta cuando de envien los datos 
router.post('/sigup', (req, res, next) => {

});
router.get('/sigin', (req, res, next) => {

});
router.post('/sigin', (req, res, next) => {

});

module.exports = router;