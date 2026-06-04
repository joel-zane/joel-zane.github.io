---
title: "SSH 隧道管理器"
description: "Windows SSH 隧道管理工具，带仪表盘 GUI、实时监控、自动重连和系统托盘"
date: 2026-05-20
tags: ["Python", "SSH", "Windows", "GUI"]
image: "/images/projects/ml.jpg"
github: "https://github.com/joel-zane/ssh-tunnel-manager"
download: "/downloads/ssh-tunnel-manager.zip"
---

## 项目简介

SSH 隧道管理器是一个 Windows 桌面工具，用于管理和监控 SSH 隧道连接。通过图形化界面，用户可以方便地创建、管理和监控 SSH 隧道，支持自动重连、实时状态监控和系统托盘驻留。

## 功能特性

- **Canvas 渐变卡片 UI**: 暗色主题，现代感设计
- **实时连接监控**: 状态灯 + 脉冲动画，一目了然
- **延迟曲线图**: 实时显示网络延迟变化 + 健康条
- **自动重连**: 指数退避算法，网络波动时自动恢复
- **系统托盘驻留**: 最小化后在后台运行，不占用任务栏
- **通知提醒**: 连接状态变化时弹出 Windows 通知
- **开机自启**: 可选的开机自动启动
- **连接统计**: 记录连接时长、断线次数等数据

## 使用方法

1. 安装依赖：
   ```
   pip install netifaces pystray Pillow
   ```
2. 复制配置文件：
   ```
   copy config.json.example config.json
   ```
3. 编辑 `config.json`，填入服务器信息：
   - `ecs_host` — SSH 服务器 IP
   - `ssh_user` — SSH 用户名
   - `ssh_key` — SSH 私钥路径
   - `remote_port` / `local_port` — 隧道端口映射
4. 启动：
   - 双击 `start.vbs`（无终端窗口）
   - 或直接 `pythonw main.py`

## 系统要求

- Python 3.10+
- Windows 10/11
- SSH 客户端（Windows 自带 OpenSSH）

## 文件说明

| 文件 | 说明 |
|------|------|
| `main.py` | 主程序（GUI + 隧道逻辑） |
| `config.json` | 运行时配置 |
| `config.json.example` | 配置模板 |
| `start.vbs` | VBS 启动器（无窗口） |
| `start_hidden.vbs` | 隐藏窗口启动器 |

[⬇ 下载 ZIP](/downloads/ssh-tunnel-manager.zip) · [GitHub 源码](https://github.com/joel-zane/ssh-tunnel-manager)
