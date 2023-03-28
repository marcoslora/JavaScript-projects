import mongoose from 'mongoose';

export const dbConnection = async () => {
  try {
    await mongoose.connect('mongodb://root:example@localhost:27017');
    console.log('Connection Success');
  } catch (error) {
    console.log(error);
    throw new Error('Error al intentar conectar con Mongo');
  }
};
