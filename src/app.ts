import express from 'express';
import route  from './routes/employee.route';
const app= express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', route)

app.listen(8000,()=>{
    console.log(`Listening port on http://localhost:${8000}`);
});

