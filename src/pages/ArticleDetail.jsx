import React from 'react';
    import { useParams } from 'react-router-dom';

    const ArticleDetail = () => {
      const { id } = useParams();
      const article = {
        id: 1,
        title: '文章标题 1',
        date: '2023-10-01',
        author: '作者 1',
        category: '分类 1',
        content: '这是文章的内容。'
      };

      return (
        <div>
          <h2>{article.title}</h2>
          <p>发布时间: {article.date}</p>
          <p>作者: {article.author}</p>
          <p>分类: {article.category}</p>
          <p>{article.content}</p>
        </div>
      );
    };

    export default ArticleDetail;
