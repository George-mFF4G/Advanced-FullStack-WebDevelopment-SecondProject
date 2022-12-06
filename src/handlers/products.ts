import express, { Request, Response } from 'express';
import { verifyAuthToken } from '../middlewars/verifyAuthToken';
import { Product, ProductsStore } from '../models/products';

const router = express.Router();
const operations = new ProductsStore();

router.get('/', async (req: Request, res: Response) => {
  try {
    const products = await operations.index();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const product = await operations.show(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', verifyAuthToken, async (req: Request, res: Response) => {
  try {
    const product: Product = {
      name: req.body.name,
      describe: req.body.describe,
      price: req.body.price,
    };
    const newProduct = await operations.create(product);
    res.status(200).json(newProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', verifyAuthToken, async (req: Request, res: Response) => {
  try {
    const product: Product = {
      name: req.body.name,
      describe: req.body.describe,
      price: req.body.price,
    };
    const newProduct = await operations.update(product, req.params.id);
    res.status(200).json(newProduct);
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
