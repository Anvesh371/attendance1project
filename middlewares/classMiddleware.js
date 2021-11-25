
const classNameCheck=(req,res,next)=>{
    const className=req.body.className;
    if(className==null){
        res.send("null not accepted")
    }
    if(className=="firstyear"||className=="secondyear")
    {
        next();
    }else{
        res.send("we have only firstyear and secondyear please check while insert")
    }
}
const branchCheck=(req,res,next)=>{
    const branch=req.body.branch;
    if(branch==null){
        res.send("null not accepted");
    }
    if(branch=="mpc"||branch=="bipc"||branch=="cec"){
        next();
    }else{
        res.send("we have only mpc bipc and cec branches other branches not accepted");
    }
}
module.exports={
    classNameCheck,
    branchCheck
}