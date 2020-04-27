const express = require('express');
const router = express.Router();
const fireAuth = require('../models/register');
const sigIn = require('../models/sigin');
const recover = require('../models/recover');

const profileModel = require('../models/user');
const commerceModel = require('../models/commerce');


/**
 * Registro no firebase e no banco de dados, 
 * O registro no banco de dados só é efetivado caso passe pelo firebase primeiro
 * Nome e Email são propriedades unicas
 */

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

/**
 * Login de usuário, é importante perceber que o retorno de _id dessa função será usado como parametro para cadastro de comércio.
 */

router.post('/login', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        sigIn(email, password, res);

    } catch (err) {
        return res.status(400).send({
            error: 'Login Fail',
            err
        });
    }
});

/**
 * Recuperação de senha via email, essa função é 100% controlada pelo firebase
 */

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

/**
 * Registrando um novo comércio tendo como base o _id fornecido no login 
 */

router.post('/commerce/register', async (req, res) => {
    try {
        const { user, commerceName, description, phone, tags } = req.body
        const auth = await profileModel.find({ user });
        if (auth) {
            const data = await commerceModel.create({ user, commerceName, description, phone, tags, location });
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

/**
 * Listando os comércios
 */

router.get('/commerce/list', async (req, res) => {
    const data = await commerceModel.find();
    res.json(data);
});

/**
 * Listando preferencias de usuários
 */

router.post('/user/favorites', async (req, res) => {
    const user = req.body.user;
    const valid = await profileModel.find({ _id: user })
    if (valid) {
        res.json(valid[0].favorites)
    } else {
        res.json({})
    }
});

/**
 * Updade de informações baseado em id
 */

router.post('/user/update', async (req, res) => {

    const {
        _id,
        email,
        password,
        name,
        favorites } = req.body;

    const newData = await profileModel.update({ _id }, { email, password, name, favorites });
    if (newData) {
        res.json(newData);
    } else {
        res.sendStatus(401).json({
            status: "error"
        });
    }
});

/**
 * Update de favoritos 
 * nota: o array todo será atualizado!
 */
router.post('/user/update/favorite', async (req, res) => {
    const {
        _id,
        favorites } = req.body;

    const newData = await profileModel.update({ _id }, { favorites });
    if (newData) {
        res.json(newData);
    } else {
        res.sendStatus(401).json({
            status: "error"
        });
    }
});

/**
 * Update de Comercio
 */

router.post('/commerce/update', async (req, res) => {
    const {
        user,
        description,
        commerceName,
        tags,
        phone,
        location
    } = req.body

    const result = await commerceModel.update({ user }, { description, commerceName, tags, phone, location });
    if (result) {
        res.json(result)
    } else {
        res.sendStatus(401).json(
            {
                status: "error"
            }
        )
    }

});

module.exports = app => app.use('/auth', router);



