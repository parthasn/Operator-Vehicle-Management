const yup = require('yup');

const signupSchema = yup.object().shape({
    name: yup.string().min(4, 'First name should be miniumum 4 characters!').required('Required'),
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().min(6, 'Password should have miniumum 6 characters!').required('Required'),
    
});

const signinSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Please fill in your email id'),
    password: yup.string().required('Please fill in your password')
});

module.exports = { signupSchema, signinSchema };
