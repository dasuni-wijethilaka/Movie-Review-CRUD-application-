const express =require ('express');
const app=express();
const mysql=require('mysql')

const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'DASUitm@b20',
    database:'cruddatabase'
});

db.connect(function(err) {
    if (err) throw err;
    console.log("connected to database")
  });

app.post('/',(req,res)=>{
    const sqlInsert="INSERT INTO movie_reviews(moviewName,movieReview) VALUES ('inception','good movie');"
    db.query(sqlInsert,(err,result)=>(
        res.send('hellooo crud')
    ))
});

app.listen(3001,()=>{
    console.log('running on port 3001');
});

