import express from 'express';
import open from 'open';
import newsRoutes from './routes/newsRoutes.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use('/api/news', newsRoutes);

app.get('/', (req, res) => {
  res.send('Hello, Hotpick Stock!');
});

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    await open(`http://localhost:${PORT}`);
  } catch (error) {
    console.error('Failed to open browser:', error);
  }
});
