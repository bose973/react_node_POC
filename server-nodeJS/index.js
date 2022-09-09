const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/py', function(req, res) {
  const msg ={"info":"this is /py API"}
  res.json(msg.info)     
});

app.get('/python', function(req, res) {
  const msg ={"info":"this is /python API"}
  res.json(msg.info) 
});

// app.post('/test',function(req,res){
//   request('https://sit-dsmbrsvc.anthem.com/dsstarsai/v2/api/eds/batch', function (error, response, body) {
//       console.error('error:', error); // Print the error
//       console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//       console.log('body:', body); // Print the data received
//       res.json(body); //Display the response on the website
//     });
// })

// app.get('/py', function(req, res) {
  // request('http://127.0.0.1:5000/py', function (error, response, body) {
  //     console.error('error:', error); // Print the error
  //     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //     console.log('body:', body); // Print the data received
  //     res.json(body); //Display the response on the website
  //   });      
// });

// app.get('/python', function(req, res) {
//   request('http://127.0.0.1:5000/python', function (error, response, body) {
//       console.error('error:', error); // Print the error
//       console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//       console.log('body:', body); // Print the data received
//       res.json(body); //Display the response on the website
//     });      
// });

app.post('/py', function(req, res) {
  request('http://127.0.0.1:5000/pyt', function (error, response, body) {
      console.error('error:', error); // Print the error
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the data received
      res.json(body); //Display the response on the website
    });      
});



app.get("/api", (req, res) => {
    value={ "message": "Hello from server!" }
    res.json(value.message);
    
  });

app.post("/bodyCheck",(req,res)=>{
  console.log(req.body.hi)
  res.json(req.body.hi)
})

app.get('/scheduler', function(req, res) {
  request('http://127.0.0.1:5000/scheduler', function (error, response, body) {
      console.error('error:', error); // Print the error
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the data received
      res.json(body); //Display the response on the website
    });      
});



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});