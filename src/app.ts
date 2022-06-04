/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */

// 사용할 서버
import express, { Request, Response, RequestHandler } from 'express';
import { createServer } from 'http';
import bodyParser from 'body-parser';
import 'dotenv/config';
import number from './router/number';

// .env에 있는 환경변수 불러옴
const app = express();
// const http = new Server(app);
const httpServer = createServer(app);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));

app.use('/listTest', number);

app.get('/hello', (req: Request, res: Response, next) => {
  return res.status(200).json({
    msg: 'hello',
  });
});

app.post('/number', (req: Request, res: Response, next) => {
  const { numberOne, numberTwo } = req.body;
  const result = numberOne + numberTwo;
  return res.status(200).json({
    result,
  });
});

httpServer.listen(process.env.PORT, () => {
  console.log(`:방패: Server listening on port: 8000:방패:`);
});
