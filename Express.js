const express = require("express");
const app = express();

//รับค่าจาก Json
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());

//GET == SELECT
//POST == INSERT
//PUT == UPDATE
//DELETE = DELETE

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('Hello world กีกี้'); //TEXT
});

app.get('/myJson', (req, res) =>{
  res.send({ message: "Hello Json Kikie"}); //Json

});

app.get('/myObject', (req, res) => {
const cars ={
  id: 100,
  name: "Mclaren",
  price: 67000000,
  detail: "765 LT"
};
res.send(cars);
});

app.post('/myCreate', (req, res) => {
  const cars = req.body;
  console.log({ cars: cars});
  res.send({ cars: cars});
});

app.put('/edit/:id', (req, res) => {
  const id = req.params.id;
  const cars = req.body;

  res.send({id: id, cars: cars,});
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM tb_cars WHERE id = ' + id;
  res.send({ sql: sql});
});

let tableCars = [];

app.post('/cars/create', (req, res) => {
  tableCars.push(req.body);
  res.send({message: "success"});
});

app.get('/cars/list', (req, res) =>{
  res.send(tableCars);
});

app.put('/cars/edit/:id', (req, res) => {


  for (let i = 0;i < tableCars.length; i++){
    const item = tableCars[i];

    if (item.id == req.params.id){
      tableCars[i] = req.body;
    }
  }
  res.send({ message: "success"});
});

app.delete('/cars/delete/:id', (req, res) => {
try {
  const id = req.params.id;
  for (let i = 0; i < tableCars.length; i++){
    const item = tableCars[i];

    if(item.id == id){
      tableCars.splice(i, 1);
    }
  }
  res.send({message: 'success'});
} catch (error) {
  
}
});
app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});