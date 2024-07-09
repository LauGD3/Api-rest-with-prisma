import express from 'express';
import RouterTipoUsuario from './routes/tipoUsuario.routes' 

const app = express();

app.listen(3000, () => { console.log('App running on port 3000'); });

app.use(express.json());

app.use('/Api', RouterTipoUsuario);