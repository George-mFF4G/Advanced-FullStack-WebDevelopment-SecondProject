import jwt from 'jsonwebtoken';
import express, { Request, Response } from 'express';
import { User, usersStore } from '../models/users';
import dotenv from 'dotenv';
import { verifyAuthToken } from '../middlewars/verifyAuthToken';
dotenv.config();

const router = express.Router();
const operations = new usersStore();
const gtoken = process.env.TOKEN_SECRET;

router.post('/', async (req: express.Request, res: express.Response) => {
  const user: User = {
    first_name: req.body.firstname,
    last_name: req.body.lastname,
    person_details: req.body.persondetails,
    username: req.body.username,
    user_password: req.body.password,
  };
  try {
    const newUser = await operations.register(user);
    const token = jwt.sign({ user: newUser }, gtoken as string);
    res.status(200).json(token);
  } catch (err) {
    res.status(500).json(`Cannot create the user. ${err}.`);
  }
});

router.post('/login', async (req: express.Request, res: express.Response) => {
  const user: User = {
    username: req.body.username,
    user_password: req.body.password,
    first_name: '',
    last_name: '',
    person_details: '',
  };
  try {
    const u = await operations.login(user.username, user.user_password);
    res.status(200).json(u);
  } catch (error) {
    res.status(500).json(`Cannot Login the user. ${error}.`);
  }
});

router.get('/', verifyAuthToken, async (req: Request, res: Response) => {
  try {
    const users = await operations.index();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(`Cannot Get the users. ${error}.`);
  }
});

router.get('/:id', verifyAuthToken, async (req: Request, res: Response) => {
  try {
    const user = await operations.show(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(`Cannot Get the user. ${error}.`);
  }
});

router.put('/:id', verifyAuthToken, async (req: Request, res: Response) => {
  try {
    const user: User = {
      first_name: req.body.firstname,
      last_name: req.body.lastname,
      person_details: req.body.persondetails,
      username: req.body.username,
      user_password: req.body.userpassword,
    };
    const newUser = await operations.update(user, req.params.id);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json(`Cannot Update the user. ${error}.`);
  }
});

router.delete('/:id', verifyAuthToken, async (req: Request, res: Response) => {
  try {
    const deleted = await operations.delete(req.params.id);
    res.status(200).json(deleted);
  } catch (error) {
    res.status(500).json(`Cannot Delete the user. ${error}.`);
  }
});

export default router;
