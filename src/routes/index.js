const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index');
});
//Ruta para la ventana de regsitro 
router.get('/signup', (req, res, next) => {
    res.render('signup');
});
//Ruta cuando de envien los datos 
router.post('/signup', (req, res, next) => {
    console.log(req.body);
    res.send('Recibido');
});
router.get('/signin', (req, res, next) => {

});
router.post('/signin', (req, res, next) => {

});

module.exports = router;