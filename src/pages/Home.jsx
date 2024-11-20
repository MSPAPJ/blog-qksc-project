import React from 'react';

    const Home = () => {
      return (
        <div>
          <h2>欢迎来到乾坤深藏</h2>
          <p>「乾坤神藏」是一个专注于分享各类优秀 AI 工具、前沿 AI 资讯、AI排行榜的自媒体平台，至今已发布超过 80+ 篇原创文章。🎖️ 使命是：「探索最新 AI 工具，发现 AI 带来的无限可能性」！</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '20px' }}>
            <a href="https://ai-bot.cn/ai-app-store/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '48px' }}>🛠️</span>
              <span style={{ fontSize: '16px', marginTop: '5px' }}>AI工具</span>
            </a>
            <a href="https://ai-bot.cn/daily-ai-news/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '48px' }}>📰</span>
              <span style={{ fontSize: '16px', marginTop: '5px' }}>AI资讯</span>
            </a>
            <a href="https://top.aibase.com/ranking/top" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '48px' }}>🏆</span>
              <span style={{ fontSize: '16px', marginTop: '5px' }}>AI排行榜</span>
            </a>
          </div>
        </div>
      );
    };

    export default Home;
