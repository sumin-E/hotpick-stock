import * as newsModel from '../models/newsModel.js';

export function getAllNews(req, res) {
  const news = newsModel.getAllNews();
  res.json(news);
}
