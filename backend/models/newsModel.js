const newsList = [
  {
    id: 1,
    title: '주식시장 상승',
    summary: '오늘 주식시장이 크게 올랐습니다.',
    source: '경제신문',
    date: '2025-05-27',
    url: 'https://news.example.com/stock-up',
  },
  {
    id: 2,
    title: '금리 인상 발표',
    summary: '중앙은행이 금리를 인상했습니다.',
    source: '뉴스데일리',
    date: '2025-05-26',
    url: 'https://news.example.com/rate-increase',
  },
];

export function getAllNews() {
  return newsList;
}
