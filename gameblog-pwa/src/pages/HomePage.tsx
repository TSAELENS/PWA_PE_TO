import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticlePreview from '../components/ArticlePreview';

interface Article {
  id: number;
  title: string;
  summary: string;
}

const HomePage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios.get('/api/articles')
      .then(response => setArticles(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>À la une</h1>
      <div>
        {articles.map(article => (
          <ArticlePreview key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
