const express = require('express');
const userModel = require('../model/user');
const app = express();

//http://localhost:3000/users
app.post('/users', async (req, res) => {
  
  console.log(req.body)
  const user = new userModel(req.body);
  
  try {
    await user.save((err) => {
      if(err){
        res.send(err)
      }else{
        res.send(user);
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
});
module.exports = app

