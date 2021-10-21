const express = require('express');
var cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors())
const port = 5000;

const data = [
    {id:0, name:'sabana', email:'sabana@gmail.com'},
    {id:1, name:'sabnor', email:'sabnor@gmail.com'},
    {id:2, name:'suchorita', email:'suchorita@gmail.com'},
    {id:3, name:'sonia', email:'sonia@gmail.com'},
]
app.get('/', (req, res) =>{
    res.send("hellow i am from node version 2");

})
app.get('/user', (req, res) =>{
    const search = req.query.search;
    if(search){
        const searchresult = data.filter(data => data.name.toLowerCase().includes(search));
        res.send(searchresult);
    }else{
        res.send(data);
    }
   

})
app.get('/user/', (req, res) =>{
    res.send(data);

});

app.post('/user', (req, res) => {
    const newUser = req.body;
    newUser.id = data.length;
    data.push(newUser);
    console.log('the post lisining', req.body);
    res.send(JSON.stringify(newUser));
})
app.get('/user/:id', (req,res) => {
    const userid = req.params.id;
    res.send(data[userid]);
})

app.listen(port, ()=> {
    console.log("listing to node");
});