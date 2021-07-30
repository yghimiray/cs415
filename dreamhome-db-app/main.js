"use strict";

const mysql = require('mysql');
const dbConnection = mysql.createConnection({
    host:"localhost",
    user:"dreamhome",
    password:"123456",
    database:"dreamhome"
});

dbConnection.connect ((error) =>{
    if(error)
    throw error;
});

const qryStrAllBranches = "select * from `dreamhome`.`branch` as b order by b.branchNo";
// dbConnection.query(qryStrAllBranches,(error,result)=>{
// if(error)
// throw error;
// console.log(result);
// });

const qryStrAllStaffsLondon = "select *from `dreamhome`.`staffs` as s where s.branchNo in (select b.branchNo from  `dreamhome`.`branch` as b where b.city='London')";
// dbConnection.query(qryStrAllStaffsLondon,(error,result)=>{
// if(error)
// throw error;
// console.log(result);
// });


const qryStrBranchLondonBristol = "select * from `dreamhome`.`branch` as b where b.city ='London' or b.city ='Bristol'";
dbConnection.query(qryStrBranchLondonBristol,(error,result)=>{
if(error)
throw error;
console.log(result);
});








dbConnection.end();