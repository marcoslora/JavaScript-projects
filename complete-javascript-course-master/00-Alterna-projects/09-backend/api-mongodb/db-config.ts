import mongoose from 'mongoose';
import 'reflect-metadata';

export const dbConnection = async () => {
  try {
    await mongoose.connect(
      'mongodb://localhost:27017/?authMechanism=DEFAULT&authSource=alterna'
    );
    console.log('Connection Success');
  } catch (error) {
    console.log(error);
    throw new Error('Error al intentar conectar con Mongo');
  }
};
