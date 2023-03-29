import express, { application } from 'express'
import routes from './routes/index.routes'
const port = process.env.PORT || 3333;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(routes);

app.listen(port, ()=>{
    console.log(`running on port ${port}`);
});