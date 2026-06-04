---
title: "一期一会"
layout: "home"
---

<div class="hero">
  <img src="/images/avatar.svg" alt="Joel Zane" class="hero-avatar">
  <div class="hero-content">
    <h1>嗨，我是 Joel Zane 👋</h1>
    <p class="hero-subtitle">一个对 AI、技术和二次元充满热情的学生</p>
    <div class="hero-tags">
      <span>🔥 AI/ML</span>
      <span>💻 技术</span>
      <span>🏀 NBA</span>
      <span>🎮 游戏</span>
      <span>🎌 二次元</span>
    </div>
    <p>这里是我的个人空间，记录学习、项目和生活。</p>
    <div class="hero-links">
      <a href="/about/" class="btn">了解更多 →</a>
      <a href="/posts/" class="btn btn-secondary">查看博客 →</a>
    </div>
  </div>
</div>

<style>
.hero {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  padding: 2.5rem;
  background: var(--bg-secondary);
  border-radius: 16px;
  margin-bottom: 2rem;
}

.hero-avatar {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--accent);
  flex-shrink: 0;
}

.hero-content h1 {
  margin: 0 0 0.5rem 0;
  font-size: 2rem;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin: 0 0 1rem 0;
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.hero-tags span {
  background: var(--bg);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

.hero-links {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.btn {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background: var(--accent);
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
}

.btn-secondary {
  background: transparent;
  border: 2px solid var(--accent);
  color: var(--accent);
}

@media (max-width: 600px) {
  .hero {
    flex-direction: column;
    text-align: center;
  }
  .hero-tags {
    justify-content: center;
  }
  .hero-links {
    justify-content: center;
  }
}
</style>
