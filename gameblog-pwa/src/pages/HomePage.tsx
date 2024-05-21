import React, { useEffect, useState } from 'react';
import ArticlePreview from '../components/ArticlePreview';

interface Article {
  id: number;
  title: string;
  summary: string;
}

// Créez des articles factices
const mockArticles: Article[] = [
  { id: 1, title: 'Mock Article 1', summary: 'Summary of mock article 1' },
  { id: 2, title: 'Mock Article 2', summary: 'Summary of mock article 2' },
  { id: 3, title: 'Mock Article 3', summary: 'Summary of mock article 3' },
];

const HomePage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Utilisez les articles factices au lieu de faire une requête API
    setArticles(mockArticles);
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
