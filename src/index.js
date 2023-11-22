const express = require("express");
const morgan = require('morgan');
const path = require('path')
//const connectDB = require("./db")
require('ejs')

//connectDB()


const app = express();

const HomeRoutes = require('./routes/home')
const UserRoutes = require('./routes/users');



//settings
app.set('case sensitive routing', true)
app.set('appName', 'Express Courses')
app.set('port', 3000)
//ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))

//middlewares
app.use(express.json());
app.use(morgan('dev'))

app.use(HomeRoutes)
app.use(UserRoutes)


app.use("/public", express.static(path.join(__dirname,'public')))
app.use("/upload", express.static(path.join(__dirname, 'uploads')))

app.listen(app.set('port'));
console.log(`Server on Port ${app.set('port')}`);  
