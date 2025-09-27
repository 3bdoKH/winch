import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import "./Articles.css";
import articlesData from "../data/articles.json";

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Load articles from JSON
    setArticles(articlesData.articles);
  }, []);

  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('ar-EG', options);
  };

  return (
    <div className="articles-page">
      <h1 className="articles-page-title">مقالات عن ونش الإنقاذ</h1>
      <p className="articles-page-description">
        أحدث المقالات والنصائح المتعلقة بخدمات ونش الإنقاذ وسحب السيارات ومساعدة السائقين على الطريق.
        تعرف على أفضل الممارسات والمعلومات المفيدة لكل سائق.
      </p>

      <div className="articles-grid">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <div className="article-card-image">
              <img 
                src={article.image || "/images/articles/default.jpg"} 
                alt={article.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/articles/default.jpg";
                }}
              />
            </div>
            <div className="article-card-content">
              <div className="article-card-date">{formatDate(article.date)}</div>
              <h2 className="article-card-title">{article.title}</h2>
              <div className="article-tags">
                {article.tags && article.tags.map((tag, idx) => (
                  <span key={idx} className="article-tag">{tag}</span>
                ))}
              </div>
              <p className="article-card-summary">{article.summary}</p>
              <Link to={`/articles/${article.slug}`} className="article-read-more">
                اقرأ المزيد <ChevronLeft size={18} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articles;
