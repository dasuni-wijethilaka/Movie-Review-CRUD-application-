const express =require ('express');
const bodyParser=require('body-parser')
const cors=require('cors')
const app=express();
const mysql=require('mysql')

const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'DASUNI12345',
    database:'cruddatabase'
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.url({extended:true}))

app.get('/api/get',(req,res)=>{
    const sqlSelect=
    "SELECT * FROM movire_revires";
    const sqlInsert="INSERT INTO movie_review(movieName,movieReview) VALUE (?,?)"
    db.query(sqlInsert,(err,result)=>{
        res.send(result);
    })
})

db.connect(function(err) {
    if (err) throw err;
    console.log("connected to database")
  });

app.post("/api/insert/",(req,res)=>{

    const movieName=req.body.movieName
    const movieReview=req.body.movieReview

    const sqlInsert="INSERT INTO movie_review(movieName,movieReview) VALUE (?,?)"
    db.query(sqlInsert,[movieName,movieReview],(err,result)=>{
        console.log(result);
    })
});

// app.get('/',(req,res)=>{
//     const sqlInsert="INSERT INTO movie_reviews(moviewName,movieReview) VALUES ('inception','good movie');"
//     db.query(sqlInsert,(err,result)=>(
//         res.send('hellooo crud')
//     ))
// });

app.listen(3001,()=>{
    console.log('running on port 3001');
});

