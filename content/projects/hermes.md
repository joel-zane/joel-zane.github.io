---
title: "Hermes AI 助手"
description: "个人 AI 助手配置与自动化脚本"
date: 2026-05-15
tags: ["AI", "自动化", "Python"]
image: "/images/projects/hermes.jpg"
github: "https://github.com/joel-zane"
---

## 项目简介

Hermes Agent 是一个自托管的 AI 助手平台，通过微信、Telegram 等消息平台与用户交互，能够自动执行任务、定时推送、代码编写、文件管理等操作。

## 功能特性

- **多平台接入**: 微信、Telegram、Discord 等消息平台
- **定时任务**: 天气预报、新闻摘要、每日反思等自动化推送
- **代码能力**: 可以编写、调试、部署代码
- **文件管理**: 读写服务器文件，管理网站内容
- **网页搜索**: 实时搜索互联网信息
- **SSH 远程控制**: 通过 WireGuard VPN 远程操控 Windows 电脑
- **记忆系统**: 跨会话的持久化记忆
- **技能系统**: 可复用的工作流和知识库

## 部署环境

- **服务器**: Oracle Cloud ARM A1（Ubuntu 24.04, 23GB RAM）
- **公网 IP**: 40.233.72.74
- **消息通道**: WeChat（iLink Bot API）
- **LLM**: MiMo v2.5 Pro（小米大模型）
