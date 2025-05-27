async function fetchNews() {
  try {
    const response = await fetch('/api/news');
    if (!response.ok) throw new Error('네트워크 오류');
    const newsList = await response.json();
    renderNewsCards(newsList);
  } catch (error) {
    console.error('뉴스 불러오기 실패:', error);
  }
}

function renderNewsCards(newsList) {
  const container = document.getElementById('news-container');
  container.innerHTML = '';

  newsList.forEach(news => {
    console.log('카드 생성:', news.title);
    const card = document.createElement('div');
    card.className = 'news-card';

    card.innerHTML = `
      <h3 class="news-title">${news.title}</h3>
      <p class="news-summary">${news.summary}</p>
      <p class="news-date">${news.source} | ${new Date(news.date).toLocaleDateString()}</p>
      <button class="news-link-btn">자세히 보기</button>
    `;

    card.querySelector('.news-link-btn').addEventListener('click', () => {
      window.open(news.url, '_blank');
    });

    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', fetchNews);
