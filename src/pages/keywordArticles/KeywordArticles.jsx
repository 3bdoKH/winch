import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Calendar, Tag } from 'lucide-react';
import './KeywordArticles.css';
import { getArticleByKeyword } from '../../data/keywordArticles';

function KeywordArticles() {
    const { keyword } = useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Decode the keyword from URL
        const decodedKeyword = decodeURIComponent(keyword);

        // Get the article for this keyword
        const foundArticle = getArticleByKeyword(decodedKeyword);

        if (!foundArticle) {
            // Keyword not found, redirect to home
            navigate('/');
            return;
        }

        setArticle(foundArticle);
        setLoading(false);

        // Update metadata
        document.title = foundArticle.title;
        const metaDescriptionTag = document.querySelector('meta[name="description"]');
        if (metaDescriptionTag) {
            metaDescriptionTag.setAttribute('content', foundArticle.metaDescription);
        }
    }, [keyword, navigate]);

    // Function to render markdown-like content
    const renderContent = (content) => {
        if (!content) return null;

        return content.split('\n').map((line, idx) => {
            // Skip empty lines
            if (line.trim() === '') return <br key={idx} />;

            // H1
            if (line.startsWith('# ')) {
                return <h1 key={idx} className="content-h1">{line.replace('# ', '')}</h1>;
            }

            // H2
            if (line.startsWith('## ')) {
                return <h2 key={idx} className="content-h2">{line.replace('## ', '')}</h2>;
            }

            // H3
            if (line.startsWith('### ')) {
                return <h3 key={idx} className="content-h3">{line.replace('### ', '')}</h3>;
            }

            // H4
            if (line.startsWith('#### ')) {
                return <h4 key={idx} className="content-h4">{line.replace('#### ', '')}</h4>;
            }

            // Unordered list
            if (line.startsWith('- ')) {
                return (
                    <li key={idx} className="content-li">
                        {line.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
                    </li>
                );
            }

            // Table row (simple detection)
            if (line.includes('|')) {
                const cells = line.split('|').filter(cell => cell.trim());
                if (cells.length > 0) {
                    return (
                        <tr key={idx}>
                            {cells.map((cell, cellIdx) => (
                                <td key={cellIdx}>{cell.trim()}</td>
                            ))}
                        </tr>
                    );
                }
            }

            // Bold text
            if (line.includes('**')) {
                return (
                    <p
                        key={idx}
                        className="content-p"
                        dangerouslySetInnerHTML={{
                            __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        }}
                    />
                );
            }

            // Blockquote
            if (line.startsWith('> ')) {
                return (
                    <blockquote key={idx} className="content-blockquote">
                        {line.replace('> ', '')}
                    </blockquote>
                );
            }

            // Regular paragraph
            return <p key={idx} className="content-p">{line}</p>;
        });
    };

    if (loading) {
        return (
            <div className="keyword-article-page">
                <div className="loading">جاري التحميل...</div>
            </div>
        );
    }

    if (!article) {
        return (
            <div className="keyword-article-page">
                <div className="not-found">
                    <h2>المقال غير موجود</h2>
                    <Link to="/" className="back-link">
                        <ChevronRight size={18} /> العودة للرئيسية
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="keyword-article-page">
            <div className="keyword-article-container">
                {/* Breadcrumb */}
                <div className="breadcrumb">
                    <Link to="/" className="breadcrumb-link">
                        <ChevronRight size={16} /> الرئيسية
                    </Link>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-current">{article.keyword}</span>
                </div>

                {/* Article Header */}
                <div className="article-header">
                    <div className="article-tag-badge">
                        <Tag size={18} />
                        <span>{article.keyword}</span>
                    </div>

                    <h1 className="article-title">{article.title}</h1>

                    <p className="article-meta-description">{article.metaDescription}</p>
                </div>

                {/* Article Content */}
                <div className="article-content">
                    {renderContent(article.content)}
                </div>

                {/* Call to Action */}
                <div className="article-cta">
                    <div className="cta-box">
                        <h3>هل تحتاج مساعدة الآن؟</h3>
                        <p>اتصل بنا على مدار الساعة للحصول على خدمة سريعة واحترافية</p>
                        <div className="cta-buttons">
                            <a href="tel:01044844492" className="cta-button primary">
                                اتصل الآن: 01044844492
                            </a>
                            <a href="https://wa.me/201044844492" className="cta-button secondary">
                                واتساب
                            </a>
                        </div>
                    </div>
                </div>

                {/* Back to Home */}
                <div className="article-footer">
                    <Link to="/" className="back-home-link">
                        <ChevronRight size={18} /> العودة للصفحة الرئيسية
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default KeywordArticles;
