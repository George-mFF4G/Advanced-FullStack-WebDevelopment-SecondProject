import express, { Request, Response } from 'express';
import { verifyAuthToken } from '../middlewars/verifyAuthToken';
import { Order, ordersStore } from '../models/orders';

const router = express.Router();
const operations = new ordersStore();

router.get('/', verifyAuthToken, async (req: Request, res: Response) => {
  try {
    const orders = await operations.index();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', verifyAuthToken, async (req: Request, res: Response) => {
  try {
    const order = await operations.show(req.params.id);
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', verifyAuthToken, async (req: Request, res: Response) => {
  try {
    const order: Order = {
      name: req.body.name,
      user_id: req.body.userid,
      status: req.body.status,
    };
    const newOrder = await operations.create(order);
    res.status(200).json(newOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', verifyAuthToken, async (req: Request, res: Response) => {
  try {
    const order: Order = {
      name: req.body.name,
      user_id: req.body.userid,
      status: req.body.status,
    };
    const newOrder = await operations.update(order, req.params.id);
    res.status(200).json(newOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', verifyAuthToken, async (req: Request, res: Response) => {
  try {
    const deleted = await operations.delete(req.params.id);
    res.status(200).json(deleted);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
