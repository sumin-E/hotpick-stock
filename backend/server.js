import express from 'express';
import open from 'open';
import newsRoutes from './routes/newsRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 4000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

// 디버깅 정보
const staticPath = path.join(__dirname, '..', 'frontend', 'public');
const indexPath = path.join(__dirname, '..', 'frontend', 'public', 'index.html');

console.log('현재 디렉토리:', __dirname);
console.log('정적 파일 경로:', staticPath);
console.log('index.html 경로:', indexPath);
console.log('index.html 파일 존재?', fs.existsSync(indexPath));

// 순서 변경: 정적 파일을 먼저
app.use(express.static(staticPath));

// API 라우트
app.use('/api/news', newsRoutes);

app.get('/test', (req, res) => {
  res.json({ message: '서버 정상 작동 중' });
});

// 루트 라우트를 맨 마지막에
app.get('/', (req, res) => {
  console.log('루트 경로 요청됨'); // 디버깅 추가
  res.sendFile(indexPath);
});

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`브라우저에서 http://localhost:${PORT} 접속하세요`);
  try {
    await open(`http://localhost:${PORT}`);
  } catch (error) {
    console.error('Failed to open browser:', error);
  }
});