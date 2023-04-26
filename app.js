const express=require('express');
const app=express();
const table=require('./model/table.js')
const bodyparser=require('body-parser');
app.listen(3000);
app.use(bodyparser.urlencoded());
app.use((req,res,next)=>{
    res.send('<h1>hell form mySql</h1>');
});
function db(){
    table.create({
        title:'Shubham',
        description:'webdev',
        imageUrl:'image',
        status:'Unapproved'
    });
    
};
function find(){
table.findAll({raw:true}).then((result)=>{
    console.log(result);
})

}
function deleteID(id){
    sqldb.execute('DELETE FROM person WHERE ID=?',[id]);
}
find();
// db();
// deleteID(5);