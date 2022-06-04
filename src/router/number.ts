import express, { Request, Response, RequestHandler } from 'express';

const router = express.Router();
router.get('/list', (req: Request, res: Response, next) => {
  return res.status(200).json({
    msgList: 'hello lists',
  });
});

export = router;
