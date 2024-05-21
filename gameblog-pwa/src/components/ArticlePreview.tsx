import React from 'react';
import { Link } from 'react-router-dom';

interface ArticlePreviewProps {
  article: {
    id: number;
    title: string;
    summary: string;
  };
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({ article }) => {
  return (
    <div>
      <h2><Link to={`/article/${article.id}`}>{article.title}</Link></h2>
      <p>{article.summary}</p>
    </div>
  );
}

export default ArticlePreview;
