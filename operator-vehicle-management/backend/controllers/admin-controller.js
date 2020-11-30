const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { signupSchema, signinSchema } = require('./validations/authValidation');

dotenv.config();

const register = async (req, res) => {
    let err = await signupSchema.validate(req.body).catch((err) => {
        return err;
    });

    if (err.errors) {
        return res.status(400).send(err.errors[0]);
    }

    try {
        const { name, email, password } = req.body;

        const adminExists = await Admin.find({ email });
        if (adminExists.length) {
            return res.status(400).send(`User with email id ${email} already exists`);
        }
        const hashedPassword = await bcrypt.hash(password, await bcrypt.genSalt(10));

        const admin = new Admin({
            name,
            email,
            password: hashedPassword,
            
        });

        const savedAdmin = await admin.save();

        const tokenisedAdmin = { email: savedAdmin.email };
        const accessToken = await jwt.sign(tokenisedAdmin, process.env.SECRET_KEY);

      

        return res.status(201).send({ accessToken });
    } catch (err) {
        console.log(err);
        return res.status(400).send(err);
    }
};

const login = async (req, res) => {
    let err = await signinSchema.validate(req.body).catch((err) => {
        return err;
    });

    if (err.errors) {
        return res.status(400).send(err.errors[0]);
    }
    try {
        const { email } = req.body;

        let admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(400).send('Email not found');
        }

        const { password } = admin;

        const validPassword = await bcrypt.compare(req.body.password, password);
        if (!validPassword) {
            return res.status(400).send('Invalid password');
        }

        const tokenisedAdmin = { email };
        const accessToken = await jwt.sign(tokenisedAdmin, process.env.SECRET_KEY);


        return res.status(200).send({ accessToken });
    } catch (err) {
        console.log(err);
        return res.status(400).send(err);
    }
};



module.exports = { register, login };
