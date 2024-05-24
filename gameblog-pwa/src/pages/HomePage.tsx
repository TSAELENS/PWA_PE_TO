import React, { useEffect, useState } from 'react';
import ArticlePreview from '../components/ArticlePreview';

interface Article {
  id: number;
  title: string;
  summary: string;
}

const mockArticles: Article[] = [
  { id: 1, title: 'Mock Article 1', summary: 'Summary of mock article 1' },
  { id: 2, title: 'Mock Article 2', summary: 'Summary of mock article 2' },
  { id: 3, title: 'Mock Article 3', summary: 'Summary of mock article 3' },
];

const HomePage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    setArticles(mockArticles);
  }, []);

  return (
    <main className="homepage">
      <h1 className="homepage__title">À la une</h1>
      <div className="homepage__articles">
        {articles.map(article => (
          <ArticlePreview key={article.id} article={article} />
        ))}
      </div>
    </main>
  );
}

export default HomePage;
