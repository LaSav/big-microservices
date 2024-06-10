import mongoose from 'mongoose';
import { natsWrapper } from './nats-wrapper';

import { app } from './app';

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be provided');
  }

  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined');
  }

  try {
    await natsWrapper.connect('ticketing', 'laskdlk', 'http://nats-srv:4222');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('connected to mongoDB');
  } catch (err) {
    console.error(err);
  }
  app.listen(3000, () => {
    console.log('Listening on port 3000');
  });
};

start();
