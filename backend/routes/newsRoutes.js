import express from 'express';
import { getAllNews } from '../controllers/newsController.js';

const router = express.Router();  // router 정의 반드시 필요

router.get('/', getAllNews);

export default router;  // router를 default export
