# 🐳 Запуск проекта с Docker

## Требования

Установите Docker Desktop:
- **Windows/Mac**: [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- **Linux**: [Docker Engine](https://docs.docker.com/engine/install/)

## 🚀 Быстрый запуск

### 1. Соберите и запустите контейнер

```bash
docker-compose up --build
```

### 2. Откройте в браузере

```
http://localhost:3000
```

### 3. Остановить контейнер

Нажмите `Ctrl+C` в терминале или выполните:

```bash
docker-compose down
```

## 📋 Основные команды

### Запуск в фоновом режиме
```bash
docker-compose up -d --build
```

### Просмотр логов
```bash
docker-compose logs -f
```

### Остановить контейнер
```bash
docker-compose down
```

### Полная очистка (удалить образ)
```bash
docker-compose down --rmi all
```

## 🔧 Альтернативный запуск (без docker-compose)

### 1. Соберите образ
```bash
docker build -t wyffest .
```

### 2. Запустите контейнер
```bash
docker run -p 3000:3000 wyffest
```

## ❗ Решение проблем

### Порт 3000 уже занят

Измените порт в `docker-compose.yml`:
```yaml
ports:
  - "8080:3000"  # Используйте порт 8080 вместо 3000
```

### Ошибка при сборке

Очистите Docker кэш:
```bash
docker system prune -a
docker-compose build --no-cache
```

### Проверить, что контейнер запущен
```bash
docker ps
```

## 🎉 Готово!

Приложение доступно на **http://localhost:3000**

Все вкладки должны работать:
- Мероприятия
- Новости
- Фотобанк
- МКД
- Документы
- Контакты
- ВФМ-2024
- Личный кабинет
