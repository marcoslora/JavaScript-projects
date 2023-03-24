import sql from 'mssql';

const dbSettings = {
  user: 'sa',
  password: '<M@rcos0625.>',
  server: 'localhost',
  database: 'webstore',
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

export async function getConnection() {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.log(error);
  }
}
export { sql };
