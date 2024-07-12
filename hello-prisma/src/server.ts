import express from 'express';
import RouterTipoUsuario from './routes/tipoUsuario.routes' 
import RouterTipoDocumento from './routes/TipoDocumento.routes' 

const app = express();
const PORT = process.env.PORT

app.listen(PORT, () => { console.log(`App running on port ${ PORT }`); });

app.use(express.json());

app.use('/Api/TipoUsuario', RouterTipoUsuario);
app.use('/Api/TipoDocumento', RouterTipoDocumento);