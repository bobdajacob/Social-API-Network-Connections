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

export const getSingleUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ _id: req.params.userId })
      .select('-__v')
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

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    );
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    }
    // Update user with the new data
    res.status(200).json({ message: 'User updated successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.userId });
    if (!user) {
      res.status(404).json({ message: 'No thought with this id' });
    }
    if (!user) {
      res.status(404).json({
        message: 'User created but no user with this id!',
      });
    }
    res.json({ message: 'User successfully deleted!' });
    return;
  } catch (error) {
    res.status(500).json(error);
    return;
  }
}