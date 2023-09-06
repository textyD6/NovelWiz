require('dotenv').config();

const express =require('express')
const app = express()
const expresslayouts=require('express-ejs-layouts')

const indexRouter = require('./routes/index')
const mongoose=require('mongoose')



app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expresslayouts)
app.use(express.static('public'))


app.use('/', indexRouter)


const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch((error) => {
  console.error('Error connecting to MongoDB Atlas:', error);
});





app.listen(process.env.PORT || 4800)