import React from 'react';
    import { Link } from 'react-router-dom';

    const ArticleList = () => {
      const articles = [
        { id: 1, title: '文章标题 1', date: '2023-10-01', author: '作者 1', category: '分类 1' },
        { id: 2, title: '文章标题 2', date: '2023-10-02', author: '作者 2', category: '分类 2' },
        // Add more articles as needed
      ];

      return (
        <div>
          <h2>文章列表</h2>
          <ul>
            {articles.map(article => (
              <li key={article.id}>
                <Link to={`/articles/${article.id}`}>{article.title}</Link>
                <p>发布时间: {article.date}</p>
                <p>作者: {article.author}</p>
                <p>分类: {article.category}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    };

    export default ArticleList;
