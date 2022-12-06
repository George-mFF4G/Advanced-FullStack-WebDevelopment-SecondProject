import express, { Request, Response } from 'express';
import { verifyAuthToken } from '../middlewars/verifyAuthToken';
import { Order_Products, Order_ProductsStore } from '../models/order_products';

const router = express.Router();
const operations = new Order_ProductsStore();

router.get('/', verifyAuthToken, async (req: Request, res: Response) => {
  try {
    const order_products = await operations.index();
    res.status(200).json(order_products);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', verifyAuthToken, async (req: Request, res: Response) => {
  try {
    const order_product = await operations.show(req.params.id);
    res.status(200).json(order_product);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', verifyAuthToken, async (req: Request, res: Response) => {
  try {
    const order_product: Order_Products = {
      quantity: req.body.quantity,
      product_id: req.body.productid,
      order_id: req.body.orderid,
    };
    const newOrder_Product = await operations.create(order_product);
    res.status(200).json(newOrder_Product);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', verifyAuthToken, async (req: Request, res: Response) => {
  try {
    const order_product: Order_Products = {
      quantity: req.body.quantity,
      product_id: req.body.productid,
      order_id: req.body.orderid,
    };
    const newOrder_Product = await operations.update(
      order_product,
      req.params.id
    );
    res.status(200).json(newOrder_Product);
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
