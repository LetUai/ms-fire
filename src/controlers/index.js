const express = require('express');
const router = express.Router();
const fireAuth = require('../models/register');
const sigIn = require('../models/sigin');
const recover = require('../models/recover');

const profileModel = require('../models/user');
const commerceModel = require('../models/commerce');



router.post('/register', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const name = req.body.name;
        await fireAuth(email, password, res, name);


    } catch (err) {
        return res.status(400).send({
            error: 'Register Fail',
            err
        });
    }
});

router.post('/login', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        await sigIn(email, password, res);

    } catch (err) {
        return res.status(400).send({
            error: 'Login Fail',
            err
        });
    }
});


router.post('/recover', async (req, res) => {
    try {
        const email = req.body.email;
        await recover(email, res);

    } catch (err) {
        return res.status(400).send({
            error: 'error',
            err
        });
    }
});

router.post('/commerce/register', async (req, res) => {
    try {
        const { user, commerceName, description, phone } = req.body
        const auth = await profileModel.find({ user });
        if (auth) {
            const data = await commerceModel.create({ user, commerceName, description, phone });
            const commerce = await profileModel.findById(user);
            console.log(commerce);
            return res.status(200).json(data);
        }

    } catch (err) {
        return res.status(400).send({
            error: 'Register Fail',
            err
        });
    }
});



module.exports = app => app.use('/auth', router);



