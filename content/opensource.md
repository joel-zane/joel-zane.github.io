---
title: "开源"
layout: "opensource"
---

<div class="page-header" style="text-align:center;padding-top:60px;">
    <h1>{{ if eq .Lang "en" }}Open Source{{ else }}开源{{ end }}</h1>
    <p style="color:#888;margin-top:8px;">{{ if eq .Lang "en" }}This site is fully open source.{{ else }}这个网站完全开源。{{ end }}</p>
</div>

<div style="max-width:700px;margin:0 auto;padding:40px 0;">
    <div style="background:#161616;border:1px solid #222;border-radius:12px;padding:32px;margin-bottom:24px;">
        <h2 style="color:#4ade80;font-size:1.2rem;margin-bottom:16px;">{{ if eq .Lang "en" }}Tech Stack{{ else }}技术栈{{ end }}</h2>
        <div class="tags" style="display:flex;flex-wrap:wrap;gap:8px;">
            <span class="tag">Hugo</span>
            <span class="tag">Archie</span>
            <span class="tag">Waline</span>
            <span class="tag">Nginx</span>
            <span class="tag">Oracle Cloud</span>
            <span class="tag">GitHub Pages</span>
        </div>
    </div>

    <div style="background:#161616;border:1px solid #222;border-radius:12px;padding:32px;margin-bottom:24px;">
        <h2 style="color:#4ade80;font-size:1.2rem;margin-bottom:16px;">{{ if eq .Lang "en" }}Features{{ else }}功能特性{{ end }}</h2>
        <ul style="list-style:none;padding:0;">
            <li style="padding:6px 0;color:#888;">✅ {{ if eq .Lang "en" }}Blog (Markdown){{ else }}博客文章（Markdown）{{ end }}</li>
            <li style="padding:6px 0;color:#888;">✅ {{ if eq .Lang "en" }}Project showcase{{ else }}项目展示{{ end }}</li>
            <li style="padding:6px 0;color:#888;">✅ {{ if eq .Lang "en" }}Gallery / Timeline / Toolbox{{ else }}画廊 / 时间线 / 工具箱{{ end }}</li>
            <li style="padding:6px 0;color:#888;">✅ {{ if eq .Lang "en" }}Chinese / English switch{{ else }}中英文切换{{ end }}</li>
            <li style="padding:6px 0;color:#888;">✅ {{ if eq .Lang "en" }}Dark / Light theme{{ else }}暗色/亮色主题{{ end }}</li>
            <li style="padding:6px 0;color:#888;">✅ {{ if eq .Lang "en" }}Local search (Ctrl+K){{ else }}本地搜索（Ctrl+K）{{ end }}</li>
            <li style="padding:6px 0;color:#888;">✅ {{ if eq .Lang "en" }}Guestbook (Waline){{ else }}访客留言墙（Waline）{{ end }}</li>
            <li style="padding:6px 0;color:#888;">✅ {{ if eq .Lang "en" }}PWA / RSS / SEO{{ else }}PWA / RSS / SEO{{ end }}</li>
        </ul>
    </div>

    <div style="display:flex;gap:16px;justify-content:center;margin-top:32px;">
        <a href="https://github.com/joel-zane/joel-zane.github.io" target="_blank"
           style="display:inline-flex;align-items:center;gap:8px;padding:12px 24px;background:#4ade80;color:#0d0d0d;border-radius:8px;font-weight:600;text-decoration:none;">
            ⭐ GitHub
        </a>
        <a href="https://github.com/joel-zane/joel-zane.github.io/blob/main/LICENSE" target="_blank"
           style="display:inline-flex;align-items:center;gap:8px;padding:12px 24px;border:2px solid #4ade80;color:#4ade80;border-radius:8px;font-weight:600;text-decoration:none;">
            📄 MIT License
        </a>
    </div>
</div>
