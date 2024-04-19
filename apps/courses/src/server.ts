import {Request,Response} from 'express';
import express from 'express';

const app=express();

app.get('/',(req:Request,res:Response)=>{
	res.json({current:'courses'})
})

app.listen(4040,'0.0.0.0',() => console.log('~ [Server] Running...'))
