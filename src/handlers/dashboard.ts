import express, { Request, Response } from 'express';
import { verifyAuthToken } from '../middlewars/verifyAuthToken';
import { DashboardQueries } from '../services/dashboard';
const router = express.Router();

const operations = new DashboardQueries();

router.get('/:id', verifyAuthToken, async (req: Request, res: Response) => {
  try {
    const orderUser = await operations.orderByUser(req.params.id);
    res.status(200).json(orderUser);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get(
  '/active/:id',
  verifyAuthToken,
  async (req: Request, res: Response) => {
    try {
      const orderUserActive = await operations.activeOrderByUser(req.params.id);
      res.status(200).json(orderUserActive);
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

export default router;
