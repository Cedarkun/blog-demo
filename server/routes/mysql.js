const mysql = require("mysql");  
const connection  = mysql.createConnection({    
   host:'cedarz.top',
   user:'cedar',
   password:'Zss19950918',
   database:'test',
   port:'3306'
});  
connection.connect();  

// error will be an Error if one occurred during the query
// results will contain the results of the query
// fields will contain information about the returned results fields (if any)
function insert(sql,values,callback){ 
    connection.query(sql,values,function(err, results, fields) {  
        if (err) throw err;                           
        else if(results.affectedRows!=0)
        {
            var string=JSON.stringify(results);     
            var json=JSON.parse(string);  
            callback(1,json);
        }
        else callback(0);                                            
      });      
}  
exports.insert = insert;

function search(sql,values,callback){ 
    connection.query(sql,values,function(err, results, fields) {  
        if (err) throw err;                           
        else if(results.length!=0)
        {
            var string=JSON.stringify(results);     
            var json=JSON.parse(string);  
            callback(1,json);
        }
        else callback(0);                                            
      });  
}  
exports.search = search;

function update (sql,values,callback){ 
    connection.query(sql,values,function(err, results, fields) {  
        if (err) throw err;                           
        else if(results.length!=0)
        {
            var string=JSON.stringify(results);     
            var json=JSON.parse(string);  
            callback(1,json);
        }
        else callback(0);                                            
      });  
}  
exports.update = update;

function query(sql,callback){ 
    connection.query(sql,function(err, results, fields) {  
        if (err)  throw err;
        if(results){
            var string=JSON.stringify(results);     
            var json=JSON.parse(string);    
            callback(1,json);
        }
        else callback(0);                  
      });   
}  
exports.query = query;
