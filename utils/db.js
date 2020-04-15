const mysql = require('mysql');
const { promisify } = require('util');

const pool = mysql.createPool({
   connectionLimit: 100,
   host: 'localhost',
   port: 3306,
   user: 'root',
   password: 'root',
   database: 'qlbh'
});

// module.exports = {
//    load: sql => {
//       pool.query(sql, function (error, results, fields) {
//          if (error)
//             throw error;

//          console.log('The solution is: ', results[0].solution);
//       })
//    }
// }

const pool_query = promisify(pool.query).bind(pool); // là hàm dạng callback: khi nào nó chạy xong thì nó sẽ đá kích hoạt hàm bên trong để xly ket quả

module.exports = {
    load: sql => pool_query(sql),//đưa vào 1 câu lệnh sql và nó sẽ trả ra kết quả
};