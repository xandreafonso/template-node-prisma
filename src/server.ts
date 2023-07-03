import { authorsRouter } from "./authors/router";
import { prisma } from "./libs/prisma";
import express, { Request, Response } from "express";

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Você está na home!');
});

app.use('/authors', authorsRouter);

app.listen(3000, () => console.log("App de pé!"));