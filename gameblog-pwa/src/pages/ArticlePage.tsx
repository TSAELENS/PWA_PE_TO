import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Article {
  id: number;
  title: string;
  content: string;
}

// Créez des articles factices
const mockArticles: Article[] = [
  { id: 1, title: 'Mock Article 1', content: 'Content of mock article 1' },
  { id: 2, title: 'Mock Article 2', content: 'Content of mock article 2' },
  { id: 3, title: 'Mock Article 3', content: 'Content of mock article 3' },
];

const ArticlePage: React.FC = () => {
  const [article, setArticle] = useState<Article | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      const foundArticle = mockArticles.find(article => article.id === parseInt(id));
      setArticle(foundArticle || null);
    }
  }, [id]);

  const handleDownload = async () => {
    if (article) {
      const cache = await caches.open('articles-cache');
      await cache.put(`/article/${article.id}`, new Response(JSON.stringify(article), {
        headers: { 'Content-Type': 'application/json' }
      }));
      alert('Article téléchargé pour être consulté hors ligne.');
    }
  };

  if (!article) return <div>Loading...</div>;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <button onClick={handleDownload}>Télécharger</button>
    </div>
  );
}

export default ArticlePage;
