const Va1idator=require('validator');
const isEmpty=require('./added/is-empty');

// declare errors
let errors={};

/**
 * @route   : POST /v1/register
 * @desc    : checking register form
 * @sequence: 1 (only one)
 */
exports.register=(req,res,next)=>{
    const data=req.body;

    // there is no data set null
    data.name = !isEmpty(data.name) ?data.name:'';
    data.email = !isEmpty(data.email) ?data.email:'';
    data.password = !isEmpty(data.password) ?data.password:'';
    data.password2 = !isEmpty(data.password2) ?data.password2:'';

    if (!Va1idator.isLength(data.name,{min:2,max:30})){
        errors.name = 'Name must between 2 and 30 characters';
    }
    if (Va1idator.isEmpty(data.name)){
        errors.name = 'name field is required';
    }

    if (!Va1idator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }if (Va1idator.isEmpty(data.email)){
        errors.email = 'email field is required';
    }

    if (!Va1idator.isLength(data.password,{min:6,max:30})){
        errors.password = 'password must between 6 and 30 characters';
    }
    if (Va1idator.isEmpty(data.password)){
        errors.password = 'password field is required';
    }

    if (!Va1idator.equals(data.password2,data.password)){
        errors.password2 = 're-passwords must match';
    }if (Va1idator.isEmpty(data.password2)){
        errors.password2 = 're-password field is required';
    }

    expostErrors(errors,res,next,422)
};


/**
 * @route   : POST /v1/login
 * @desc    : checking login
 * @sequence: 1 (only one)
 */
exports.login= (req,res,next)=>{
    const data=req.body;

    data.email = !isEmpty(data.email) ?data.email:'';
    data.password = !isEmpty(data.password) ?data.password:'';

    if (Va1idator.isEmpty(data.email)){
        errors.email = 'email field is required';
    }

    if (Va1idator.isEmpty(data.password)){
        errors.password = 'password field is required';
    }

    expostErrors(errors,res,next,422)
};

function expostErrors(errors,res,next,code) {
    if (!isEmpty(errors)) {
        res.status(code).json({
            data:null,
            msg: 'something wrong...',
            errors: errors
        });
    }

    next();
}