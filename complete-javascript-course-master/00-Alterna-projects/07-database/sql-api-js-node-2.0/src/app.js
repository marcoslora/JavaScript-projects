import express from 'express';
import config from './config';
import productsRoutes from './routes/products.routes';
const app = express();
// setting
console.log(typeof parseInt(config.port));
app.set('port', 4000 || 3000);
// middlewares para cambiar el formato a json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(productsRoutes);

export default app;
