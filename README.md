# 一期一会 🌿

我的个人博客，记录 AI、技术与生活。

🔗 **在线访问**：https://joel-zane.github.io

## 技术栈

- **框架**：[Hugo](https://gohugo.io/) + [Archie](https://github.com/athul/archie) 主题
- **样式**：自定义 CSS（暗色/亮色主题切换）
- **评论**：[Waline](https://waline.js.org/)（自部署，无需登录）
- **部署**：Nginx（主站）+ GitHub Pages（备份）
- **服务器**：Oracle Cloud ARM64

## 功能

- ✅ 博客文章（Markdown 写作）
- ✅ 项目展示（详情页 + 标签）
- ✅ 画廊 / 时间线 / 工具箱
- ✅ 中英文切换
- ✅ 暗色/亮色主题
- ✅ 本地搜索（Ctrl+K）
- ✅ 访客留言墙
- ✅ 阅读进度条 / TOC / 返回顶部
- ✅ PWA 支持
- ✅ RSS 订阅

## 本地运行

```bash
# 安装 Hugo
brew install hugo  # macOS
# 或 https://gohugo.io/installation/

# 克隆仓库
git clone https://github.com/joel-zane/joel-zane.github.io.git
cd joel-zane.github.io

# 启动开发服务器
hugo server -D
```

## 目录结构

```
├── content/          # 文章和页面
├── data/             # JSON 数据（画廊、时间线、工具）
├── layouts/          # 自定义模板
├── static/           # 静态资源（图片、CSS）
├── i18n/             # 多语言翻译文件
└── themes/archie/    # 主题
```

## License

[MIT](LICENSE)
