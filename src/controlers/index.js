const express  = require('express');
const router  = express.Router();

const fireAuth = require('../models/register');
const sigIn = require('../models/sigin');
const recover  = require('../models/recover');

router.post('/register', async(req,res)=>{
try {
    const email  = req.body.email;
    const password = req.body.password;
    await fireAuth(email,password,res);

} catch (err){
    return res.status(400).send({
        error: 'Register Fail',
        err
    });
}
});

router.post('/login', async(req,res)=>{
    try {
        const email  = req.body.email;
        const password = req.body.password;
        await sigIn(email,password,res);
    
    } catch (err){
        return res.status(400).send({
            error: 'Login Fail',
            err
        });
    }
    });
    

router.post('/recover', async(req,res)=>{
        try {
            const email  = req.body.email;
            await recover(email,res);
        
        } catch (err){
            return res.status(400).send({
                error: 'error',
                err
            });
        }
        });
           


module.exports = app => app.use('/auth', router);



