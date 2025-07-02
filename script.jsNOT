document.addEventListener('DOMContentLoaded', function() {
    // Анимация появления элементов
    const animatedElements = document.querySelectorAll('.animated-section');
    
    const animateOnScroll = () => {
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 50) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Запуск анимации при загрузке
    animateOnScroll();
    
    // Запуск анимации при скролле
    window.addEventListener('scroll', animateOnScroll);
    
    // Анимация для кнопок
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Анимация карточек
    const cards = document.querySelectorAll('.game-card, .mod-card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 400 + index * 200);
    });
    
    // Переключение темы
    const themeToggleBtns = document.querySelectorAll('.theme-toggle, .mobile-theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Обновление иконки
            const themeIcons = document.querySelectorAll('.theme-toggle i, .mobile-theme-toggle i');
            themeIcons.forEach(icon => {
                icon.className = newTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
            });
        });
    });
    
    // Мобильное меню
    const menuToggle = document.querySelector('.menu-toggle');
    const closeMenu = document.querySelector('.close-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });
    }
    
    if (closeMenu) {
        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    }
    
    // Закрытие меню при клике на ссылку
    const menuLinks = document.querySelectorAll('.mobile-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
    
    // Инициализация иконки темы
    const initThemeIcon = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const themeIcons = document.querySelectorAll('.theme-toggle i, .mobile-theme-toggle i');
        themeIcons.forEach(icon => {
            icon.className = currentTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
        });
    };
    
    initThemeIcon();
});
