const jwt=require('jsonwebtoken')
const tokenCheck=(req,res,next)=>{
    const token=req.headers.authorization;
    if(!token){
        res.send("you are not authorized");
    }else{
      jwt.verify(token,'a1235',(err,rows)=>{
          if(err){
              res.send("token is invalid")
          }else{
        //res.send(rows.userId);
        console.log(rows);//object
         req.user=rows;
       next();
    
      }
      })
    }
    }
    module.exports={
        tokenCheck
    }