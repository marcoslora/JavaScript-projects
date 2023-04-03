import mongoose from 'mongoose';
import 'reflect-metadata';

export const dbConnection = async () => {
  try {
    await mongoose.connect(
      'mongodb://root:example@localhost:27017/?authMechanism=DEFAULT'
    );
    console.log('Connection Success');
  } catch (error) {
    console.log(error);
    throw new Error('Error al intentar conectar con Mongo');
  }
};
