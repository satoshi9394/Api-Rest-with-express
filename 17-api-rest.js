import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';

//router
import productsRouter from './routers/productsRouter'
import adminRouter from './routers/adminRouter'


//data
import productsList from './utils/products'


const APP = express()
const PRODUCTS = express();
const ADMIN = express();

APP.use(bodyParser.json())


APP.use('/products', PRODUCTS)
APP.use('/admin', ADMIN )


let total = 0

const SERVER = http.createServer(APP)

APP.get('/', (req,res)=>{
  res.send('api home')
})

productsRouter(PRODUCTS, productsList, total);

adminRouter(ADMIN, productsList);




SERVER.listen(5000);