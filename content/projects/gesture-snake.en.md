---
title: "Gesture Snake"
description: "STM32G474 + MPU6500 + ST7735 gesture-controlled snake game — tilt to steer, shake to reset"
date: 2026-06-11
tags: ["STM32", "Embedded", "C", "Keil"]
image: "/images/projects/snake.svg"
github: "https://github.com/joel-zane/gesture-snake-g474"
---

## Overview

A gesture-controlled snake game running on NUCLEO-G474RE. Tilt the board to steer the snake, shake hard to reset. Displayed on a 1.8" ST7735 TFT color screen.

## Hardware

| Component | Model | Interface |
|-----------|-------|-----------|
| MCU | STM32G474RE (NUCLEO) | - |
| Display | 1.8" ST7735 TFT (128×160) | Bit-bang SPI |
| Sensor | MPU6500 (Accel + Gyro) | Bit-bang I2C |

## Key Features

- **Tilt Control**: Steer by tilting, adjustable threshold (TILT_ON=2600)
- **Shake Reset**: Gyroscope-based shake detection, 4 consecutive confirmations
- **Partial Refresh**: Only redraw head/tail/food, no full-screen flicker
- **3 Lives System**: Wall/body collision deducts lives, 0 = Game Over
- **Auto Reconnect**: MPU6500 communication retry every 500ms

[GitHub Source](https://github.com/joel-zane/gesture-snake-g474)
