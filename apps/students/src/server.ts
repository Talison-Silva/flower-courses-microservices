import {Request,Response} from 'express';
import express from 'express';

const app=express();

app.get('/',(req:Request,res:Response)=>{
	res.json({current:'students'})
})

app.listen(5050,'0.0.0.0',() => console.log('~ [Server] Running...'))
