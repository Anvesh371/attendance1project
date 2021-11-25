const connection = require('../models/model')
const nodemailer=require('nodemailer')
const jwt=require('jsonwebtoken')
const users = (req, res, next) => {
    connection.query('select * from users1', (err, rows) => {
        if (err) {
            res.send("users not found");
        }
        else {
            res.send(rows);
        }
    })

}
const register = (req, res) => {
    const data = {userName:req.body.userName,email:req.body.email, password:req.body.password}
    connection.query('insert into users1 set ?', data, (err, rows) => {
        if (err) {
            res.send("another user already exist with these credentials please change");
        }
        else {
            const transport=nodemailer.createTransport({
                service:'gmail',
                auth:{
                    user:"komarianvesh@gmail.com",
                    pass:"Anvesh@1998"
                }  
              })
              const options={
                  from:"komarianvesh@gmail.com",
                  to:req.body.email,
                  subject:"thank you for registering",
                  text:`Hi ${req.body.userName} thank you for registering`
              }
              transport.sendMail(options,(err,res)=>{
                  if(err){
                      console.log(err);
                  }
                  else
                  {
                      console.log("mail sent sucessfully");
                    }
                })
            res.send('user added successfully');
        }
    })
}

const login = (req, res) => {
    const loginEmail = req.body.email;
    const Password = req.body.password;
    // const UserId=req.body.userId
    const data = "select * from users1 where email = '" + loginEmail + "' and password = '" + Password + "'"
    console.log(data);
    connection.query(data, (err, rows) => {
        if (err || rows.length == 0) {
            res.send("credentials not matched")
        }
        else {
            console.log(rows)
            const token = jwt.sign({ id: rows[0].userId }, 'a1235')
            res.send({
                token
            })

        }
    })
}
    const userinfo = (req, res) => {
            connection.query("select * from users1 where userId='" + `${req.user.id}` + "'", (err, result) => {
                if (err) {
                    res.send("userprofile not found");
                } else {

                    res.send(result);
                }
            })
        }
        //      res.send(req.headers)

        const deleteUser = (req, res) => {
            const userId = req.params.userId
            connection.query("delete from users1 where userId ='" + userId + "'", (err, rows) => {
                if (!err)
                    res.send('Deleted successfully.');
                else
                    res.send(err);
            })
        }
module.exports = {
            users,
            register,
            login,
            userinfo,
            deleteUser
}