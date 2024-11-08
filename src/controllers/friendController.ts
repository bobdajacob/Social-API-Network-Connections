import User from '../models/User.js';
import { Response, Request } from 'express';

export const addFriend = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, friendId } = req.params;

    if (userId === friendId) {
      res.status(400).json({message: ' You cannot add yourself as a friend' });
    }
    const user = await User.findByIdAndUpdate(userId, {$addToSet: {friends: friendId }}, {new: true, runValidators: true}).populate('friends');
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    }
    const friend = await User.findByIdAndUpdate(friendId, {$addToSet: { friends: userId}}, {new: true, runValidators: true }).populate('friends');
    if (!friend) {
      res.status(404).json({ message: 'Friend not found.' });
    }
    res.status(200).json({ message: 'Friend added successfully!', user, friend});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error});
  }
};

export const removeFriend = async (req: Request, res: Response) => {
  try {
    const { userId, friendId } = req.params;
    const user = await User.findByIdAndUpdate(userId, {$pull: {friends: friendId }}, {new:true}).populate('friends');
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    }
    const friend = await User.findByIdAndUpdate(friendId, {$pull: {friends: userId}}, {new: true}).populate('friends');
    if (!friend) {
      res.status(404).json({message: 'Friend removed successfully!', user, friend});
    } 
  } catch (error) {
    console.error(error);
      res.status(500).json({ message: 'Server error', error});
  }
};