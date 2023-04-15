const db = require('../mysql')

function query(sqlquery) {
    return new Promise((resolve, reject) => {
        db.query(sqlquery, (err, result) => {
            if (err) {
                // console.log(err);

                reject(err);
            }
            else {
                resolve(result);
                // console.log(result);
            }
        })
    })
    // db.query(sqlquery, (err, result) => {
    //     if (err) {
    //         console.log(err);
    //         reject(err);
    //     }
    //     else {
    //         resolve(result);
    //         console.log(result);
    //     }
    // })

}

module.exports = query;