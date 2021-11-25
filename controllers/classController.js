const connection = require('../models/model')
const addClass=(req,res)=>{
    const data={className:req.body.className,branch:req.body.branch,userId:`${req.user.id}`}
    connection.query('insert into classes set ?',data, (err, rows) => {
        if(err){
            res.send("class not added");
        }else
        {
            //console.log(rows);
            res.send("class added");
        }
    })
}
const classes=(req,res)=>{
    connection.query('select * from classes', (err, rows) => {
        if (err) {
            res.send("class not found");
        }
        else {
            res.send(rows);
        }
    })
}
    const deleteClass=(req,res)=>{
        const classId=req.params.classId;
        connection.query("delete from classes where classId ='" + classId + "'", (err, rows) => {
            if (err){
                res.send(err);
            }
            else{
            res.send("class deleted");
            }
        })

    }
 const classInfo=(req,res)=>{
connection.query("select users1.userId,users1.userName, classes.classId,classes.className,classes.branch from users1 inner join classes on users1.userId=classes.userId where users1.userId",(err,result)=>{
if(err){
    res.send(err)
}
else{
    res.send(result);
}
})
    }
 module.exports={
     addClass,
     classes,
     deleteClass,
     classInfo
 }   
