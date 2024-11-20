import React from 'react';

    const SubmitArticle = () => {
      return (
        <div>
          <h2>投稿</h2>
          <form>
            <div>
              <label>文章标题:</label>
              <input type="text" name="title" />
            </div>
            <div>
              <label>文章内容:</label>
              <textarea name="content"></textarea>
            </div>
            <div>
              <label>作者名称:</label>
              <input type="text" name="author" />
            </div>
            <div>
              <label>文章分类:</label>
              <input type="text" name="category" />
            </div>
            <button type="submit">提交</button>
          </form>
        </div>
      );
    };

    export default SubmitArticle;
