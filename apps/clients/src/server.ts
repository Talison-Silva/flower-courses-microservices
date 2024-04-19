import {Request,Response} from 'express';
import express from 'express';

const app=express();

app.get('/',(req:Request,res:Response)=>{
	res.json({current:'clients'})
})

app.listen(3030,'0.0.0.0',() => console.log('[Running] server ...'))