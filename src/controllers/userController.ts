import User from '../models/User.js';
import { Request, Response } from 'express';

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json(error);
  }
}

export const getSingleUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.userId; // Extracting userId more explicitly
    const user = await User.findOne({userId})
      .populate('thoughts') // Populating thoughts associated with the user
      .populate('friends'); // Populating friends associated with the user

    if (!user) {
    res.status(404).json({ message: 'User not found' });
    }
    res.json(user); // Send the user data as a response (no return needed)
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user data', error });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const userData = await User.create(req.body);
    res.json(userData);
  } catch (error) {
    res.status(500).json(error);
  }
}