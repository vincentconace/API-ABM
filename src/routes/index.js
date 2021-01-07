const express = require('express');
const router = express.Router();

const Cliente = require('../models/cliente');

router.get('/', async (req, res) => {
    const clientes = await Cliente.find();
    console.log(clientes);
    res.render('index', {
        clientes
    });
});

router.post('/add', async (req, res) => {
    const cliente = new Cliente(req.body);
    await cliente.save();
    res.redirect('/');
});

router.get('/editar/:id', async (req, res) => {
    const { id } = req.params;
    const cliente = await Cliente.findById(id);
    res.render('editar', {
        cliente
    });
});

router.post('/editar/:id', async (req, res) => {
    const { id } = req.params;
    await Cliente.update({_id: id}, req.body);
    res.redirect('/');
})

router.get('/delete/:id', async(req, res) => {
    const { id } = req.params;
    await Cliente.remove({_id: id});
    res.redirect('/');
});

module.exports = router;