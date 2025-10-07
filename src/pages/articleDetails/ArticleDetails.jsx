import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronRight, ChevronLeft, User, Calendar, ArrowRight, ArrowLeft } from "lucide-react";
import "./ArticleDetails.css";
import articlesData from "../../data/articles.json";

function ArticleDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [prevArticle, setPrevArticle] = useState(null);
  const [nextArticle, setNextArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the current article
    const currentArticleIndex = articlesData.articles.findIndex(a => a.slug === slug);

    if (currentArticleIndex === -1) {
      // Article not found
      navigate('/articles');
      return;
    }

    const currentArticle = articlesData.articles[currentArticleIndex];
    setArticle(currentArticle);

    // Find previous and next articles
    if (currentArticleIndex > 0) {
      setPrevArticle(articlesData.articles[currentArticleIndex - 1]);
    } else {
      setPrevArticle(null);
    }

    if (currentArticleIndex < articlesData.articles.length - 1) {
      setNextArticle(articlesData.articles[currentArticleIndex + 1]);
    } else {
      setNextArticle(null);
    }

    // Find related articles (excluding current article)
    // This simple implementation looks for articles with at least one matching tag
    if (currentArticle.tags && currentArticle.tags.length > 0) {
      const related = articlesData.articles
        .filter(a =>
          a.id !== currentArticle.id &&
          a.tags.some(tag => currentArticle.tags.includes(tag))
        )
        .slice(0, 3); // Limit to 3 related articles

      setRelatedArticles(related);
    }

    setLoading(false);
  }, [slug, navigate]);

  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('ar-EG', options);
  };

  // Function to render article content with proper formatting
  const renderContent = (content) => {
    if (!content) return null;

    // Split the content by newlines and render paragraphs
    return content.split('\n\n').map((paragraph, idx) => {
      // Check if the paragraph is a header
      if (paragraph.startsWith('## ')) {
        return <h2 key={idx}>{paragraph.replace('## ', '')}</h2>;
      } else if (paragraph.startsWith('### ')) {
        return <h3 key={idx}>{paragraph.replace('### ', '')}</h3>;
      }
      // Check if paragraph is a list
      else if (paragraph.includes('\n- ')) {
        const listItems = paragraph.split('\n- ');
        const listTitle = listItems.shift();

        return (
          <React.Fragment key={idx}>
            {listTitle && <p>{listTitle}</p>}
            <ul>
              {listItems.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </React.Fragment>
        );
      } else if (paragraph.includes('\n1. ')) {
        const listItems = paragraph.split(/\n\d+\. /);
        const listTitle = listItems.shift();

        return (
          <React.Fragment key={idx}>
            {listTitle && <p>{listTitle}</p>}
            <ol>
              {listItems.map((item, i) => <li key={i}>{item}</li>)}
            </ol>
          </React.Fragment>
        );
      } else if (paragraph.includes('**')) {
        // Handle bold text
        return <p key={idx} dangerouslySetInnerHTML={{
          __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        }} />;
      } else {
        // Regular paragraph
        return <p key={idx}>{paragraph}</p>;
      }
    });
  };

  if (loading) {
    return (
      <div className="article-details">
        <p>جاري التحميل...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="article-details">
        <p>المقال غير موجود</p>
        <Link to="/articles" className="back-to-articles">
          <ChevronRight size={18} /> العودة إلى المقالات
        </Link>
      </div>
    );
  }

  return (
    <div className="article-details">
      <Link to="/articles" className="back-to-articles">
        <ChevronRight size={18} /> العودة إلى المقالات
      </Link>

      <div className="article-details-header">
        <h1 className="article-details-title">{article.title}</h1>

        <div className="article-details-meta">
          <div className="article-details-date">
            <Calendar size={16} /> {formatDate(article.date)}
          </div>
          <div className="article-details-author">
            <User size={16} /> {article.author}
          </div>
        </div>

        <div className="article-details-tags">
          {article.tags.map((tag, idx) => (
            <span key={idx} className="article-details-tag">{tag}</span>
          ))}
        </div>
      </div>

      <div className="article-details-image">
        <img
          src={article.image || "/images/articles/default.jpg"}
          alt={article.title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/images/articles/default.jpg";
          }}
        />
      </div>

      <div className="article-content-wrapper">
        <div className="article-details-content">
          {renderContent(article.content)}
        </div>
      </div>

      <div className="article-navigation">
        {prevArticle ? (
          <Link to={`/articles/${prevArticle.slug}`} className="article-nav-button">
            <ChevronRight size={18} /> المقال السابق
          </Link>
        ) : (
          <span className="article-nav-button disabled">
            <ChevronRight size={18} /> المقال السابق
          </span>
        )}

        {nextArticle ? (
          <Link to={`/articles/${nextArticle.slug}`} className="article-nav-button">
            المقال التالي <ChevronLeft size={18} />
          </Link>
        ) : (
          <span className="article-nav-button disabled">
            المقال التالي <ChevronLeft size={18} />
          </span>
        )}
      </div>

      {relatedArticles.length > 0 && (
        <div className="related-articles">
          <h3 className="related-articles-title">مقالات ذات صلة</h3>
          <div className="related-articles-grid">
            {relatedArticles.map((relatedArticle) => (
              <div key={relatedArticle.id} className="article-card">
                <div className="article-card-image">
                  <img
                    src={relatedArticle.image || "/images/articles/default.jpg"}
                    alt={relatedArticle.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/articles/default.jpg";
                    }}
                  />
                </div>
                <div className="article-card-content">
                  <h3 className="article-card-title">{relatedArticle.title}</h3>
                  <Link to={`/articles/${relatedArticle.slug}`} className="article-read-more">
                    اقرأ المزيد <ChevronLeft size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ArticleDetails;
