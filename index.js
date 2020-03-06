const express = require("express");
const app = express();
const personData = require('./person');
const movies = require('./movies-data');
const bodyParser = require('body-parser');
const axios = require('axios');
const request = require('request-promise');
// const mongoClient = require('mongodb').MongoClient;
// const url = "mongodb://localhost:27017/";
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://nitesh:RTM1h0reRYn2bUZI@cluster0-d5zix.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  });
// client.connect(err => {
//   const collection = client.db("test").collection("movies");
//   // perform actions on the collection object
//   console.log("DB connected");
//   collection
//   client.close();
// });
const db = require('diskdb');
db.connect('./data',['movies']);
if (!db.movies.find().length) {
  const movie = movies
  db.movies.save(movies);
}
const db2 = require('diskdb');
db2.connect('./data',['user']);
if(!db2.user.find().length) {
  db2.user.save(personData);
}
app.listen('3000');
const urlencodedParser  = app.use(bodyParser.urlencoded({ extended: false }));
 
const jsonParser = app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
});
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept");
//   res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   next();
// });
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept, Content-Type: 'application/json'");
//   res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   next();
// });
app.post('/persons', (req, res, err) => {
  const  personDetails  = req.body;
   personData.push(personDetails);
    
    return  res.status(200).json({
     message: 'person added successfully'
   })
 });
 app.post('/login', (req,res,err) => {
    const {email, password} = req.body;
    const data = db.user.findOne({email:email});
    // then((data) => {
      //  console.log(data);
      if (data && data.password === password) {
        return res.status(200).json({
          status:true,
          message: "login successfully",
          userData: data
        })
      } else {
        return res.status(200).json({
          status:false,
          message: "Wrong credentials"
        })
      }
    // }).catch((err) => {
    //   return res.status(500).json({
    //     status:false,
    //     message: err
    //   })
    // })
 })
 app.post('/register', (req, res) => {
  const { name , email, password, age} = req.body;
  if (db.user.findOne({email:email})) {
    return res.status(200).json({
      status: false,
      message: "User already exist with this email id"
    })
  } else {
    const data = (db.user.save(req.body));
    //.then((err,res) => {
      if(!data) {
        return res.status(500).json({
          status:false,
          message: "User registration failed"
        })
      } else {
        return res.status(200).json({
          status: true,
          message: "User Registration successfull"
        });
      }
  // });
  } 
 });
 app.post('/meaning', (req,res) => {
  const word = req.body.word;
  console.log(word);
  request('https://wordsapiv1.p.mashape.com/words/'+ word).then((res) => {
    return res.status(200).json({
      status:true,
      result: res
    })
  }).catch((error) => {
    return res.status(500).json({
      status:false,
      message: error
    })
  })
 });
app.get('/persons', (req,res)=>{
 return res.status(200).json(db.user.find());
});
 app.get('/movies', (req, res) => {
  return res.status(200).json(db.movies.find());
})
app.get('/movies/:genre', (req,res) => {
  const genre = req.params.genre;
  const movies = db.movies.find();
  const filterMovies = movies.filter((mov) => {
   return mov.genres.includes(genre);
  })
  if(filterMovies) {
  return res.status(200).json({
    status: true,
    movies: filterMovies
  })
} else {
  return res.status(200).json({
    status: false,
    message: "No movies on this genre"
  })
}
});
app.get('/movie/:id', (req,res) => {
  const movieid = req.params.id;
  const movie = db.movies.find();
  const filterMovie = movie.filter((mov) => {
    return mov.id == movieid;
  })
  if (filterMovie) { 
   return res.status(200).json({
     status:true,
     movie: filterMovie[0]
   })
  } else {
    return res.status(200).json({
      status:false,
      message: "No Movie data available"
    })
  }
})
app.get('/persons/:name', (req,res) => {
 const person =  personData.find((pr) => {
    return pr.name === req.params.name;
  })
  if(person) {
    return res.status(200).json(person);
  } else {
    return res.status(200).json({
      message: "person not found !!!"
    })
  }
})
// app.post('/persons', (req, res, err) => {
//  const  personDetails  = req.body;
//   personData.push(personDetails);
//    return  res.status(200).json({
//     message: 'person added successfully'
//   })
// });
module.exports = app;