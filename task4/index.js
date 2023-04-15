const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
const db = require('./mysql');
const query = require('./helper/dbhelper');
const multer = require("multer");


app.listen(8080, 'localhost', () => {
    console.log('Server is running on localhost:8080');
})

app.use(multer().array())
app.use(bodyParser.urlencoded())
app.use('/', router)

router.get('/users', (req, res) => {

    // query('select * from student');
    query('select * from users').then(data => {
        console.log(data);
        res.send(data);

    }).catch(err => {
        console.log(err);
        res.send(err);
    });

    // qResult=db.query('select * from student',(err,result)=>{

    //     if(err){
    //         console.log(err);
    //         res.send(err);
    //     }
    //     else{
    //         console.log(result);
    //         res.send(result);
    //     }



    //     })
})



router.post('/adduser', (req, res) => {

    console.log(req.body);
    db.query(
        `insert into users values (
                DEFAULT,
                '${req.body.user_name.toString()}',
                '${req.body.user_pass.toString()}',
                '${req.body.user_email}',
                '${req.body.user_role}'
                );`
        , (err, result) => {
            if (err) {
                res.status(500).send(err.message);
            }
            res.status(200).send(result)
        })

})



router.post("/update/:id", (req, res) => {
    db.query(`UPDATE users 
    set user_id=${req.body.user_id},
    user_name='${req.body.user_name}',
    user_pass='${req.body.user_pass}',
    user_email='${req.body.user_email}', 
    user_role='${req.body.user_role}' where user_id=${req.params.id}`
        , (err, result) => {
            if (err) {
                res.status(500).send(err.message);


            }
            else {
                res.status(200).send(result);
            }
        });

})


router.get("/delete", (req, res) => {
    db.query(`delete from users where user_id=${req.query.user_id}`, (err, result) => {
        if (err) {
            res.status(500).send(err.message);


        }
        else {
            res.status(200).send(result);
        }
    });

})




