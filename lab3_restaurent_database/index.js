const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/RestaurentRoutes.js');

const app = express();
app.use(express.json()); 


mongoose.connect('mongodb+srv://101300174_Ronak:Greatnews_321@cluster0.18gn2vn.mongodb.net/w2023_comp3133?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => { 
  console.log('Error Mongodb connection')
}); 

app.use(employeeRouter);

app.listen(3000, () => { console.log('Server is running...') });
