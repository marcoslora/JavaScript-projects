import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from './routes/user.routes';
const app = express();

//para ver las peticiones en consola
app.use(morgan('dev'));
//para comunicarse con servidores externos
app.use(cors());
app.use(userRoutes);
export default app;
