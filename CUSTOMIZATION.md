# 🎨 Руководство по кастомизации

## Изменение цветовой схемы

### Основные цвета
Откройте `style.css` и найдите раздел `:root`. Здесь вы можете изменить все цвета сайта:

```css
:root {
    /* Основные цвета */
    --primary: #6366f1;        /* Синий - основной цвет кнопок и акцентов */
    --primary-dark: #4f46e5;   /* Темнее для hover эффектов */
    --primary-light: #818cf8;  /* Светлее для текста */
    
    --secondary: #8b5cf6;      /* Фиолетовый - вторичный цвет */
    --accent: #ec4899;         /* Розовый - акцентный цвет */
    
    /* Фоны */
    --bg-dark: #0a0a0f;        /* Основной фон */
    --bg-darker: #050508;      /* Темнее для секций */
    --bg-card: #13131a;        /* Фон карточек */
}
```

### Примеры цветовых схем

#### Зеленая (Matrix):
```css
--primary: #00ff41;
--secondary: #00cc33;
--accent: #00ff88;
```

#### Красная (Cyberpunk):
```css
--primary: #ff0055;
--secondary: #ff3366;
--accent: #ff6699;
```

#### Синяя (Ocean):
```css
--primary: #0ea5e9;
--secondary: #06b6d4;
--accent: #3b82f6;
```

## Изменение контента

### 1. Заголовок и описание

В `index.html` найдите секцию `.hero-content`:

```html
<h1 class="hero-title">
    Профессиональная<br>
    <span class="gradient-text">Прокачка Аккаунта</span><br>
    в Phasmophobia
</h1>
<p class="hero-subtitle">
    Ваш новый текст здесь
</p>
```

### 2. Статистика

Найдите `.hero-stats`:

```html
<div class="stat-item">
    <div class="stat-number">500+</div>
    <div class="stat-label">Выполненных заказов</div>
</div>
```

Измените числа и текст по своему усмотрению.

### 3. Услуги и цены

Найдите `.service-card`:

```html
<div class="service-card">
    <div class="service-badge">Популярно</div>
    <div class="service-icon">⭐</div>
    <h3>Базовая прокачка</h3>
    <div class="service-price">
        <span class="price-amount">от 500₽</span>
    </div>
    <ul class="service-features">
        <li>✓ Ваша услуга 1</li>
        <li>✓ Ваша услуга 2</li>
    </ul>
</div>
```

### 4. Контактная информация

Найдите секцию `#contact`:

```html
<a href="https://discord.com/users/ВАШ_DISCORD" target="_blank" class="contact-method">
    <!-- ... -->
    <div class="method-value">ваш_discord</div>
</a>
```

## Добавление новых секций

### Пример: Секция FAQ

Добавьте перед футером:

```html
<section class="faq">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Часто задаваемые <span class="gradient-text">вопросы</span></h2>
        </div>
        <div class="faq-list">
            <div class="faq-item">
                <h3>Вопрос 1?</h3>
                <p>Ответ на вопрос 1</p>
            </div>
            <div class="faq-item">
                <h3>Вопрос 2?</h3>
                <p>Ответ на вопрос 2</p>
            </div>
        </div>
    </div>
</section>
```

Добавьте стили в `style.css`:

```css
.faq {
    padding: 120px 0;
    background: var(--bg-dark);
}

.faq-list {
    max-width: 800px;
    margin: 0 auto;
}

.faq-item {
    padding: 24px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 12px;
    margin-bottom: 16px;
    transition: all 0.3s ease;
}

.faq-item:hover {
    border-color: var(--primary);
}

.faq-item h3 {
    font-size: 18px;
    margin-bottom: 12px;
    color: var(--text-primary);
}

.faq-item p {
    color: var(--text-secondary);
    line-height: 1.6;
}
```

## Изменение шрифтов

### Использование другого шрифта

1. Найдите шрифт на [Google Fonts](https://fonts.google.com/)
2. В `index.html` замените ссылку:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

3. В `style.css` измените:

```css
body {
    font-family: 'Poppins', sans-serif;
}
```

### Популярные шрифты для игровых сайтов:
- **Poppins** - современный, чистый
- **Montserrat** - жирный, выразительный
- **Rajdhani** - технологичный, футуристичный
- **Orbitron** - космический, sci-fi

## Добавление иконок

### Font Awesome

1. Добавьте в `<head>`:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

2. Используйте иконки:

```html
<i class="fas fa-rocket"></i>
<i class="fas fa-shield-alt"></i>
<i class="fas fa-comments"></i>
```

## Анимации

### Добавление новой анимации

В `style.css`:

```css
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.animated-element {
    animation: slideIn 0.8s ease;
}
```

### Изменение скорости анимаций

Найдите `transition` в CSS и измените время:

```css
.feature-card {
    transition: all 0.3s ease; /* Измените 0.3s на нужное значение */
}
```

## Адаптация под другие игры

### 1. Измените название
- Замените "Phasmophobia" на название вашей игры
- Измените эмодзи 👻 на подходящий для вашей игры

### 2. Измените цвета
- Используйте цвета, соответствующие стилю игры
- Например, для Valorant: красный и черный
- Для CS:GO: оранжевый и синий

### 3. Обновите контент
- Измените описания услуг
- Добавьте специфичные для игры термины
- Обновите процесс работы

## Оптимизация производительности

### Минификация CSS

Используйте онлайн-инструменты:
- [CSS Minifier](https://cssminifier.com/)
- Скопируйте содержимое `style.css`
- Вставьте минифицированный код

### Оптимизация изображений

Если добавляете изображения:
- Используйте WebP формат
- Сжимайте через [TinyPNG](https://tinypng.com/)
- Используйте lazy loading

## Добавление аналитики

### Google Analytics

Добавьте перед `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Советы по дизайну

1. **Контраст** - убедитесь, что текст читается на фоне
2. **Консистентность** - используйте одинаковые отступы и размеры
3. **Простота** - не перегружайте страницу элементами
4. **Мобильность** - всегда проверяйте на мобильных устройствах
5. **Скорость** - оптимизируйте изображения и код

## Тестирование

Проверьте сайт на:
- ✅ Разных браузерах (Chrome, Firefox, Safari)
- ✅ Мобильных устройствах
- ✅ Разных разрешениях экрана
- ✅ Скорость загрузки ([PageSpeed Insights](https://pagespeed.web.dev/))

---

Удачи в кастомизации! 🎨
