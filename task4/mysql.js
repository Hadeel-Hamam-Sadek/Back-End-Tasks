const mysql=require('mysql2');

const db= mysql.createPool({
    connectionLimit:10,
    host:'localhost',
    port:3306,
    user:'root',
    password:'',
    database:'sblog'
})

// pool.query('select * from student',(err,result)=>{
    
//     console.log(result);

// })

module.exports=db;