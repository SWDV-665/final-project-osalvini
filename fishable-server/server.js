const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');

const { connectionPool } = require('./routes/database');
require('dotenv').config();
const app = express();
const port = process.env.NODE_PORT || 3000;

app.use(cors());
app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));

app.use('/', (req, res, next) => {
  const method = req.method;
  const url = req.originalUrl;
  console.log(`${method} ${url}`);
  next();
});

app.use('/api', require('./routes'));

app.use('/', (req, res) => {
  res.send('API Server: /api');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});















// app.get('/test/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     const { rows } = await connectionPool.query('SELECT image FROM catch WHERE catch_id = $1', [id]);
//     if (rows.length === 0) {
//       res.status(404).send('Item not found');
//     } else {
//       const imageData = rows[0].image;
//       if (!imageData) {
//         res.status(404).send('Image data not found');
//         return;
//       }


//       res.setHeader('Content-Type', 'image/jpeg');

//       res.end(Buffer.from(imageData, 'base64'));
//     }
//   } catch (error) {
//     console.error('Error fetching image:', error);
//     res.status(500).send('An unexpected error occurred');
//   }
// });

// app.get('/catch', (req, res) => {
//   res.send(`
//     <html>
//       <body>
//         <h2>Insert Catch</h2>
//         <form action="/catch" method="post" enctype="multipart/form-data">
//           <label for="catchType">Catch Type:</label>
//           <input type="text" id="catchType" name="catchType"><br><br>
//           <label for="baitType">Bait Type:</label>
//           <input type="text" id="baitType" name="baitType"><br><br>
//           <label for="date">Date:</label>
//           <input type="date" id="date" name="date"><br><br>
//           <label for="image">Image:</label>
//           <input type="file" id="image" name="image"><br><br>
//           <button type="submit">Submit</button>
//         </form>
//       </body>
//     </html>
//   `);
// });


// app.post('/catch', upload.single('image'), async (req, res) => {
//   const { catchType, baitType, date } = req.body;
//   const image = req.file.buffer.toString('base64');

//   try {
//     const query = 'INSERT INTO catch (catch_type, bait_type, date, image) VALUES ($1, $2, $3, $4)';
//     await connectionPool.query(query, [catchType, baitType, date, image]);
//     res.send('Catch inserted successfully.');
//   } catch (error) {
//     console.error('Error inserting catch:', error);
//     res.status(500).send('Error inserting catch.');
//   }
// });
