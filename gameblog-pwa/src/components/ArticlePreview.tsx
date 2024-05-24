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
    <div className="article-preview">
      <h2 className="article-preview__title">
        <Link to={`/article/${article.id}`}>{article.title}</Link>
      </h2>
      <p className="article-preview__summary">{article.summary}</p>
    </div>
  );
}

export default ArticlePreview;
