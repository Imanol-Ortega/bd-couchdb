import express  from "express";
import cors from 'cors'
import bodyParser from "body-parser";
import personasRoutes from "./routes/index.routes.js"
const app = express();

app.set('port',3000);
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(personasRoutes)

app.listen(app.get('port'),()=>{
    console.log("Server Corriendo en puerto: 3000")
});