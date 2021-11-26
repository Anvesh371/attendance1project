const jwt=require('jsonwebtoken');
const validator=require('email-validator')
const userNameCheck=(req,res,next)=>{
    const userName=req.body.userName;
    if(userName==null){
        res.send("can't identify username please check while register");
    }
    else if(userName.length>15||userName.length<4){
        res.send("username characters must be between 4 to 15")
    }
    else{
        next();
    }
}
const emailCheck=(req,res,next)=>{
    const email = req.body.email;
    if(email==null){
        res.send(" can't identify the email plese enter the email");
    }
   // console.log(Email.length)
   else if(validator.validate(email)){
        next();
    }
   /* if(Email.length<=10 || Email.length>=20){
        res.send("please provide the email between 10 and 20 characters")
    }*/
    else{
        res.send("Invalid Email");
    }
}
const passwordCheck=(req,res,next)=>{
    const password = req.body.password;  
    if(password==null){
        res.send(" can't identify the password please enter the passwrd")
    }
    else if( password.length<10|| password.length>20){
        res.send("password must be between 10 and 20 characters")
    }
    else{
        next();
    }
}

    module.exports={
        userNameCheck,
        emailCheck,
        passwordCheck,
    }