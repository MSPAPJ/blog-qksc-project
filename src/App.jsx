import React, { useState } from 'react';
    import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
    import Home from './pages/Home';
    import ArticleList from './pages/ArticleList';
    import ArticleDetail from './pages/ArticleDetail';
    import SubmitArticle from './pages/SubmitArticle';
    import About from './pages/About';

    const App = () => {
      const [theme, setTheme] = useState('light-theme');

      const changeTheme = (event) => {
        setTheme(event.target.value);
        document.body.className = event.target.value;
      };

      return (
        <Router>
          <div className="theme-selector">
            <select onChange={changeTheme} value={theme}>
              <option value="dark-theme">黑暗主题</option>
              <option value="light-theme">明亮主题</option>
              <option value="pixel-theme">像素主题</option>
              <option value="ios-theme">iOS 主题</option>
            </select>
          </div>
          <div className="header">
            <h1>乾坤深藏</h1>
          </div>
          <div className="nav">
            <Link to="/">主页</Link>
            <Link to="/articles">文章列表</Link>
            <Link to="/submit">投稿</Link>
            <Link to="/about">关于</Link>
          </div>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/articles" element={<ArticleList />} />
              <Route path="/articles/:id" element={<ArticleDetail />} />
              <Route path="/submit" element={<SubmitArticle />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <div className="footer">
            <p>&copy; 2023 乾坤深藏. All rights reserved.</p>
          </div>
        </Router>
      );
    };

    export default App;
