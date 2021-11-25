/*const validator=require('email-validator');
if(validator.validate("testgmail.com"))
{
    console.log("true")
}
else
{
    console.log("false")
}*/
const nodemailer=require('nodemailer')
const transport=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"komarianvesh@gmail.com",
        pass:"Anvesh@1998"
    }  
  })
  const options={
      from:"komarianvesh@gmail.com",
      to:"komarianvesh@gmail.com",
      subject:"thank you for registering",
      text:`Hi  thank you for registering`
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