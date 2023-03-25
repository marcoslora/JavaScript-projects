// This code imports the app module and connects to the database before starting the server
import 'reflect-metadata'; // This is required to use decorators
import app from './app'; // This imports the app module
import { AppDataSource } from './db'; // This imports the database connection

async function main() {
  try {
    await AppDataSource.initialize(); // This connects to the database
    console.log('Database is connected');
    app.listen(3000); // This starts the server on port 3000
    console.log('Server is listening on port', 3000);
  } catch (error) {
    console.log(error);
  } // This catches any errors
}
main();
