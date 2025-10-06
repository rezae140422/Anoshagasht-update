const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

const app = express();
const upload = multer({ dest: path.join(__dirname, 'tmp') });

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'install.html'));
});

app.post('/install', upload.single('sqlFile'), async (req, res) => {
  const { dbHost, dbPort, dbName, dbUser, dbPass } = req.body;

  if (!dbHost || !dbPort || !dbName || !dbUser) {
    return res.status(400).send('Missing required fields');
  }

  try {
    // Connect to MySQL server (without database) to create DB if needed
    const conn = await mysql.createConnection({
      host: dbHost,
      port: Number(dbPort),
      user: dbUser,
      password: dbPass,
      multipleStatements: true,
    });

    await conn.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`);
    await conn.end();

    // If SQL file provided, import it into the newly created DB
    if (req.file) {
      const filePath = req.file.path;
      const sql = fs.readFileSync(filePath, 'utf8');

      const dbConn = await mysql.createConnection({
        host: dbHost,
        port: Number(dbPort),
        user: dbUser,
        password: dbPass,
        database: dbName,
        multipleStatements: true,
      });

      await dbConn.query(sql);
      await dbConn.end();

      // Cleanup uploaded file
      fs.unlinkSync(filePath);
      return res.send('Database created and SQL imported successfully.');
    }

    return res.send('Database created (no SQL file provided).');
  } catch (err) {
    console.error(err);
    return res.status(500).send('Installation failed: ' + String(err.message));
  }
});

const PORT = process.env.INSTALLER_PORT || 4000;
app.listen(PORT, () => console.log(`Installer running at http://localhost:${PORT}/`));
